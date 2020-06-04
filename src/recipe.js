import React from 'react';




const Recipe = ({title,calorie,image,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Calorie Count: {calorie}</p>
            <img src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}
export default Recipe;