import Link from "next/link"
import { ReactElement } from "react"

export default function NotFound(): ReactElement {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <p className="text-5xl font-bold">404</p>
        <h1 className="my-2 text-3xl">Page not Found</h1>
        <Link href="/" className="text-2xl underline">
          Return Home
        </Link>
      </div>
    </main>
  )
}
