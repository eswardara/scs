# ASP.NET MVC Dashboard with Tailwind CSS

A modern, responsive dashboard application built with ASP.NET Core MVC and styled with Tailwind CSS. Features real-time data visualization, interactive charts, and a clean, professional interface.

## Features

- **📊 Interactive Dashboard**: Comprehensive overview with key metrics and KPIs
- **📈 Real-time Charts**: Dynamic charts using Chart.js for data visualization
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS
- **⚡ Live Updates**: Auto-refreshing components for real-time data
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🔄 AJAX Integration**: Smooth data updates without page refreshes

## Dashboard Components

### Key Metrics Cards
- **Total Revenue**: Displays total sales revenue with trend indicators
- **Total Orders**: Shows order count with growth percentage
- **Active Users**: Current active user count with analytics
- **Conversion Rate**: Performance metrics with visual indicators

### Interactive Charts
- **Sales Overview**: Line chart showing revenue trends over time
- **User Activity**: Bar chart displaying user engagement metrics
- **System Metrics**: Real-time system performance monitoring

### Activity Feed
- **Recent Activities**: Live feed of user actions and system events
- **System Status**: Real-time monitoring of CPU, memory, and disk usage
- **Status Indicators**: Color-coded status indicators for quick assessment

## Technology Stack

- **Backend**: ASP.NET Core 8.0 MVC
- **Database**: Entity Framework Core with In-Memory Database
- **Frontend**: Tailwind CSS, Chart.js
- **Icons**: Heroicons (SVG icons)
- **Architecture**: Model-View-Controller (MVC) pattern

## Project Structure

```
DashboardApp/
├── Controllers/
│   └── DashboardController.cs      # Main dashboard controller
├── Data/
│   ├── ApplicationDbContext.cs     # Entity Framework context
│   └── SeedData.cs                 # Sample data seeding
├── Models/
│   └── DashboardModels.cs          # Data models and view models
├── Views/
│   ├── Dashboard/
│   │   ├── Index.cshtml            # Main dashboard view
│   │   └── _RecentActivities.cshtml # Partial view for activities
│   └── Shared/
│       ├── _Layout.cshtml          # Main layout template
│       ├── _ViewStart.cshtml       # View start configuration
│       └── _ViewImports.cshtml     # Global view imports
├── wwwroot/
│   ├── css/
│   │   └── site.css                # Custom styles
│   └── js/
│       └── site.js                 # Client-side functionality
├── Properties/
│   └── launchSettings.json         # Development settings
├── DashboardApp.csproj             # Project configuration
├── Program.cs                      # Application entry point
└── README.md                       # Project documentation
```

## Getting Started

### Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- A code editor (Visual Studio, VS Code, or Rider)

### Installation & Setup

1. **Clone or download the project files**

2. **Navigate to the project directory**
   ```bash
   cd DashboardApp
   ```

3. **Restore dependencies**
   ```bash
   dotnet restore
   ```

4. **Run the application**
   ```bash
   dotnet run
   ```

5. **Open your browser and navigate to**
   - HTTP: `http://localhost:5000`
   - HTTPS: `https://localhost:5001`

The application will automatically seed sample data on first run.

## Configuration

### Database
The application uses Entity Framework Core with an in-memory database for demonstration purposes. The database is automatically seeded with sample data including:
- Sales data across multiple categories and regions
- User metrics and activity data
- System performance metrics
- Recent activity logs

### Tailwind CSS
Tailwind CSS is loaded via CDN for quick setup. For production, consider:
- Installing Tailwind CSS locally
- Setting up a build process for CSS optimization
- Configuring PurgeCSS to remove unused styles

## API Endpoints

### Dashboard Data
- `GET /Dashboard` - Main dashboard view
- `GET /Dashboard/GetChartData?type={sales|users|system}` - Chart data JSON
- `GET /Dashboard/GetRecentActivities` - Recent activities partial view

## Customization

### Adding New Metrics
1. Create new model in `Models/DashboardModels.cs`
2. Add DbSet to `ApplicationDbContext.cs`
3. Update seed data in `SeedData.cs`
4. Modify controller actions in `DashboardController.cs`
5. Update views to display new metrics

### Styling Customization
The application uses Tailwind CSS with custom color scheme:
- Primary: `#3B82F6` (Blue)
- Secondary: `#6366F1` (Indigo)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Yellow)
- Danger: `#EF4444` (Red)

### Chart Customization
Charts are powered by Chart.js. Customize in the dashboard view's script section:
- Chart types and configurations
- Color schemes and styling
- Data refresh intervals
- Responsive behavior

## Performance Features

- **Lazy Loading**: Charts and data load asynchronously
- **Auto-refresh**: Activities update every 30 seconds
- **Responsive Design**: Optimized for all screen sizes
- **Efficient Queries**: EF Core optimized database queries
- **CDN Resources**: External libraries loaded from CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).