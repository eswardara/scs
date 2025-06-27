document.addEventListener('DOMContentLoaded', function() {
    // Desktop menu functionality
    const navItems = document.querySelectorAll('.nav-link[data-menu]');
    const megaMenus = document.querySelectorAll('.mega-menu');
    let currentMenu = null;
    let timeoutId = null;
    
    // Mobile elements
    const mobileToggler = document.querySelector('.navbar-toggler');
    const mobileNavContainer = document.getElementById('mobile-nav-container');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const mobileBackButtons = document.querySelectorAll('.mobile-back-btn');
    
    // Hide all mega menus on page load
    hideAllMegaMenus();
    
    // Desktop menu functions
    function hideAllMegaMenus() {
        megaMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }
    
    function showMegaMenu(menuId) {
        hideAllMegaMenus();
        const targetMenu = document.getElementById(menuId + '-menu');
        if (targetMenu) {
            targetMenu.classList.add('show');
            currentMenu = targetMenu;
        }
    }
    
    // Desktop menu hover events
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                const menuId = this.getAttribute('data-menu');
                clearTimeout(timeoutId);
                showMegaMenu(menuId);
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                timeoutId = setTimeout(() => {
                    if (currentMenu && !currentMenu.matches(':hover')) {
                        hideAllMegaMenus();
                    }
                }, 100);
            }
        });
    });
    
    megaMenus.forEach(menu => {
        menu.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                clearTimeout(timeoutId);
            }
        });
        
        menu.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                timeoutId = setTimeout(() => {
                    hideAllMegaMenus();
                }, 100);
            }
        });
    });
    
    // Mobile menu toggle
    if (mobileToggler) {
        mobileToggler.addEventListener('click', function() {
            mobileNavContainer.classList.add('open');
            document.body.classList.add('mobile-menu-open');
        });
    }
    
    // Close mobile menu
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', function() {
            mobileNavContainer.classList.remove('open');
            document.body.classList.remove('mobile-menu-open');
        });
    }
    
    // Mobile submenu navigation
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetMenu = document.getElementById(targetId);
            
            if (targetMenu) {
                // Find current active menu and hide it
                const currentActive = document.querySelector('.mobile-submenu.active');
                if (currentActive) {
                    currentActive.classList.remove('active');
                }
                
                // Show target submenu
                targetMenu.classList.add('active');
            }
        });
    });
    
    // Back button in mobile submenus
    mobileBackButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentSubmenu = this.closest('.mobile-submenu');
            currentSubmenu.classList.remove('active');
            
            const parentId = currentSubmenu.getAttribute('data-parent');
            if (parentId) {
                const parentMenu = document.getElementById(parentId);
                if (parentMenu) {
                    parentMenu.classList.add('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileNavContainer && 
            mobileNavContainer.classList.contains('open') && 
            !mobileNavContainer.contains(e.target) && 
            e.target !== mobileToggler) {
            mobileNavContainer.classList.remove('open');
            document.body.classList.remove('mobile-menu-open');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            // Reset mobile menu when in desktop view
            if (mobileNavContainer) {
                mobileNavContainer.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            }
            
            // Hide desktop mega menus on resize
            hideAllMegaMenus();
        } else {
            // Hide desktop mega menus in mobile view
            hideAllMegaMenus();
        }
    });
    
    // Ensure mega menus are hidden when page loads
    document.addEventListener('load', hideAllMegaMenus);
});