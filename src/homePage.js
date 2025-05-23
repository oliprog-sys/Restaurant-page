

const homePage = function (){
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main-div';

    const brandName = document.createElement('h1');
    const welcomeMsg = document.createElement('h2');
    const moto = document.createElement('h3');
    const aboutUs = document.createElement('h5');
    const invitation = document.createElement('h4');

    brandName.textContent = "NOLA BURGER HOUSE";
    welcomeMsg.textContent = "Welcome To Our Burger house Page.";
    moto.textContent = "Serving you is our pleasure!";
    aboutUs.textContent = "Nola Burger House is known for its best meals accompanied by an excellent customer service. Most tried our service and become long lasting customer.";
    invitation.textContent = "Come and try it then make your own judgement.";
      
    const cop = document.createElement('div');
    cop.id = "copyR";
    cop.innerHTML = "&copy; 2025 Your Company. All rights reserved. Oliyad Diriba"; 

    mainDiv.append(brandName, welcomeMsg, moto, aboutUs, invitation, cop);   
    return mainDiv;
}

export const home = homePage();