import Link from "next/link"
import { ReactElement } from "react"

export default function NotFound(): ReactElement {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <p className="font-bold text-5xl">404</p>
        <h1 className="my-2 text-3xl">Page not Found</h1>
        <Link href={"/about-me"} className="text-2xl underline">
          Return Home
        </Link>
      </div>
    </main>
  )
}
