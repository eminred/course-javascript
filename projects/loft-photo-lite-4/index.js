import pages from './pages';
import mainPage from './mainPage';
import profilePage from './profilePage';
import loginPage from './loginPage';
import('./styles.css');

/*const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  const pageName = model.getRandomElement(pageNames);
  pages.openPage(pageName);
});*/

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();
