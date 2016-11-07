import React from 'react';
import { addRecipe } from '../actions/RecipeActions.js'
import store from '../store/Store';

export default class RecipeList extends React.Component {

    constructor(props) {
        console.log('***Running RecipeList constructor...');
        console.log(props);
        super(props);
        this.state = {
            data: this.props.store.getState().recipes
        }
        // set up subscription to redux store to get updates
        this.storeUpdated = this.storeUpdated.bind(this);
        this.props.store.subscribe(this.storeUpdated);
    }

    // adjust state to reflect updapted store
    storeUpdated() {
        this.setState({
            data: this.props.store.getState().recipes
        });
    }

    addRecipe() {
        console.log('***Adding Recipe...');
        store.dispatch(addRecipe("Test Recipe"));
    }

    render() {
        console.log('***Running RecipeList render...');
        console.log(this.state);
        var recipeItems = this.state.data.map(function(recipe, index) {
            return (<li>{recipe.name}</li>);
        });
        return(<div>
                  <ul>{recipeItems}</ul>
                  <button onClick={this.addRecipe.bind(this)}>Add</button>
                </div>);
    }
}