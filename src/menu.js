import vertMenuFac from './navMenu'

const menuPage = (() => {
  const contentId = document.querySelector('.content');
  contentId.textContent = "";
  vertMenuFac(["Home", "Menu", "Contact"], "menuBar", ".content");
  
  contentId.append(document.createTextNode('petar car'));

});

export default menuPage;