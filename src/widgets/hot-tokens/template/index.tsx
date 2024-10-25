import { Wrapper } from "@/templates/wrapper"
import { HotTokensHeader } from "../header"
import { FC, PropsWithChildren } from "react"

export const HotTokensTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper cl={""}>
      <HotTokensHeader />
      <div className="mt-4">
        {children}
      </div>
    </Wrapper>
  )
}
