import {react} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import RecipeList from './components/RecipeList';
import { Provider } from 'react-redux';
import store from './store/Store';
import { fetchRecipes } from './actions/RecipeActions'

store.dispatch(fetchRecipes(null));

ReactDOM.render(
                <Provider store={store}>
                    <RecipeList store={store} />
                </Provider>, 
                document.getElementById('content'));