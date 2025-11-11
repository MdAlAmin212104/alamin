// Blog data array - Add your blog content here
const blogData = [
    {
        id: 1,
        title: "Shopify App Development: From Remix to React Router — The Big Transition",
        category: "Shopify App Development",
        date: "November 10, 2025",
        day: "10",
        month: "NOV",
        image: "assets/images/remix-to-router.jpeg",
        content: `
            <h4 class="nunc font_w_font_s1">
                Shopify has officially transitioned from using Remix to React Router for app development — a major move that marks
                a new chapter for developers building on the Shopify platform. Previously, Remix handled server-side rendering,
                routing, and data loading within the Shopify App Template. But as React Router evolved, Shopify decided to adopt a
                more unified and flexible approach that aligns with modern React development.
            </h4>

            <h4 class="nunc font_w_font_s1">
                This change isn't just about switching frameworks — it's about performance, flexibility, and long-term stability.
                The new React Router–based setup allows developers to use familiar React patterns while enjoying improved speed,
                simplified data fetching, and easier deployment across Node.js or serverless environments.
            </h4>

            <div class="blog-pop-up-list-main">
                <ul class="blog-pop-up-list">
                    <li><strong>Unified Framework:</strong> React Router now includes the best features of Remix, such as data
                        loaders and actions, directly inside the React ecosystem.</li>
                    <li><strong>Simplified Structure:</strong> No more file-based routing — everything is handled through
                        React components, giving developers more control.</li>
                    <li><strong>Improved Performance:</strong> Faster route handling and better rendering make app experiences
                        smoother and more reliable.</li>
                    <li><strong>Easier Deployment:</strong> Works seamlessly in various environments like Node.js or Cloudflare
                        without Remix-specific setups.</li>
                    <li><strong>Better Maintenance:</strong> A lighter codebase means fewer dependencies and easier version
                        upgrades for long-term projects.</li>
                </ul>
            </div>

            <div class="small_blog">
                <h5 class="integer font_w_font_s1">
                    For developers who built apps using <code>@shopify/shopify-app-remix</code>, Shopify now recommends migrating to
                    <code>@shopify/shopify-app-react-router</code>. The migration process is straightforward — update your imports,
                    routing logic, and authentication functions to use the new SDK.
                </h5>
                <div class="line_client">
                    <div class="line"></div>
                    <h5 class="jordon font_w_font_s">By Md Al Amin Islam</h5>
                </div>
            </div>

            <h5 class="viverra font_w_font_s">
                The future of Shopify app development is React Router–powered — more stable, modern, and developer-friendly.
            </h5>

            <h5 class="integer vel font_w_font_s1">
                Whether you're starting a new project or updating an existing app, now is the perfect time to adapt. This shift
                ensures that your Shopify app stays aligned with the latest best practices in React, offering better scalability,
                simpler maintenance, and a more enjoyable developer experience overall.
            </h5>

            <h5 class="integer eget font_w_font_s1">
                In summary, Shopify's transition from Remix to React Router isn't just a technical upgrade — it's a strategic
                decision that empowers developers to build faster, smarter, and more consistent applications using the most
                up-to-date React tools.
            </h5>
        `
    },
    {
        id: 2,
        title: "Mastering Shopify Theme Customization: Liquid, Sections & Best Practices",
        category: "Shopify Theme Development",
        date: "December 25, 2025",
        day: "25",
        month: "OCT",
        image: "assets/images/Mastering Shopify Theme.webp",
        content: `
            <h4 class="nunc font_w_font_s1">
                Shopify theme customization is more than just changing colors and fonts — it's about creating unique, 
                high-performing online stores that reflect your brand identity and drive conversions. Understanding Shopify's 
                Liquid templating language, theme sections, and schema-based customization is essential for any developer 
                working in the e-commerce space.
            </h4>

            <h4 class="nunc font_w_font_s1">
                Whether you're modifying an existing theme or building custom sections from scratch, mastering these skills 
                will allow you to deliver professional, scalable solutions that meet client needs while maintaining code quality 
                and performance standards.
            </h4>

            <div class="blog-pop-up-list-main">
                <ul class="blog-pop-up-list">
                    <li><strong>Liquid Templating:</strong> Learn to work with Shopify's templating language for dynamic content 
                        rendering, filters, and conditional logic that powers theme functionality.</li>
                    <li><strong>Section Schema:</strong> Master JSON-based schemas that enable merchants to customize theme 
                        sections directly from the Shopify admin without touching code.</li>
                    <li><strong>Theme Architecture:</strong> Understand the structure of Shopify themes including layout files, 
                        templates, sections, snippets, and assets for organized development.</li>
                    <li><strong>Responsive Design:</strong> Implement mobile-first design principles ensuring your themes look 
                        perfect on all devices and screen sizes.</li>
                    <li><strong>Performance Optimization:</strong> Apply best practices for image optimization, lazy loading, 
                        and efficient CSS/JS to achieve fast page load times.</li>
                    <li><strong>Customization Best Practices:</strong> Follow Shopify's coding standards, use version control, 
                        and create reusable components for maintainable code.</li>
                </ul>
            </div>

            <div class="small_blog">
                <h5 class="integer font_w_font_s1">
                    Modern Shopify theme development requires a deep understanding of both front-end technologies (HTML, CSS, JavaScript) 
                    and Shopify-specific tools. By combining these skills with attention to user experience and conversion optimization, 
                    you can create themes that not only look beautiful but also help businesses grow.
                </h5>
                <div class="line_client">
                    <div class="line"></div>
                    <h5 class="jordon font_w_font_s">By Md Al Amin Islam</h5>
                </div>
            </div>

            <h5 class="viverra font_w_font_s">
                Theme customization is where creativity meets technical expertise — transforming standard Shopify stores into 
                unique brand experiences.
            </h5>

            <h5 class="integer vel font_w_font_s1">
                The key to successful theme customization lies in understanding your client's business goals, their target audience, 
                and how to translate those requirements into functional, beautiful code. Always test thoroughly across different 
                devices and browsers, optimize for performance, and document your customizations for future maintenance.
            </h5>

            <h5 class="integer eget font_w_font_s1">
                Remember, a well-customized Shopify theme should be easy for merchants to manage, fast for customers to navigate, 
                and flexible enough to grow with the business. Keep learning, stay updated with Shopify's latest features, and 
                always prioritize user experience in your development decisions.
            </h5>
        `
    },
    {
        id: 3,
        title: "Building Shopify Apps with Polaris: Creating Professional Admin Interfaces",
        category: "Shopify App Development",
        date: "December 15, 2025",
        day: "15",
        month: "SEP",
        image: "assets/images/polaris-app.png",
        content: `
            <h4 class="nunc font_w_font_s1">
                Shopify Polaris is the design system that powers the Shopify admin interface — and it's also the secret weapon 
                for building professional, user-friendly Shopify apps. When you use Polaris components in your app development, 
                you're ensuring your app feels native to Shopify, providing merchants with a familiar and intuitive experience.
            </h4>

            <h4 class="nunc font_w_font_s1">
                Building apps with Polaris isn't just about using pre-built components — it's about understanding design principles, 
                accessibility standards, and best practices that make your app stand out in the Shopify App Store. From simple 
                forms to complex data tables, Polaris provides everything you need to create exceptional user experiences.
            </h4>

            <div class="blog-pop-up-list-main">
                <ul class="blog-pop-up-list">
                    <li><strong>Component Library:</strong> Access 40+ React components including buttons, cards, modals, data tables, 
                        and forms that are battle-tested and production-ready.</li>
                    <li><strong>Consistent Design:</strong> Maintain visual consistency with Shopify's admin interface, making your 
                        app feel like a natural extension of the platform.</li>
                    <li><strong>Accessibility Built-in:</strong> All Polaris components follow WCAG guidelines, ensuring your app 
                        is accessible to merchants with disabilities.</li>
                    <li><strong>Responsive by Default:</strong> Polaris components automatically adapt to different screen sizes, 
                        from desktop to mobile devices.</li>
                    <li><strong>TypeScript Support:</strong> Full TypeScript definitions make development faster and catch errors 
                        before they reach production.</li>
                    <li><strong>Regular Updates:</strong> Shopify continuously improves Polaris with new components, patterns, 
                        and best practices based on merchant feedback.</li>
                </ul>
            </div>

            <div class="small_blog">
                <h5 class="integer font_w_font_s1">
                    When building with Polaris, start by exploring the official documentation and component examples. Understand 
                    the design patterns Shopify recommends for common app scenarios like onboarding, settings pages, and data 
                    management. Use the Polaris tokens system for colors, spacing, and typography to maintain consistency throughout 
                    your app.
                </h5>
                <div class="line_client">
                    <div class="line"></div>
                    <h5 class="jordon font_w_font_s">By Md Al Amin Islam</h5>
                </div>
            </div>

            <h5 class="viverra font_w_font_s">
                Polaris isn't just a UI library — it's a complete design system that helps you build apps merchants love to use.
            </h5>

            <h5 class="integer vel font_w_font_s1">
                The best Shopify apps prioritize user experience, and Polaris makes that easy. Instead of spending time designing 
                basic UI elements, you can focus on your app's unique functionality and business logic. The result is faster 
                development cycles and more polished products that integrate seamlessly into the Shopify ecosystem.
            </h5>

            <h5 class="integer eget font_w_font_s1">
                As you develop with Polaris, pay attention to loading states, error handling, and empty states — these details 
                make the difference between a good app and a great one. Test your app with real merchants, gather feedback, 
                and iterate continuously. The Shopify App Store is competitive, but with Polaris and a focus on user experience, 
                your app can truly stand out.
            </h5>
        `
    },
    {
        id: 4,
        title: "Shopify App Bridge: Connecting Your App to the Shopify Admin Experience",
        category: "Shopify App Development",
        date: "December 8, 2025",
        day: "08",
        month: "AUG",
        image: "assets/images/app-bridge.webp",
        content: `
            <h4 class="nunc font_w_font_s1">
                Shopify App Bridge is the JavaScript library that enables your app to communicate with the Shopify admin, 
                creating seamless integrations that feel like native Shopify features. Whether you're opening modals, 
                triggering navigation, or managing app subscriptions, App Bridge is your gateway to building powerful, 
                integrated Shopify applications.
            </h4>

            <h4 class="nunc font_w_font_s1">
                Understanding App Bridge is crucial for any Shopify app developer. It handles authentication, provides utilities 
                for common tasks, and ensures your app works correctly whether it's embedded in the Shopify admin or running 
                standalone. This powerful tool transforms simple web apps into fully integrated Shopify experiences.
            </h4>

            <div class="blog-pop-up-list-main">
                <ul class="blog-pop-up-list">
                    <li><strong>Seamless Authentication:</strong> App Bridge handles OAuth flows and session management, 
                        ensuring secure connections between your app and Shopify stores.</li>
                    <li><strong>Navigation Control:</strong> Programmatically navigate within the Shopify admin, update breadcrumbs, 
                        and control the merchant's experience without page reloads.</li>
                    <li><strong>Modal & Toast Integration:</strong> Display modals, confirmation dialogs, and toast notifications 
                        that match Shopify's native UI patterns.</li>
                    <li><strong>Resource Selection:</strong> Let merchants select products, collections, or customers using 
                        Shopify's native resource pickers with full search capabilities.</li>
                    <li><strong>Context Awareness:</strong> Access information about the current shop, user, and admin context 
                        to personalize your app experience.</li>
                    <li><strong>Subscription Management:</strong> Implement app billing and subscription flows directly through 
                        App Bridge's billing API.</li>
                </ul>
            </div>

            <div class="small_blog">
                <h5 class="integer font_w_font_s1">
                    App Bridge works seamlessly with modern frameworks like React, making it easy to integrate into your existing 
                    development workflow. Combined with Polaris components and React Router, you can build sophisticated apps 
                    that feel completely native to Shopify. The key is understanding when to use App Bridge actions versus 
                    standard web APIs.
                </h5>
                <div class="line_client">
                    <div class="line"></div>
                    <h5 class="jordon font_w_font_s">By Md Al Amin Islam</h5>
                </div>
            </div>

            <h5 class="viverra font_w_font_s">
                App Bridge transforms your app from a standalone tool into an integrated part of the Shopify ecosystem.
            </h5>

            <h5 class="integer vel font_w_font_s1">
                When implementing App Bridge, always consider the merchant experience. Use navigation actions to keep merchants 
                oriented within the admin, leverage resource pickers instead of building custom selection interfaces, and take 
                advantage of native modals for confirmations and forms. These patterns are familiar to merchants and reduce 
                cognitive load.
            </h5>

            <h5 class="integer eget font_w_font_s1">
                The combination of App Bridge, Polaris, and modern React development creates a powerful foundation for Shopify 
                app development. Stay updated with Shopify's documentation, test your app thoroughly in embedded contexts, and 
                always prioritize the merchant experience. With these tools and best practices, you can build apps that merchants 
                trust and rely on every day.
            </h5>
        `
    }
];

