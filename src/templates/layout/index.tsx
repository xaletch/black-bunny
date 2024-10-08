import { FC, PropsWithChildren } from "react"
import { Footer } from "../../widgets/footer/footer"
import { Header } from "../../widgets/header/header"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
