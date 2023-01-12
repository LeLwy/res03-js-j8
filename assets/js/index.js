import { Ingredient } from './classes/ingredient.js'

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
        
        let listElt = document.createElement("li");
        listElt.appendChild(listEltArticle);
        
        let list = document.querySelector("#stage > ul");
        list.appendChild(listElt);
    }
    
    for(let i=0; i<availableIngredients.length; i++){
        
        availableIngredients[i].addEventListener("click", function(){
            
            availableIngredients[i].classList.toggle("selected");
        });
    }
});

/*<li>
    <article>
        <header>
            <figure>
                <img src="assets/img/bacon.png" alt="Bacon" />
            </figure>
            <h3>Bacon</h3>
        </header>
    </article>
</li>*/