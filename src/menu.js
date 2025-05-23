import burger from './Image/burger.jpg';
import pizza from './Image/pizza.jpg';
import food1 from './Image/food1.jpg';
import chicken from './Image/chicken.jpg';
import shawarma from './Image/shawarma.jpg';
import maco from './Image/maco.jpg'
const menus = function (){
    const menuMainDiv = document.createElement('div');
    menuMainDiv.id = 'menuMainDiv';


    const menu1 = document.createElement('div');
    menu1.id = 'menu1';
    const menu2 = document.createElement('div');
    menu2.id = 'menu2';
    const menu3 = document.createElement('div');
    menu3.id = 'menu3';
    const menu4 = document.createElement('div');
    menu4.id = 'menu4';
    const menu5 = document.createElement('div');
    menu5.id = 'menu5';
    const menu6 = document.createElement('div');
    menu6.id = 'menu6';

    // menu 1
    const beefBurger = document.createElement('h1');
    beefBurger.textContent = "Beef Burger";
    const burIngredient = document.createElement('p');
    burIngredient.textContent = "Ingredient: beef, onions, cheese";
    const burPrice = document.createElement('p');
    burPrice.textContent = 'Price: $5';
    const burImage = document.createElement('img');
    burImage.src = burger;

    menu1.append(beefBurger, burImage, burPrice, burIngredient);

    // menu 2
    const chickenPizza = document.createElement('h1');
    chickenPizza.textContent = "Chicken Pizza";
    const pizIngredient = document.createElement('p');
    pizIngredient.textContent = "Ingredient: chicken, onions, cheese";
    const pizPrice = document.createElement('p');
    pizPrice.textContent = 'Price: $5';
    const pizImage = document.createElement('img');
    pizImage.src = pizza;

    menu2.append(chickenPizza, pizImage, pizPrice, pizIngredient);


    // menu 3
    const chickenFood = document.createElement('h1');
    chickenFood.textContent = "Chicken leg";
    const chIngredient = document.createElement('p');
    chIngredient.textContent = "Ingredient: chicken, chips, souce";
    const chPrice = document.createElement('p');
    chPrice.textContent = 'Price: $8';
    const chImage = document.createElement('img');
    chImage.src = chicken;

    menu3.append(chickenFood, chImage, chPrice, chIngredient);


    // menu 4
    const rice = document.createElement('h1');
    rice.textContent = "Rice";
    const riceIngredient = document.createElement('p');
    riceIngredient.textContent = "Ingredient: rice, pasta, beans, spices";
    const ricePrice = document.createElement('p');
    ricePrice.textContent = 'Price: $6';
    const riceImage = document.createElement('img');
    riceImage.src = food1;

    menu4.append(rice, riceImage, ricePrice, riceIngredient);


    // menu 5
    const shawwarmaFood = document.createElement('h1');
    shawwarmaFood.textContent = "Shawarma";
    const shaIngredient = document.createElement('p');
    shaIngredient.textContent = "Ingredient: rice, pasta, beans, spices";
    const shaPrice = document.createElement('p');
    shaPrice.textContent = 'Price: $8';
    const shaImage = document.createElement('img');
    shaImage.src = shawarma;

    menu5.append(shawwarmaFood, shaImage, shaPrice, shaIngredient);

    // menu 6
    const macFood = document.createElement('h1');
    macFood.textContent = "Macoroni";
    const macIngredient = document.createElement('p');
    macIngredient.textContent = "macoroni, nola souce, spices, cheese";
    const macPrice = document.createElement('p');
    macPrice.textContent = "Price: $5";
    const macImage = document.createElement('img');
    macImage.src = maco;

    menu6.append(macFood, macImage, macPrice, macIngredient);

    menuMainDiv.append(menu1, menu2, menu3, menu4, menu5, menu6);
    return menuMainDiv;
}

export const menu = menus();