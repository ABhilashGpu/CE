export interface MenuItem {
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  category: 'hot' | 'cold' | 'snacks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderDetails {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderType: 'pickup' | 'dine-in';
  items: CartItem[];
  totalAmount: number;
  specialInstructions?: string;
  status: string;
  createdAt: string;
}
