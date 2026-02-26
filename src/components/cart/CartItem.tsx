import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/menu";
import { useCart } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex gap-3 p-3 bg-secondary rounded-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-md object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground text-sm truncate">{item.name}</h4>
        <p className="text-accent font-semibold text-sm">{item.price}</p>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.name, item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.name, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 ml-auto text-destructive hover:text-destructive"
            onClick={() => removeItem(item.name)}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
