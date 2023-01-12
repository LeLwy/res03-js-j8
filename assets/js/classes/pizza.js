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
    
    display(){
        
    }
}

export { Pizza }