// // Select header of website
let header = document.querySelector('header');

if (header) {
    let isMobile = window.innerWidth < 1270;
    // Select nav of website
    let nav = header.querySelector('.main-nav');
    let menuToggle = nav.querySelector('.menu-toggle');
    let firstMenuToggleVoice = nav.querySelector('.voices-wrapper span:nth-child(1)');
    let secondMenuToggleVoice = nav.querySelector('.voices-wrapper span:nth-child(2)');
    let burger = menuToggle.querySelector('.burger');
    let socialsWrapper = nav.querySelector('.socials-wrapper');
    let socialsWrapperItems = socialsWrapper.querySelectorAll('.social-icon');
    let mainMenu = nav.querySelector('.main-menu');
    let MainMenuHeader = mainMenu.querySelector('.main-menu_header');
    let MainMenuBody = mainMenu.querySelector('.main-menu_body');
    let MainMenuFooter = mainMenu.querySelector('.main-menu_footer');
    let closeMainMenu = MainMenuHeader.querySelector('.burger.close');
    let logoMainMenu = MainMenuHeader.querySelector('.logo-main-menu');

    // Function to set up initial styles for smooth animations
    function setupInitialStyles() {

        let MainMenuHeaderHeight = MainMenuHeader.offsetHeight;
        let MainMenuFooterHeight = MainMenuFooter.offsetHeight;
        let MainMenuBodyHeight = `calc(100% - ${MainMenuHeaderHeight}px - ${MainMenuFooterHeight}px)`;
        MainMenuBody.style.height = MainMenuBodyHeight;

        gsap.set(mainMenu, { autoAlpha:0});
        gsap.set(burger, {
            scale:1,
            duration:1,
            zIndex:100,
        });
        gsap.set(socialsWrapperItems, {
            x:0,
            autoAlpha:1,
            duration:.5,
            stagger:.18,
        });
        gsap.set(logoMainMenu, {
            y:-16,
            duration:.5,
        });
        gsap.set(closeMainMenu, {
            scale:0,
            duration:1,
            zIndex:-1,
        });
    }   
    setupInitialStyles();
    // Create a paused GSAP timeline
    const tlHeader = gsap.timeline({ paused: true });
    // Define animations
    tlHeader
        .to(burger, {
            scale:0,
            autoAlpha:0,
            zIndex:-1,
        }) 
        .to(socialsWrapperItems, {
            x: -24,
            autoAlpha:0,
        },"-0.02") 
        .to(mainMenu, {
            autoAlpha:1,
        },"-0.01") 
        .to(logoMainMenu, {
            y:0,
        },"-0.01") 
        .to(closeMainMenu, {
            scale:1,
            zIndex:100,
        },"-0.01") 
    
    // When click on menuToggle
    menuToggle.addEventListener("click", (e) => {
        // If nav has not class open-menu
        if (!nav.classList.contains('open-menu')) {
            // Start or resume the timeline
            tlHeader.play(); 
            // Add to nac the class open-menu
            nav.classList.add('open-menu');
            // Lock scroll
            document.querySelector('body').classList.add('lock');
        }
    });
    // When click on menuToggle
    closeMainMenu.addEventListener("click", (e) => {
        // If nav has not class open-menu
        if (nav.classList.contains('open-menu')) {
            // Reverse the timeline
            tlHeader.reverse(); 
            // Remove to nac the class open-menu
            nav.classList.remove('open-menu');
            // Unlock scroll
            document.querySelector('body').classList.remove('lock');
        }
    });
}