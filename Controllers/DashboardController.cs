using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DashboardApp.Data;
using DashboardApp.Models;

namespace DashboardApp.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var viewModel = new DashboardViewModel();

            // Calculate summary statistics
            var totalRevenue = await _context.SalesData.SumAsync(s => s.Revenue);
            var totalOrders = await _context.SalesData.SumAsync(s => s.Orders);
            var latestUserMetric = await _context.UserMetrics
                .OrderByDescending(u => u.Date)
                .FirstOrDefaultAsync();

            viewModel.TotalRevenue = totalRevenue;
            viewModel.TotalOrders = totalOrders;
            viewModel.ActiveUsers = latestUserMetric?.ActiveUsers ?? 0;
            viewModel.ConversionRate = totalOrders > 0 ? (double)totalRevenue / totalOrders * 0.1 : 0;

            // Get recent sales (last 10)
            viewModel.RecentSales = await _context.SalesData
                .OrderByDescending(s => s.Date)
                .Take(10)
                .ToListAsync();

            // Get user metrics for the last 7 days
            viewModel.UserMetrics = await _context.UserMetrics
                .OrderByDescending(u => u.Date)
                .Take(7)
                .ToListAsync();

            // Get system metrics for the last 24 hours
            viewModel.SystemMetrics = await _context.SystemMetrics
                .Where(s => s.Timestamp >= DateTime.Now.AddHours(-24))
                .OrderByDescending(s => s.Timestamp)
                .Take(24)
                .ToListAsync();

            // Get recent activities
            viewModel.RecentActivities = await _context.RecentActivities
                .OrderByDescending(a => a.Timestamp)
                .Take(10)
                .ToListAsync();

            // Sales by category
            viewModel.SalesByCategory = await _context.SalesData
                .GroupBy(s => s.ProductCategory)
                .Select(g => new { Category = g.Key, Total = g.Sum(s => s.Revenue) })
                .ToDictionaryAsync(x => x.Category, x => x.Total);

            // Sales by region
            viewModel.SalesByRegion = await _context.SalesData
                .GroupBy(s => s.Region)
                .Select(g => new { Region = g.Key, Total = g.Sum(s => s.Revenue) })
                .ToDictionaryAsync(x => x.Region, x => x.Total);

            return View(viewModel);
        }

        [HttpGet]
        public async Task<IActionResult> GetChartData(string type)
        {
            switch (type.ToLower())
            {
                case "sales":
                    var salesData = await _context.SalesData
                        .GroupBy(s => s.Date.Date)
                        .Select(g => new { Date = g.Key, Revenue = g.Sum(s => s.Revenue) })
                        .OrderBy(x => x.Date)
                        .ToListAsync();
                    return Json(salesData);

                case "users":
                    var userData = await _context.UserMetrics
                        .OrderBy(u => u.Date)
                        .Select(u => new { u.Date, u.ActiveUsers, u.NewSignups })
                        .ToListAsync();
                    return Json(userData);

                case "system":
                    var systemData = await _context.SystemMetrics
                        .Where(s => s.Timestamp >= DateTime.Now.AddHours(-24))
                        .OrderBy(s => s.Timestamp)
                        .Select(s => new { s.Timestamp, s.CpuUsage, s.MemoryUsage })
                        .ToListAsync();
                    return Json(systemData);

                default:
                    return BadRequest("Invalid chart type");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetRecentActivities()
        {
            var activities = await _context.RecentActivities
                .OrderByDescending(a => a.Timestamp)
                .Take(20)
                .ToListAsync();
            return PartialView("_RecentActivities", activities);
        }
    }
}