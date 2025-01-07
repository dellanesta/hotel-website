let isMobile = window.innerWidth < 1270;
// Componenti header
let header = document.querySelector('header');
if (header) {
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
    let pagesList = MainMenuBody.querySelector('.pages-list');
    let pagesListItems = pagesList.querySelectorAll('.pages-list_item');
    let pagesListItemTitles = mainMenu.querySelectorAll('.pages-list-item_title');
    let pagesListItemDividers = mainMenu.querySelectorAll('.pages-list-item_divider');
    let pagesListItemVoices = mainMenu.querySelectorAll('.pages li');
    let MainMenuFooter = mainMenu.querySelector('.main-menu_footer');
    let closeMainMenu = MainMenuHeader.querySelector('.burger.close');
    let logoMainMenu = MainMenuHeader.querySelector('.logo-main-menu');
}