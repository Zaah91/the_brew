import { Data } from './interfaces';


  
// 'http://127.0.0.1:8000/api/products' // API
/*
  export async function getDrinks(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`, {
      cache: 'force-cache', // Store the response in cache for 1 day
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }

  export async function getDrinkByIngredient(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter}`, {
      cache: 'force-cache', // Store the response in cache for 1 day
      // cache: 'no-store', // Ensure fresh data on each request
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }*/


export async function getCoffee(): Promise<Data[]> { // interface imported from interfaces.ts in line 1
    const res = await fetch(`http://127.0.0.1:8000/api/products`, { //localhost products
      cache: 'force-cache', // Store the response in cache for 1 day
    });
    const data = await res.json();
    // console.log('API response in getCoffee:', data); // Log the response for debugging
    // console.log('API response in getCoffee:', data.products); // Log the response for debugging
    console.log('API response in getCoffee:', JSON.stringify(data, null, 2)); // beskrivende note mangler
    return data.products || [];
  }
/*
  export async function getCoffee(): Promise<Data[]> {
    const res = await fetch(`http://127.0.0.1:8000/api/products`, {
      cache: 'force-cache', // Store the response in cache for 1 day
    });
    const data = await res.json();
    console.log('API response in getCoffee:', JSON.stringify(data, null, 2)); // Debug the API response

    // Directly return the data if the API response is an array
    return Array.isArray(data) ? data : [data];
}*/


// TODO: Update E/R diagram
// TODO: Update API to macth E/R diagram

// Prompt for chat: This comes from a different table, so it is a foreign key, how do i do this with api?
// Use option 2