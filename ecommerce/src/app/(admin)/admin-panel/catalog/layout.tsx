import type { ReactNode } from "react"

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return <div className="catalog-layout">{children}</div>
}

