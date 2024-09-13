import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe by ID from the mock data
    const recipeData = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <p className="text-lg mb-4">{recipe.summary}</p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-lg">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
