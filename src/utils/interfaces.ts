// This file contains the interfaces for the entire project.
// It is used to define the structure of the data that is being used in the application.
// This helps to ensure that the data is consistent and can be easily manipulated.
// It also helps to make the code more readable and maintainable by providing clear definitions of the data types.
// This file is used in the api.ts file to define the structure of the data that is being fetched from the API.
// It is also used in the DrinkCard.tsx file to define the structure of the data that is being passed to the component.
// it allso makes the code reusable.
export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    }

export interface Category {
    id: number;
    name: string;
    }

export interface ProductImage {
    id: number;
    url: string;
    }

export interface Data {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    image: ProductImage;
    }