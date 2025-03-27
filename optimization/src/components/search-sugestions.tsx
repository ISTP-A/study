import { memo, Profiler, use } from "react"
import { FixedSizeList } from "react-window"
import { useProfiler } from "../hooks/use-profiler"
import { fetchData } from "./data"

interface SearchSugestionsProps {
  query: string
}

function SearchSugestions({ query }: SearchSugestionsProps) {
  const { id, onRender } = useProfiler()
  const numbers = use(fetchData(query))

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style} className="text-sm px-4">
      {numbers[index].toLocaleString()}
    </div>
  )

  return (
    <Profiler id={id} onRender={onRender}>
      <div className="grid grid-cols-12 gap-y-4">
        {numbers.length > 0 ? (
          <FixedSizeList
            height={600}
            width="100%"
            itemCount={numbers.length}
            itemSize={36}
            className="col-span-12"
          >
            {Row}
          </FixedSizeList>
        ) : (
          <p className="col-span-12">검색결과가 없습니다</p>
        )}
      </div>
    </Profiler>
  )
}

export default memo(SearchSugestions)