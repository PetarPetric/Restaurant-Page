// Module with Factory Function that creates menu
import menuPage from './menu';
import homePageRender from './homePage';
import contactPage from './contactPage';

let contentId;

const vertMenuFac = ([...names], clasa , whereTo) => {
  const parent = document.createElement('div');
  contentId = document.querySelector(whereTo);
  contentId.append(parent);
  parent.classList.add(clasa);

  for(let i = 0; i < names.length; i++) {
    // make menu tabs
    const tabs = document.createElement('li');
    const tabsTxt = document.createTextNode(names[i]);
    tabs.append(tabsTxt);
    parent.append(tabs);
    // If you want to style tabs differently, use template literals

    tabs.classList.add('menuTabs');
    tabs.addEventListener('click', function(e) {
      if(e.target.textContent == "Home") {
          homePageRender();
        } else if (e.target.textContent == "Menu") {
          menuPage();
        } else if (e.target.textContent == "Contact") {
          contactPage();
        }
      
      }
  )}
  return {names, clasa, whereTo}
}

export default vertMenuFac;