import { Ingredient } from './classes/ingredient.js';
import { Pizza } from './classes/pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let availableIngredients = []
            
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carrot = new Ingredient("Carotte", "assets/img/carrots.png")
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let potato = new Ingredient("Bacon", "assets/img/bacon.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");
    
    availableIngredients.push(bacon);
    availableIngredients.push(carrot);
    availableIngredients.push(cheese);
    availableIngredients.push(egg);
    availableIngredients.push(eggplant);
    availableIngredients.push(goatCheese);
    availableIngredients.push(honey);
    availableIngredients.push(mushroom);
    availableIngredients.push(olive);
    availableIngredients.push(pepper);
    availableIngredients.push(potato);
    availableIngredients.push(tomato);
    
    for(let i=0; i<availableIngredients.length; i++){
        
        let listEltFigure = document.createElement("figure");
        let listEltImg = document.createElement("img");
        listEltImg.setAttribute("src", availableIngredients[i].file);
        listEltImg.setAttribute("alt", availableIngredients[i].name);
        listEltFigure.appendChild(listEltImg);
        
        let listEltTitle = document.createElement("h3");
        let listEltName = document.createTextNode(availableIngredients[i].name);
        listEltTitle.appendChild(listEltName);
        
        let listEltArticleHeader = document.createElement("header");
        listEltArticleHeader.appendChild(listEltFigure);
        listEltArticleHeader.appendChild(listEltTitle);
        
        let listEltArticle = document.createElement("article");
        listEltArticle.appendChild(listEltArticleHeader);
        listEltArticle.setAttribute("ingredient", availableIngredients[i].name);
        listEltArticle.setAttribute("image", availableIngredients[i].file);
        
        let listElt = document.createElement("li");
        listElt.appendChild(listEltArticle);
        
        let list = document.querySelector("#stage > ul");
        list.appendChild(listElt);
    }
    
    let ingredientsList = document.querySelectorAll("#stage > ul > li > article");
    
    let newPizza = null;
    
    for(let i=0; i<ingredientsList.length; i++){
        
        ingredientsList[i].addEventListener("click", function(){
            
            ingredientsList[i].classList.toggle("selected");
            
            if(newPizza === null){
                
                newPizza = new Pizza();
            }
                    
            if(ingredientsList[i].classList.contains("selected") && ingredientsList[i].getAttribute("ingredient") === availableIngredients[i].name){
                
                newPizza.addIngredient(availableIngredients[i]);
                newPizza.displayIngredients();
                
            }else{
                
                newPizza.removeIngredient(availableIngredients[i]);
                newPizza.displayIngredients();
            }
        });
    }
    
    newPizza.cook();
});
