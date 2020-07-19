// Module with Factory Function that creates menu

const { NamedChunksPlugin } = require("webpack");

let contentId;

const vertMenuFac = (names, class, whereTo) => {
  const parent = document.createElement('div')
  contentId = document.querySelector(whereTo);
  contentId.append(parent)
  parent.classList.add(class);

  for(let i = 0; i < names.length; i++) {
    // make menu tabs
    const links = document.createElement('a href')
    // append tabs to parent id 

  }
}