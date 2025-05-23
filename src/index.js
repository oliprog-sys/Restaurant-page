import "./styles.css";
import { home } from './homePage.js';
import { menu } from './menu.js';
import { contact } from './about.js';

const mainContainer = document.getElementById('content');
const homeTab = home;
const menuTab = menu;
const aboutTab = contact;


mainContainer.append(home);

document.getElementById("home").addEventListener('click', () => {
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    
    mainContainer.append(homeTab); 
});

document.getElementById("menu").addEventListener('click', () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    
    mainContainer.append(menuTab);
});

document.getElementById("about").addEventListener('click', () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    
    mainContainer.append(aboutTab);
}); 