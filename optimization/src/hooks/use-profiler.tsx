import { useId } from "react"

function useProfiler() {
  const id = useId()

  const onRender = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    console.log(`[Component ID: "${id}"]`)
    console.log(`step: ${phase}`)
    console.log(`actualDuration: ${actualDuration.toFixed(2)}ms`)
    console.log(`baseDuration: ${baseDuration.toFixed(2)}ms`)
    console.log(`startTime: ${startTime.toFixed(2)}ms`)
    console.log(`commitTime: ${commitTime.toFixed(2)}ms`)
  }

  return { id, onRender }
}

export { useProfiler }