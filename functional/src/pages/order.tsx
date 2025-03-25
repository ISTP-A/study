import { Cart, CartBottomCTA, CartFooter, CartHeader, CartItem, CartList } from "../components/cart"
import { Product as ProductContainer, ProductItem, ProductList } from "../components/product"
import { products } from "../data/products"
import { useCart } from "../hooks/use-cart"
import { type Product } from "../types"

const PageOrder = () => {
  const cart = useCart<Product>({})

  const cartList = cart.getItemList()
  const totalPrice = cart.getTotalPrice('price')
  const { tax } = cart.getTaxInfo(totalPrice, 10)
  return (
    <div className="w-full h-screen flex">
      <ProductContainer>
        <header className="h-header flex items-center p-4 bg-background shadow">
          <h1 className="text-xl text-foreground font-bold">대충만든 오더</h1>
        </header>
        <ProductList>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => cart.addItem(product)}
            />
          ))}
        </ProductList>
        <footer className="h-footer flex items-center p-4">
          문의하기
        </footer>
      </ProductContainer>
      <Cart>
        <CartHeader>

        </CartHeader>
        <CartList>
          {cartList.map(({ key, item }) => (
            <CartItem
              key={key}
              id={key}
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              onDelete={() => cart.removeItem(item)}
            />
          ))}
        </CartList>
        <CartFooter>
          <CartBottomCTA
            className="text-primary-foreground bg-primary"
            type='submit'
          >
            <p className="text-lg font-bold">{totalPrice}원 결제하기</p>
            <small>(VAT {tax}원 포함)</small>
          </CartBottomCTA>
        </CartFooter>
      </Cart>
    </div >
  )
}

export { PageOrder }
