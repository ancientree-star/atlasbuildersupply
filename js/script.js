// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Helper: show simulation message
    function showQuoteSimulation(productType = 'general') {
        let message = `📞 Atlas Builder Supply: Quote request received for ${productType}.\n\nOur team will respond within 2 business hours.\n\nTel:  +1 (626) 413 7684\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040\n\nEmail:  info@atlasbuildersupply.com`;
        if (productType === 'warehouse') {
            message = "📍 Atlas Builder Supply Warehouse\n\nAtlas building supply llc 10422 W Gulf Bank Rd, Houston, TX 77040\n\nPickup Hours: Monday-Friday 7am-4pm\nSaturday 8am-12pm\n\nCall +1 (626) 413 7684 ahead for large orders.";
        }
        alert(message);
    }
    
    // Product category buttons
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let productType = 'general';
            if (btn.hasAttribute('data-product')) {
                productType = btn.getAttribute('data-product');
            } else if (btn.innerText.includes('Cabinet')) {
                productType = 'Kitchen Cabinets';
            } else if (btn.innerText.includes('Closet')) {
                productType = 'Closets & Wardrobes';
            } else if (btn.innerText.includes('Trim')) {
                productType = 'Mouldings & Trim';
            }
            showQuoteSimulation(productType);
        });
    });
    
    // Hero buttons
    const heroQuoteBtn = document.getElementById('heroQuoteBtn');
    const heroStockBtn = document.getElementById('heroStockBtn');
    if (heroQuoteBtn) {
        heroQuoteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showQuoteSimulation('general');
        });
    }
    if (heroStockBtn) {
        heroStockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("📦 Stock Availability: Cabinets, closets, and mouldings are in stock.\n\nTel:  +1 (626) 413 7684\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040\n\nEmail:  info@atlasbuildersupply.com");
        });
    }
    
    // Navigation CTA
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
        navCta.addEventListener('click', (e) => {
            e.preventDefault();
            showQuoteSimulation('general');
        });
    }
    
    // Warehouse button
    const warehouseBtn = document.getElementById('warehouseBtn');
    if (warehouseBtn) {
        warehouseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showQuoteSimulation('warehouse');
        });
    }
    
    // Contact section three cards (English)
    const quoteLink1 = document.getElementById('quoteLink1');
    const quoteLink = document.getElementById('quoteLink');
    const stockLink = document.getElementById('stockLink');
    const teamLink = document.getElementById('teamLink');
    
    if (quoteLink1) {
        quoteLink1.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Request a Quote: Please provide product category, quantity, and timeline.\n\nTel:  +1 (626) 413 7684\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040\n\nEmail:  info@atlasbuildersupply.com");
        });
    }
    if (quoteLink) {
        quoteLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("📄 Request a Quote: Please provide product category, quantity, and timeline. Our team will respond within 2 hours.\n\nTel:  +1 (626) 413 7684\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040\n\nEmail:  info@atlasbuildersupply.com");
        });
    }
    if (stockLink) {
        stockLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("📦 Check Availability: Cabinets, closets, and mouldings are in stock. Contact warehouse for specific quantities.\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040");
        });
    }
    if (teamLink) {
        teamLink.addEventListener('click', (e) => {
            e.preventDefault()
            alert("👥 Contact Team: We will respond within 2 hours.\n\nTel:  +1 (626) 413 7684\n\nOur warehouse address:  Atlas Building Supply LLC10422 W Gulf Bank Rd, Houston, TX 77040\n\nEmail:  info@atlasbuildersupply.com");
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log("Atlas Builder Supply — Ready");
});