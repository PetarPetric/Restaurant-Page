const homePageRender = (()=> {
  const contentId = document.querySelector('.content');
  const navBar = document.querySelector('.menuDiv');
  contentId.textContent = "";

  const headerElement = document.createElement('div');
  headerElement.classList.add('headerClass');
  contentId.append(headerElement);
  
  const footerElement = document.createElement('div');
  const leftFooter = document.createElement('div');
  const middleFooter = document.createElement('div');
  const rightFooter = document.createElement('div');
  leftFooter.classList.add('leftFooter')
  middleFooter.classList.add('middleFooter')
  rightFooter.classList.add('rightFooter')
  footerElement.classList.add('footerClass');


  contentId.append(footerElement);
  const aboutUsTxt = document.createTextNode('The Baratie Sea Restaurant is a chef-led fish restaurant and seafood bar. We’re a little different to your typical fishmonger. Our team is made up of highly experienced seafood chefs from some of the best restaurants in Africa and beyond.');

  const coronaTxt = document.createTextNode('To ensure maximum control of hygiene procedures and to comply with social distancing we have reduced our covers and introduced additional safety measures for staff and guests. In addition to our a la carte menu we have a new 6 course tasting menu priced at 30$ per person. Our menus are be subject to daily changes.')

  const historyTxt = document.createTextNode('World-famous, known for its iconic location, fabulous food and character. Inspired by natural resources, a strong twist of Maldives, and mountains of Italian love. The south-east coastline of Maldives is recognized as amongst the most beautiful in the world, and provides the stage for an extraordinary experience.')


  
  footerElement.append(leftFooter);
  footerElement.append(middleFooter);
  footerElement.append(rightFooter);

  leftFooter.append(aboutUsTxt);
  middleFooter.append(coronaTxt);
  rightFooter.append(historyTxt);

  leftFooter.classList.add('left-Footer');
  middleFooter.classList.add('middle-Footer');
  rightFooter.classList.add('right-Footer');



});


export default homePageRender;