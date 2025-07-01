using System.ComponentModel.DataAnnotations;

namespace DashboardApp.Models
{
    public class SalesData
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Revenue { get; set; }
        public int Orders { get; set; }
        public string ProductCategory { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
    }

    public class UserMetric
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int ActiveUsers { get; set; }
        public int NewSignups { get; set; }
        public int PageViews { get; set; }
        public double BounceRate { get; set; }
    }

    public class SystemMetric
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public double CpuUsage { get; set; }
        public double MemoryUsage { get; set; }
        public double DiskUsage { get; set; }
        public int ActiveConnections { get; set; }
        public double ResponseTime { get; set; }
    }

    public class RecentActivity
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Action { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
    }

    public class DashboardViewModel
    {
        public decimal TotalRevenue { get; set; }
        public int TotalOrders { get; set; }
        public int ActiveUsers { get; set; }
        public double ConversionRate { get; set; }
        public List<SalesData> RecentSales { get; set; } = new();
        public List<UserMetric> UserMetrics { get; set; } = new();
        public List<SystemMetric> SystemMetrics { get; set; } = new();
        public List<RecentActivity> RecentActivities { get; set; } = new();
        public Dictionary<string, decimal> SalesByCategory { get; set; } = new();
        public Dictionary<string, decimal> SalesByRegion { get; set; } = new();
    }
}