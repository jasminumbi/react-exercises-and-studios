import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.budgetbytes.com/pork-gyoza/";
   let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-268x268.jpg";
   let authorName = "Beth";

   return (
      <div>
         <img src={authorPhoto} alt = "Beth from Budget Bytes" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Beth's Blog</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["ground pork", "cabbage", "wonton wrappers", "garlic", "ginger"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Pork Gyoza</h1>
            <p>Perfect crispy fried pork dumplings</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.budgetbytes.com/wp-content/uploads/2016/02/Pork-Gyoza-above.jpg" alt="Pork gyoza" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
