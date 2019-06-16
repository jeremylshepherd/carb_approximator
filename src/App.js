import React from "react";
import Card from "./components/Card";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      ounces: null,
      abv: null,
      calories: null,
      carbCount: 0,
      caloriesFromAlcohol: 0,
      beers: [],
      showHistory: false
    };

    this.convertOzToMils = this.convertOzToMils.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getAlcoholCalories = this.getAlcoholCalories.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
  }

  convertOzToMils() {
    return +this.state.ounces * 2957;
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  addToHistory({ name, ounces, abv, carbCount, calories }) {
    const now = new Date(Date.now()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const altName = `Unnamed: ${now}`;
    name = name.length > 0 ? name : altName;
    const beers = [...this.state.beers];
    const obj = {
      name,
      ounces,
      abv,
      carbCount,
      calories
    };
    beers.push(obj);
    let beerString = JSON.stringify(beers);
    localStorage.setItem("beers", beerString);
    this.setState({ beers: beers });
  }

  toggleHistory() {
    this.setState({
      showHistory: !this.state.showHistory
    });
  }

  clearForm() {
    this.setState({
      name: "",
      ounces: "",
      abv: "",
      calories: ""
    });
  }

  /*Formula for grams of alcohol from volume is (8 x volume(ml) * ABV%)/1000
    For example Miller Lite is 12oz 4.2%ABV:
      The oz are converted to ml which equals 355
      gets calulated as (8 * 355 * 4.2) / 1000 which equals 11.928
      There 7 calories per gram of alcohol, so 83.496 calories from alcohol
      Trying to keep math units as integers to minimize 
      float inaccuracy hence huge denominator on line 47
  */
  getAlcoholCalories(e) {
    e.preventDefault();
    const { name, ounces, calories } = this.state;
    const mils = this.convertOzToMils();
    const abv = +this.state.abv;
    const noDecimalABV = abv
      .toFixed(2)
      .split(".")
      .join("");
    const alcoholGrams = (8 * (mils * +noDecimalABV)) / 1000000;
    const alcoholCalories = ((alcoholGrams * 7) / 10).toFixed(2);
    const carbCount = ((+calories - alcoholCalories) / 4).toFixed(1);
    this.setState({ caloriesFromAlcohol: alcoholCalories });
    this.setState({ carbCount: carbCount });
    this.addToHistory({ abv, calories, carbCount, name, ounces });
    this.clearForm();
  }

  componentDidMount() {
    const beers = localStorage.getItem("beers");
    if (beers) {
      this.setState({
        beers: JSON.parse(beers)
      });
    }
  }

  render() {
    const {
      name,
      ounces,
      abv,
      calories,
      carbCount,
      caloriesFromAlcohol,
      beers,
      showHistory
    } = this.state;
    return (
      <div className="app">
        <div
          style={{ transform: showHistory ? "scale(1, 1)" : "scale(0,0)" }}
          className="history"
        >
          {beers.length > 0 ? beers.map(b => Card(b)) : <h1>No beers here!</h1>}
        </div>
        <i onClick={this.toggleHistory} className="fa fa-history" />
        <div className="container">
          <div className="centered-text">
            <h1>CarbApproximator</h1>
            <h2 className="sub-heading">for Craft Beer</h2>
          </div>
          <form>
            <input
              className="form-elements"
              name="name"
              type="text"
              placeholder="Beer name"
              value={name}
              onChange={this.handleInput}
              aria-label="Name input"
            />
            <input
              className="form-elements"
              name="ounces"
              type="number"
              placeholder="How many ounces"
              value={ounces}
              onChange={this.handleInput}
              aria-label="Ounces input"
              required
            />
            <input
              className="form-elements"
              name="abv"
              type="number"
              placeholder="ABV%"
              value={abv}
              onChange={this.handleInput}
              aria-label="ABV input"
              required
            />
            <input
              className="form-elements"
              name="calories"
              type="number"
              placeholder="Listed calories"
              value={calories}
              onChange={this.handleInput}
              aria-label="Calories input"
              required
            />
            <button
              className="form-elements button"
              onClick={this.getAlcoholCalories}
              aria-label="Calculate Carbs Button"
              disabled={!ounces || !abv || !calories ? true : false}
            >
              Get Estimate
            </button>
          </form>
          <div>
            <h2>{`Calories from Alcohol: ${caloriesFromAlcohol} kcal`}</h2>
            <h2>{`Estimated Carb Count: ${carbCount} g`}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
