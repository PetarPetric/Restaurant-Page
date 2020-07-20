import homePageRender from './homePage'
import vertMenuFac from './navMenu';

vertMenuFac(["Home", "Menu", "Contact"], "menuBar", ".content");
homePageRender();