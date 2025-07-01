// Site-wide JavaScript functionality

// Utility function to format numbers
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Utility function to format currency
function formatCurrency(num) {
    return '$' + formatNumber(num.toFixed(0));
}

// Function to update timestamp displays
function updateTimestamps() {
    const timeElements = document.querySelectorAll('[data-timestamp]');
    timeElements.forEach(element => {
        const timestamp = new Date(element.dataset.timestamp);
        const now = new Date();
        const diff = now - timestamp;
        
        if (diff < 60000) { // Less than 1 minute
            element.textContent = 'Just now';
        } else if (diff < 3600000) { // Less than 1 hour
            const minutes = Math.floor(diff / 60000);
            element.textContent = `${minutes}m ago`;
        } else if (diff < 86400000) { // Less than 1 day
            const hours = Math.floor(diff / 3600000);
            element.textContent = `${hours}h ago`;
        } else {
            element.textContent = timestamp.toLocaleDateString();
        }
    });
}

// Update timestamps every minute
setInterval(updateTimestamps, 60000);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamps();
});