import { Suspense, useDeferredValue, useState } from "react"
import { NUMBER_SIZE } from "../components/data"
import SearchSugestions from "../components/search-sugestions"
import useDebounce from "../hooks/use-debounce"

export default function PageDeferredValue() {
  const [query, setQuery] = useState<string>('1')
  const debounceQuery = useDebounce(query, 500)
  const deferredQuery = useDeferredValue(debounceQuery)

  return (
    <div className="w-container p-4 space-y-4">
      <div className="grid gap-2 gap-y-8">
        <h1 className="text-xl font-semibold">factorial ({Number(query)}! ~ {(Number(query) + NUMBER_SIZE - 1).toLocaleString()}!)</h1>
        <input
          type='text'
          className="w-full h-12 border px-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="숫자를 입력해주세요"
        />
      </div>
      <Suspense fallback={<>loading...</>}>
        <SearchSugestions query={deferredQuery} />
      </Suspense>
    </div>
  )
}