import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/path-to-your-json/data.json')
      .then(response => response.json())
      .then(data => setRecipe(data.find(r => r.id === parseInt(id))));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">{recipe.summary}</p>
      {/* Add more detailed sections for ingredients and steps */}
    </div>
  );
};

export default RecipeDetail;
