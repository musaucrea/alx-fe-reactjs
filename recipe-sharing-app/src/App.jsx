import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  return (
   
      <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
        <Switch>
          <Route path="/recipe/:recipeId" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
