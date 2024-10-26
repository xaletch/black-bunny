import { Wrapper } from "@/templates/wrapper"
import { SettingItem } from "@/shared/ui/setting-item"
import { SettingIcon } from "@/shared/ui/profile-icon"
import { ProfileBlock } from "../profile/block"
import { useState } from "react"

export const LanguageContent = () => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <Wrapper cl={"pt-4 pb-16 relative z-10"}>
      <ProfileBlock>
        <SettingItem name={"English"} link={""} onClick={() => setLanguage("en")} isChecked={language === "en"} isCheckbox={true} isLine={false}>
          <SettingIcon icon={"🇬🇧"} color={""} />
        </SettingItem>
        <SettingItem name={"English"} link={""} onClick={() => setLanguage("uk")} isChecked={language === "uk"} isCheckbox={true} isLine={false}>
          <SettingIcon icon={"🇺🇦"} color={""} />
        </SettingItem>
      </ProfileBlock>
    </Wrapper>
  )
}
