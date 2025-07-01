using Microsoft.EntityFrameworkCore;
using DashboardApp.Models;

namespace DashboardApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<SalesData> SalesData { get; set; }
        public DbSet<UserMetric> UserMetrics { get; set; }
        public DbSet<SystemMetric> SystemMetrics { get; set; }
        public DbSet<RecentActivity> RecentActivities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SalesData>()
                .Property(s => s.Revenue)
                .HasPrecision(18, 2);

            base.OnModelCreating(modelBuilder);
        }
    }
}