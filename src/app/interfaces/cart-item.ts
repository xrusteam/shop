export interface ICartItem {
  id: number;
  price: number;
  title: string;
  image: string;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
}
