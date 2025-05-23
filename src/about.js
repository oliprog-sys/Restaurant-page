
const contacts = function(){
    const contactsMain = document.createElement('div');
    contactsMain.id = 'contactsMain';

    const daysCont = document.createElement('div');
    daysCont.id = 'days-container';
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const weOpen = document.createElement('p');
    weOpen.textContent = "We are open";

    daysCont.appendChild(weOpen);
    for(let i = 0; i < days.length; i++){
        const d = document.createElement('li');
        d.className = 'day';
        d.textContent = days[i] + ": 8:00AM - 9:00PM";
        daysCont.appendChild(d);
    }

    const email = document.createElement('h3');
    email.textContent = "Email: oliyaddiriba75@gmail.com";

    const phone = document.createElement('h3');
    phone.textContent = "Phone: (+251) 9 10 064 791";

    const location = document.createElement('h3');
    location.textContent = "Addis Ababa, Ethiopia";

    const cop = document.createElement('div');
    cop.id = "copR";
    cop.innerHTML = "&copy; 2025 Your Company. All rights reserved. Oliyad Diriba";  

    contactsMain.append(daysCont, phone, email, location, cop);
    return contactsMain;
}

export const contact = contacts();