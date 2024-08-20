import React from  'react';
import styles from './Description.module.css';


function RecipeAuthor() {
    let authorLink = "https://www.budgetbytes.com/pork-gyoza/";
    let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-268x268.jpg";
    let authorName = "Beth";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Beth - Budget Bytes" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Budget Bytes</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Pork Gyoza</h1>
                    <p>Crispy fried pork dumplings</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;
