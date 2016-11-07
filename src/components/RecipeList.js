import React from 'react';
import ReactDOM from 'react-dom';
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
        // clear the text box
        ReactDOM.findDOMNode(this.refs.newRecipe).value = '';
    }

    addRecipe() {
        console.log('***Adding Recipe...');
        // store.dispatch(addRecipe("Test Recipe"));
        store.dispatch(addRecipe(ReactDOM.findDOMNode(this.refs.newRecipe).value));
    }

    render() {
        console.log('***Running RecipeList render...');
        console.log(this.state);
        var recipeItems = this.state.data.map(function(recipe, index) {
            return (<li>{recipe.name}</li>);
        });
        return(<div>
                  <ul>{recipeItems}</ul>
                  <input type="text" ref="newRecipe" placeholder="Recipe Name...." />
                  <button onClick={this.addRecipe.bind(this)}>Add</button>
                </div>);
    }
}