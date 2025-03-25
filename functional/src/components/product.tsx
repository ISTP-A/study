import { PropsWithChildren } from "react"
import { type Product } from "../types"

const Product = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-1 flex-col h-full ">
      {children}
    </div>
  )
}

const ProductList = ({ children }: PropsWithChildren) => {
  return <div className="flex-1 overflow-y-auto grid grid-cols-3 p-8 gap-4 bg-gray-100 shadow-inner">{children}</div>
}

const ProductItem = ({ product, onClick }: {
  product: Product
  onClick?: () => void
}) => {
  return (
    <div
      className="border border-gray-200 rounded-lg cursor-pointer bg-white"
      onClick={() => onClick?.()}
    >
      <div className="w-full aspect-square p-3 shadow-inner">
        <img className="w-full h-full object-cover rounded-lg" src={product.thumbnail} />
      </div>
      <div className="p-4 text-center">
        <h4 className="font-bold">{product.title}</h4>
        <p className="font-bold text-blue-500 text-xl">{product.price} 원</p>
      </div>
    </div>
  )
}

export {
  Product,
  ProductList,
  ProductItem,
}