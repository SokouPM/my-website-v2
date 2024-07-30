import { RefObject, useEffect } from "react"

// eslint-disable-next-line
export const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: Function): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return (): void => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}
