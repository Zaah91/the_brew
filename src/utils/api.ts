import { Data } from './interfaces';
  
// 'http://127.0.0.1:8000/api/products' // API

const unwrap = <T>(j: any): T[] => (Array.isArray(j) ? j : j.data ?? []); // This function is used to unwrap the data from the API response

export async function getCoffee(): Promise<Data[]> { // interface imported from interfaces.ts in line 1
    const res = await fetch(`http://127.0.0.1:8000/api/products`, { //localhost products // ?include=category,image
      cache: 'force-cache', // Store the response in cache for 1 day
    });
    const data = await res.json();
    //console.log('API response in getCoffee:', JSON.stringify(data, null, 2)); // beskrivende note mangler
    return unwrap<Data>(data); // Unwrap the data from the API response
  }