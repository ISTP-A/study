import { Link } from "react-router-dom"

export default function MainPage() {
  return (
    <div>
      <Link className="underline" to='/deferredvalue'>deferred value</Link>
    </div>
  )
}