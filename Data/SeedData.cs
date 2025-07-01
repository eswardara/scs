using DashboardApp.Models;

namespace DashboardApp.Data
{
    public static class SeedData
    {
        public static async Task Initialize(ApplicationDbContext context)
        {
            if (context.SalesData.Any())
                return; // Database has been seeded

            var random = new Random();
            var startDate = DateTime.Now.AddDays(-30);

            // Seed Sales Data
            var salesData = new List<SalesData>();
            var categories = new[] { "Electronics", "Clothing", "Books", "Home & Garden", "Sports" };
            var regions = new[] { "North America", "Europe", "Asia", "South America", "Africa" };

            for (int i = 0; i < 100; i++)
            {
                salesData.Add(new SalesData
                {
                    Date = startDate.AddDays(random.Next(0, 30)),
                    Revenue = (decimal)(random.NextDouble() * 10000 + 1000),
                    Orders = random.Next(1, 50),
                    ProductCategory = categories[random.Next(categories.Length)],
                    Region = regions[random.Next(regions.Length)]
                });
            }

            // Seed User Metrics
            var userMetrics = new List<UserMetric>();
            for (int i = 0; i < 30; i++)
            {
                userMetrics.Add(new UserMetric
                {
                    Date = startDate.AddDays(i),
                    ActiveUsers = random.Next(1000, 5000),
                    NewSignups = random.Next(50, 300),
                    PageViews = random.Next(10000, 50000),
                    BounceRate = random.NextDouble() * 0.5 + 0.2
                });
            }

            // Seed System Metrics
            var systemMetrics = new List<SystemMetric>();
            for (int i = 0; i < 100; i++)
            {
                systemMetrics.Add(new SystemMetric
                {
                    Timestamp = DateTime.Now.AddHours(-i),
                    CpuUsage = random.NextDouble() * 100,
                    MemoryUsage = random.NextDouble() * 100,
                    DiskUsage = random.NextDouble() * 100,
                    ActiveConnections = random.Next(100, 1000),
                    ResponseTime = random.NextDouble() * 500 + 50
                });
            }

            // Seed Recent Activities
            var activities = new List<RecentActivity>();
            var users = new[] { "John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson", "Tom Brown" };
            var actions = new[] { "Login", "Logout", "Purchase", "View Product", "Update Profile", "Add to Cart" };
            var statuses = new[] { "Success", "Failed", "Pending" };

            for (int i = 0; i < 50; i++)
            {
                activities.Add(new RecentActivity
                {
                    Timestamp = DateTime.Now.AddMinutes(-random.Next(0, 1440)),
                    UserName = users[random.Next(users.Length)],
                    Action = actions[random.Next(actions.Length)],
                    Description = $"User performed {actions[random.Next(actions.Length)].ToLower()} action",
                    Status = statuses[random.Next(statuses.Length)]
                });
            }

            context.SalesData.AddRange(salesData);
            context.UserMetrics.AddRange(userMetrics);
            context.SystemMetrics.AddRange(systemMetrics);
            context.RecentActivities.AddRange(activities);

            await context.SaveChangesAsync();
        }
    }
}