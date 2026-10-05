import type { ReactNode } from 'react'

export function SimplePage({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <main className="page section-shell">
      <span className="eyebrow">{kicker}</span>
      <h1>{title}</h1>
      <div className="page-copy">{children}</div>
    </main>
  )
}
