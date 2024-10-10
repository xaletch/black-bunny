import { FC, PropsWithChildren } from "react"
import { Footer } from "../../widgets/footer/footer"
import { Header } from "../../widgets/header/header"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-muted flex flex-col flex-1 relative">
      <Header />
      <main className="flex-1 flex">
        <div className="px-4 pb-4 flex flex-col flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
