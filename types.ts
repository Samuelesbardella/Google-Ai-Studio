export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string; // e.g., "al quintale", "al sacco"
  image: string;
  description: string;
  badges: string[]; // e.g., "Essiccata", "Bio"
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}