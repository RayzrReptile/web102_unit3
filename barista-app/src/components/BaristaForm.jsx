import React, {Component, useState} from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json";

const BaristaForm = () => {

    // Initialize first drink
    let oldIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    let drink = drinksJson.drinks[oldIndex].name;
    let recipe = drinksJson.drinks[oldIndex].ingredients;

    // Variables
    const [currentDrink, setCurrentDrink] = useState(drink);
    const [trueRecipe, setTrueRecipe] = useState(recipe);

    const [catToggle, setCatToggle] = useState('hidden')

    const [correct_temp, setCheckedTemp] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold', 'cat'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'cat', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'cat', 'none'],
        'blended': ['yes', 'turbo', 'cat', 'no']
    };

    // Functions
    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemp('wrong');
        }
        else {
            setCheckedTemp("correct");
        }
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
        if (trueRecipe.syrup != inputs['syrup']){
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }
        if (trueRecipe.blended != inputs['blended']){
            setCheckedBlended('wrong');
        }
        else {
            setCheckedBlended("correct");
        }

        // Cat Condition
        if (inputs['temperature'] == 'cat' &&
            inputs['milk'] == 'cat' &&
            inputs['syrup'] == 'cat' &&
            inputs['blended'] == 'cat') {
                setCatToggle('')
                setCheckedTemp('cat');
                setCheckedSyrup('cat');
                setCheckedMilk('cat');
                setCheckedBlended('cat');
            }
    };

    const getNextDrink = () => {
        let newIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        while (newIndex == oldIndex) {
            newIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        }
        setCurrentDrink(drinksJson.drinks[newIndex].name);
        setTrueRecipe(drinksJson.drinks[newIndex].ingredients);
        oldIndex = newIndex;
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
        setCheckedTemp('')
        setCheckedMilk('')
        setCheckedSyrup('')
        setCheckedBlended('')
        setCatToggle('hidden')
            
        getNextDrink();
    };

    // Main Return Block
    return (
        <div>
            <div className="cat-container" id={catToggle}>
                <h3>MEOW</h3>
                <img src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt="Cat!" className='cat-image'/>
            </div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button className="button newdrink" type="new-drink-button" onClick={onNewDrink}>🔄</button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}>
                        {inputs["syrup"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {inputs["milk"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {inputs["blended"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
        </div>
    );
  
};

export default BaristaForm;