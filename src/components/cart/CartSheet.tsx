import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";

const CartSheet = () => {
  const { items, totalItems, totalAmount, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Add some delicious items from our menu!
              </p>
              <Button onClick={() => { setIsCartOpen(false); navigate("/menu"); }}>
                Browse Menu
              </Button>
            </motion.div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹{totalAmount}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