// Function to open blog modal with specific content
function openBlogModal(blogId) {
    const blog = blogData.find(b => b.id === blogId);
    if (!blog) return;

    // Find the first modal wrapper (we'll reuse it for all blogs)
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modal = modalWrapper.querySelector('.modal');
    const content = modal.querySelector('.content3');

    // Update modal content
    content.querySelector('.logo_design').textContent = blog.title;
    content.querySelector('.graphic').textContent = `${blog.category} | ${blog.date}`;
    content.querySelector('.blog_pop_up').src = blog.image;
    content.querySelector('.blog_pop_up').alt = blog.title;

    // Find the content area (after the image) and update it
    const nuncElements = content.querySelectorAll('.nunc');
    if (nuncElements.length > 0) {
        // Remove old content elements
        const contentArea = nuncElements[0].parentElement;
        const elementsToRemove = contentArea.querySelectorAll('.nunc, .blog-pop-up-list-main, .small_blog, .viverra, .vel, .eget');
        elementsToRemove.forEach(el => el.remove());

        // Insert new content after the image
        const blogPopUpMain = content.querySelector('.blog_pop_up_main');
        blogPopUpMain.insertAdjacentHTML('afterend', blog.content);
    }

    // Show modal
    modalWrapper.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close blog modal
function closeBlogModal() {
    const modalWrappers = document.querySelectorAll('.modal-wrapper');
    modalWrappers.forEach(wrapper => {
        wrapper.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Initialize blog click events
document.addEventListener('DOMContentLoaded', function() {
    // Get all blog items
    const blogItems = document.querySelectorAll('.blog_section_main > div');
    
    blogItems.forEach((item, index) => {
        // Make the entire blog item clickable
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            // Blog IDs start from 1
            openBlogModal(index + 1);
        });
    });

    // Close modal when clicking close button
    const closeButtons = document.querySelectorAll('.circle_close, .warning');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closeBlogModal();
        });
    });

    // Close modal when clicking outside
    const modalWrappers = document.querySelectorAll('.modal-wrapper');
    modalWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            if (e.target === wrapper) {
                closeBlogModal();
            }
        });
    });

    // Handle prev/next navigation
    const prevButtons = document.querySelectorAll('.next_prev_arrow:first-child');
    const nextButtons = document.querySelectorAll('.next_prev_arrow:last-child');

    prevButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find current blog and show previous
            const currentTitle = this.closest('.content3').querySelector('.logo_design').textContent;
            const currentBlog = blogData.find(b => b.title === currentTitle);
            if (currentBlog && currentBlog.id > 1) {
                openBlogModal(currentBlog.id - 1);
            }
        });
    });

    nextButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find current blog and show next
            const currentTitle = this.closest('.content3').querySelector('.logo_design').textContent;
            const currentBlog = blogData.find(b => b.title === currentTitle);
            if (currentBlog && currentBlog.id < blogData.length) {
                openBlogModal(currentBlog.id + 1);
            }
        });
    });
});

// Optional: Function to add a new blog dynamically
function addNewBlog(newBlog) {
    blogData.push({
        id: blogData.length + 1,
        ...newBlog
    });
}