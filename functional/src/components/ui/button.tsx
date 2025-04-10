import { ComponentProps } from "react"

const Button = ({ ...props }: ComponentProps<'button'>) => {
  return <button className="" {...props} />
}

export { Button }