export interface ProductsProps {
  _id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: CategoriesProps;
}
export interface NewProductProps {
  name: string;
  image: string;
  price: string;
  categoryId: string;
}

export interface CategoriesProps {
  _id: string;
  name: string;
}

export interface EditNewProductsInt {
  _id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  categoryId: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DelModalProps {
  modal: ModalProps;
  id: string;
}

/* Quoter interfaces */
export interface bagInfoSetState {
  bagWidth: number;
  bagLength: number;
  bagQuantity: number;
  cord: boolean;
  workforcePercent: number;
}

export interface bagCostsSetState {
  clothCost: number;
  cordCost: number;
  threadCost: number;
  grifaCost: number;
  workforceCost: number;
}

export interface quoterBackEndInfo {
  cloth: [
    {
      type: string;
      rollWidth: number; //in centimeters
      price: number;
    }
  ];
  threadPrice: number;
  grifaPrice: number;
  cordPrice: number;
}
