import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import NewItemForm from "./NewItemForm"


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getFood() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks)
      setIsLoading(false);
    }
    getFood();
  }, []);

  const addItem = (type, description, id, name, recipe, serve) => {
    if (type === "snack") {
      setSnacks(items => [...items, { type, description, id, name, recipe, serve }]);
    } else {
      setDrinks(items => [...items, { type, description, id, name, recipe, serve }]);
    }
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar items={{snacks, drinks}}/>
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />} />
            <Route path="/snacks" element={<Menu snacks={snacks} title="Snacks" />} />
            <Route path="/snacks/:id" element={<Item items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu drinks={drinks} title="Drinks" />} />
            <Route path="/drinks/:id" element={<Item items={drinks} cantFind="/drinks" />} />
            <Route path="/new" element={<NewItemForm addItem={addItem} />} />
            <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}


export default App;
