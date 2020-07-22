const menuPage = (() => {
  const contentId = document.querySelector(".content");
  contentId.textContent = "";
  
  const menuHeader = document.createElement("div");
  const menuTitle = document.createElement("h1");
  const actualMenu = document.createElement('div');

  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  const menuItem3 = document.createElement('div');
  const menuItem4 = document.createElement('div');
  const menuItem5 = document.createElement('div');
  const menuItem6 = document.createElement('div');

  menuItem1.classList.add("item1");
  menuItem2.classList.add("item2");
  menuItem3.classList.add("item3");
  menuItem4.classList.add("item4");
  menuItem5.classList.add("item5");
  menuItem6.classList.add("item6");
  
  contentId.append(menuHeader);
  menuHeader.append(menuTitle);
  menuTitle.append(document.createTextNode("Menu"));
  contentId.append(actualMenu);

  actualMenu.append(menuItem1);
  actualMenu.append(menuItem2);
  actualMenu.append(menuItem3);
  actualMenu.append(menuItem4);
  actualMenu.append(menuItem5);
  actualMenu.append(menuItem6);

  const item1 = document.createTextNode("SEA FISH SOUP: 5$")
  const item2 = document.createTextNode("FRIED SQUIDS WITH TARTAR SAUCE: 15$")
  const item3 = document.createTextNode("TAGLIATELLE WITH PRAWNS: 20$")
  const item4 = document.createTextNode("GRILLED OR FRIED CUTLETS 300GR: 23$")
  const item5 = document.createTextNode("SMOKED CARP: 14$")
  const item6 = document.createTextNode("GRILLED SEABASS FILLETS: 30$")

  menuItem1.append(item1);
  menuItem2.append(item2);
  menuItem3.append(item3);
  menuItem4.append(item4);
  menuItem5.append(item5);
  menuItem6.append(item6);


  
  actualMenu.classList.add("menuList");
  menuHeader.classList.add("menuHeader");



});

export default menuPage;