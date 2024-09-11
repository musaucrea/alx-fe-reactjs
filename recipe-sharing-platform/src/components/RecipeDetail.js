import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on the ID
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {/* Example ingredients - adjust as needed */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          {/* Render actual ingredients from your data if available */}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>
          {/* Example instructions - adjust as needed */}
          Step 1: Do this.
          Step 2: Do that.
          {/* Render actual instructions from your data if available */}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
