const contactPage = (() => {
  const contentId = document.querySelector(".content");
  contentId.textContent = "";
  const contactPart = document.createElement('div');
  contactPart.classList.add('contact');
  contentId.append(contactPart);

  contactPart.append(document.createTextNode("Contact Information"));
  contactPart.append(document.createElement("br"));
  const anotherDiv = document.createElement("div");

  anotherDiv.classList.add("adress");

  contactPart.append(anotherDiv);

  const cityAd = document.createElement("div");
  cityAd.classList.add("city")

  contactPart.append(cityAd);

  const emailAd = document.createElement("div");
  emailAd.classList.add("emailAd")

  contactPart.append(emailAd);

  emailAd.append(document.createTextNode("baratie@rest.sa"));
  emailAd.append(document.createElement("div"));
  emailAd.append(document.createTextNode("(555)-442-385"));
  
  
  cityAd.append(document.createTextNode("Pretoria 25300"))
  
  anotherDiv.append(document.createTextNode("350 Futurama Street"));


});

export default contactPage;