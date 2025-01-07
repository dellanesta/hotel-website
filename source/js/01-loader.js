

// if (header) {
//     let headerPhoneIcon = header.querySelector('.nav-item .phone-icon');

//     // Select nav of website
//     let nav = header.querySelector('.main-nav');
//     let menuToggle = nav.querySelector('.menu-toggle');
//     let firstMenuToggleVoice = nav.querySelector('.voices-wrapper span:nth-child(1)');
//     let secondMenuToggleVoice = nav.querySelector('.voices-wrapper span:nth-child(2)');
//     let burger = menuToggle.querySelector('.burger');
//     let socialsWrapper = nav.querySelector('.socials-wrapper');
//     let socialsWrapperItems = socialsWrapper.querySelectorAll('.social-icon');
//     let mainMenu = nav.querySelector('.main-menu');
//     let MainMenuHeader = mainMenu.querySelector('.main-menu_header');
//     let MainMenuBody = mainMenu.querySelector('.main-menu_body');
//     let MainMenuFooter = mainMenu.querySelector('.main-menu_footer');
//     let closeMainMenu = MainMenuHeader.querySelector('.burger.close');
//     let logoMainMenu = MainMenuHeader.querySelector('.logo-main-menu');
// }

// // Function to set up initial styles for smooth animations
// function setupPreloaderStyles() {

//     gsap.set(headerPhoneIcon, { scale:0});

// }   
// setupPreloaderStyles();

// // Create a paused GSAP timeline
// const tlLoader = gsap.timeline({ paused: true });
// // Define animations
// tlLoader
//     .to(headerPhoneIcon, {
//         scale:1,
//     }) 

// window.addEventListener('load', () => {
//     tlLoader.play(); 
// });