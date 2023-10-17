export class Grocery {
    groceryId: number;
    groceryName: string;
    groceryType: string;
    groceryPrice: number;
    image: string;
    description: string;
    quantity: string;
    groceryCategory: {
      categoryId: number;
      categoryName: string;
      image: string;
    };
  }
  