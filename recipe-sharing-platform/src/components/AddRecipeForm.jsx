// src/components/AddRecipeForm.jsx

import  { useState } from 'react';

const AddRecipeForm = () => {
  // State for form inputs
  const [formValues, setFormValues] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validation function
  const validate = () => {
    let formErrors = {};

    if (!formValues.title.trim()) {
      formErrors.title = 'Title is required';
    }

    if (!formValues.ingredients.trim()) {
      formErrors.ingredients = 'Ingredients are required';
    }

    if (!formValues.steps.trim()) {
      formErrors.steps = 'Preparation steps are required';
    }

    setErrors(formErrors);

    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (validate()) {
      // If valid, submit the form (e.g., send data to an API)
      console.log('Form submitted successfully:', formValues);
      // Clear the form after submission
      setFormValues({
        title: '',
        ingredients: '',
        steps: '',
      });
      setErrors({});
    } else {
      // If invalid, log errors or handle as needed
      console.log('Validation errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formValues.ingredients}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
          rows="4"
        />
        {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Input */}
      <div className="mb-4">
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          name="steps"
          value={formValues.steps}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
          rows="4"
        />
        {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
