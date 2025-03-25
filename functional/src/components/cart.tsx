import { ComponentProps, PropsWithChildren } from "react"
import { Button } from "./ui/button"

const Cart = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[430px] h-full flex flex-col">
      {children}
    </div>
  )
}

const CartList = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100 shadow-inner">{children}</div>
  )
}

interface CartItemProps {
  id: string
  title: string
  price: number
  thumbnail: string
  onDelete: (id: string) => void
}

const CartItem = ({ id, title, price, thumbnail, onDelete }: CartItemProps) => {
  return (
    <div className="relative w-full h-40 p-4 flex gap-4 bg-white border border-gray-300 rounded-md">
      <div className="absolute right-4 top-4 p-2">
        <Button className="cursor-pointer font-semibold text-red-600" onClick={() => onDelete(id)}>삭제</Button>
      </div>
      <div className="aspect-square rounded-4xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="thumbnail"
          src={thumbnail}
        />
      </div>
      <div className="flex-1 py-2">
        <h6 className="font-semibold">{title}</h6>
        <p className="font-gray-800">{price} 원</p>
      </div>
    </div>
  )
}

const CartHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-header flex flex-col justify-center p-4 bg-background">
      {children}
    </div>
  )
}

const CartFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full bg-background">
      {children}
    </div>
  )
}

const CartBottomCTA = ({ className, ...props }: ComponentProps<'button'>) => {
  return <button className={"block w-full h-footer text-primary-foreground bg-primary"} {...props} />
}

export {
  Cart,
  CartList,
  CartItem,
  CartHeader,
  CartFooter,
  CartBottomCTA,
}