// Module with Factory Function that creates menu

let contentId;

const vertMenuFac = ([...names], clasa , whereTo) => {
  const parent = document.createElement('div')
  contentId = document.querySelector(whereTo);
  contentId.append(parent)
  parent.classList.add(clasa);

  for(let i = 0; i < names.length; i++) {
    // make menu tabs
    const tabs = document.createElement('li');
    const tabsTxt = document.createTextNode(names[i])
    tabs.append(tabsTxt);
    parent.append(tabs);
  }
  return {names, clasa, whereTo}
}

export default vertMenuFac;