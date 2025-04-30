// This file contains the interfaces for the entire project.
// It is used to define the structure of the data that is being used in the application.
// This helps to ensure that the data is consistent and can be easily manipulated.
// It also helps to make the code more readable and maintainable by providing clear definitions of the data types.
// This file is used in the api.ts file to define the structure of the data that is being fetched from the API.
// It is also used in the DrinkCard.tsx file to define the structure of the data that is being passed to the component.
// it allso makes the code reusable.

export interface Category {
    catId: string;
    catName: string;
  }

export interface ProductImage {
    imgId: string;
    imgUrl: string;
  }

export interface Data {
    productId: string;
    productName: string;
    productDesc: string;
    productImage: ProductImage;
    productCategory: Category;
    productPrice: number;
  } 
/*
export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    }

export interface Category {
    id: number; // Matches API field
    name: string; // Matches API field
    }

export interface ProductImage {
    id: number; // Matches API field
    url: string; // Matches API field
    }

export interface Data {
    id: string; // Matches API field
    name: string; // Matches API field
    description: string; // Matches API field
    price: number; // Matches API field (as a string in the API response)
    category: Category; // Matches API field
    image: ProductImage; // Matches API field
    }*/