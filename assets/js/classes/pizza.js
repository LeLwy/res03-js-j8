class Pizza{
    
    #ingredients;
    
    constructor(){
        
        this.#ingredients = [];
    }
    
    get ingredients (){
        return this.#ingredients;
    }
    
    addIngredient(ingredient){
        
        this.#ingredients.push(ingredient);
    }
    
    removeIngredient(ingredient){
        
        let newIngredientsArray = [];
        
        for(let i=0; i<this.#ingredients.length; i++){
            
            if(this.#ingredients[i] !== ingredient){
                
                newIngredientsArray.push(this.#ingredients[i]);
            }
        }
        
        this.#ingredients = newIngredientsArray;
    }
    
    displayIngredients(){
        
        /*let ingListFiled = querySelectorAll("body > main > aside > ul > li");
        let newIngListFiled = [];*/
        
        let ingList = document.querySelector("body > main > aside > ul");
        let orderBtn = document.querySelector("body > main > aside > ul > li:last-of-type");
        
        ingList.innerHTML = "";
        ingList.appendChild(orderBtn);
        
        for(let i=0; i<this.#ingredients.length; i++){
            
            let ingImg = document.createElement("img");
            ingImg.setAttribute("src", this.#ingredients[i].file);
            ingImg.setAttribute("alt", this.#ingredients[i].name);
            
            let ingFigure = document.createElement("figure");
            ingFigure.appendChild(ingImg);
            
            let ingTitle = document.createElement("h3");
            let ingTitleText = document.createTextNode(this.#ingredients[i].name);
            ingTitle.appendChild(ingTitleText);
            
            let ingHeader = document.createElement("header");
            ingHeader.appendChild(ingFigure);
            ingHeader.appendChild(ingTitle);
            
            let ingArticle = document.createElement("article");
            ingArticle.appendChild(ingHeader);
            
            let ingListLi = document.createElement("li");
            ingListLi.appendChild(ingArticle);
            
            ingList.insertBefore(ingListLi, orderBtn);
            
        }
    }
    
    cook(){
        
        let orderBtn = document.querySelector("body > main > aside > ul > li:last-of-type");
        
        let that = this;
    
        orderBtn.addEventListener("click", function(){
            
            let ingList = document.querySelector("body > main > aside > ul");
            
            ingList.innerHTML = "";
            ingList.appendChild(orderBtn);
            
            let ingredientsList = document.querySelectorAll("#stage > ul > li > article");
            
            for(let i=0; i<ingredientsList.length; i++){
                
                if(ingredientsList[i].classList.contains("selected")){
                    
                    ingredientsList[i].classList.remove("selected");
                }
            }
            
            setTimeout(function(){
                
                that.cooked();
                
            },that.#ingredients.length * 1000);
        });
    }
    
    cooked(){
        
        let pizzaStatus = document.querySelector("body > main > aside > section");
        pizzaStatus.classList.remove("sr-only");
        
        setTimeout(function(){
                
            pizzaStatus.classList.add("sr-only");
            
        }, 5000);
    }
}

export { Pizza }