import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { ProfileWrapper } from "./wrapper"
import { SettingItem } from "@/shared/ui/setting-item"
import { SettingIcon } from "@/shared/ui/profile-icon"
import { ReleasesIcon } from "@/shared/icons/profile/ReleasesIcon"
import { WalletIcon } from "@/shared/icons/profile/WalletIcon"
import { ExportIcon } from "@/shared/icons/profile/ExportIcon"
import { SecurityIcon } from "@/shared/icons/profile/SecurityIcon"
import { LanguageIcon } from "@/shared/icons/profile/LanguageIcon"
import { CustomizationIcon } from "@/shared/icons/profile/CustomizationIcon"
import { AuthorizationIcon } from "@/shared/icons/profile/AuthorizationIcon"
import { SupportIcon } from "@/shared/icons/SupportIcon"
import { PolicyIcon } from "@/shared/icons/profile/PolicyIcon"
import { TermsIcon } from "@/shared/icons/profile/TermsIcon"
import { ProfileBlock } from "./block"
import { ProfileMode } from "./mode"

export const ProfileContent = () => {
  return (
    <Wrapper cl={"pt-4 pb-16"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="relative z-40 flex flex-col gap-8">
        <ProfileWrapper name={"News"}>
          <ProfileBlock>
            <SettingItem name={"Next Releases"} link={""} isLine={false}>
              <SettingIcon icon={<ReleasesIcon />} color={"007bfe"} />
            </SettingItem>
          </ProfileBlock>
        </ProfileWrapper>

        <ProfileWrapper name={"Settings"}>
          <ProfileBlock>
            <SettingItem name={"Wallet Settings"} link={"/wallet/choose"} isLine={true}>
              <SettingIcon icon={<WalletIcon />} color={"fe7a00"} />
            </SettingItem>
            <SettingItem name={"Export Seed Phrase"} link={"/profile/seed-phrase"} isLine={true}>
              <SettingIcon icon={<ExportIcon />} color={"fe2c57"} />
            </SettingItem>
            <SettingItem name={"Security"} link={""} isLine={true}>
              <SettingIcon icon={<SecurityIcon />} color={"919193"} />
            </SettingItem>
            <SettingItem name={"Language"} link={""} isLine={true}>
              <SettingIcon icon={<LanguageIcon />} color={"5754e1"} />
            </SettingItem>
            <SettingItem name={"Customization"} link={""} isLine={true}>
              <SettingIcon icon={<CustomizationIcon />} color={"ff3439"} />
            </SettingItem>
            <SettingItem name={"Two-Factor Authentication"} link={""} isLine={false}>
              <SettingIcon icon={<AuthorizationIcon />} color={"047ef3"} />
            </SettingItem>
          </ProfileBlock>
        </ProfileWrapper>

        <ProfileWrapper name={"Help"}>
          <ProfileBlock>
            <SettingItem name={"Support"} link={""} isLine={true}>
              <SettingIcon icon={<SupportIcon />} color={"007bfe"} />
            </SettingItem>
            <SettingItem name={"About Black Bunny"} link={""} isLine={true}>
              <SettingIcon icon={<ReleasesIcon />} color={"ef2a7b"} />
            </SettingItem>
            <SettingItem name={"Privacy Policy"} link={""} isLine={true}>
              <SettingIcon icon={<PolicyIcon />} color={"3dca60"} />
            </SettingItem>
            <SettingItem name={"Terms & Conditions"} link={""} isLine={false}>
              <SettingIcon icon={<TermsIcon />} color={"e4a62e"} />
            </SettingItem>
          </ProfileBlock>
        </ProfileWrapper>

        <ProfileMode />
      </div>
    </Wrapper>
  )
}
