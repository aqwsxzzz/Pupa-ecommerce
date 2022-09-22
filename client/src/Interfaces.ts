export interface ProductsProps {
  _id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: CategoriesProps;
}

export interface CategoriesProps {
  _id: string;
  name: string;
}
