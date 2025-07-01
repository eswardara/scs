# Quick Start Guide - ASP.NET MVC Dashboard

## Prerequisites
- .NET 8.0 SDK installed
- Any modern web browser

## Running the Application

1. **Navigate to the project directory**
   ```bash
   cd /workspace
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Build the application**
   ```bash
   dotnet build
   ```

4. **Run the application**
   ```bash
   dotnet run
   ```

5. **Access the dashboard**
   - Open your web browser
   - Navigate to: `http://localhost:5000` or `https://localhost:5001`
   - The dashboard will automatically load with sample data

## Application Features

✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Real-time Charts** - Interactive data visualization with Chart.js  
✅ **Live Updates** - Activities refresh automatically every 30 seconds  
✅ **Modern UI** - Clean design with Tailwind CSS  
✅ **Sample Data** - Pre-populated with realistic business metrics  

## Dashboard Components

- **KPI Cards**: Revenue, Orders, Users, Conversion Rate
- **Sales Chart**: Line chart showing revenue trends
- **User Activity Chart**: Bar chart with user engagement metrics
- **Recent Activities**: Live feed of user actions
- **System Status**: Real-time monitoring with progress bars

## API Endpoints

- `GET /Dashboard` - Main dashboard view
- `GET /Dashboard/GetChartData?type=sales` - Sales data JSON
- `GET /Dashboard/GetChartData?type=users` - User data JSON
- `GET /Dashboard/GetChartData?type=system` - System metrics JSON
- `GET /Dashboard/GetRecentActivities` - Activities partial view

## Technology Stack

- **Backend**: ASP.NET Core 8.0 MVC
- **Database**: Entity Framework Core (In-Memory)
- **Frontend**: Tailwind CSS + Chart.js
- **Icons**: Heroicons SVG

## Notes

- The application uses an in-memory database that is automatically seeded with sample data
- All data is reset when the application restarts
- For production use, replace the in-memory database with a persistent database like SQL Server, PostgreSQL, or MySQL

## Stopping the Application

Press `Ctrl+C` in the terminal where the application is running.