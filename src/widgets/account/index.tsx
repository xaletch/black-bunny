import { WalletAccount } from "@/features/wallet/account"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"

import avatar from "@/assets/images/avatar.png"
import { ConfirmationMenu } from "../confirmationMenu"
import { Button } from "@/shared/ui/buttons"
import { Input } from "@/shared/ui/input"
import { useState } from "react"
import { Address } from "@/features/wallet/account/information/address"
import { PrivateKey } from "@/features/wallet/account/information/key"
import { LoginTitle } from "../loginTitle"
import { ErrorIcon } from "@/shared/icons/ErrorIcon"
import { CopyIcon } from "@/shared/icons/CopyIcon"
import { Key } from "@/shared/icons/Key"
import CopyText from "@/shared/utils/copyText"

export const AccountContent = () => {
  const [rename, setRename] = useState<boolean>(false);
  const [renameValue, setRenameValue] = useState<string>("Account 1");
  const [showKey, setShowKey] = useState<boolean>(false);
  const [showKeyStep, setShowKeyStep] = useState<number>(0);

  const key = "0x4B6C5aA04E2459175390eD97Db66d3B5760b6ab4dfghjkl567mnbgv4567fghjkl";

  const copyKey = (key: string) => {
    CopyText(key);

    setShowKey(false);
    setShowKeyStep(0);
  }

  return (
    <Wrapper cl={"pt-4"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <WalletAccount name={"Account 1"} avatar={avatar} rename={() => setRename(true)} />
      <div className="mt-11">
        <Address token={"0x4B6C5aA04E2459175390eD97Db66d3B5760b6ab4"} />
        <PrivateKey showKey={() => setShowKey(true)} />
      </div>
      {/* rename */}
      {rename &&
        <ConfirmationMenu close={() => setRename(false)}>
          <h3>Rename Wallet</h3>
          <div className="mt-5">
            <Input value={renameValue} onChange={(e) => setRenameValue(e)} placeholder={""} type={"text"} />
            <div className="flex flex-col gap-4 mt-8">
              <Button text={"Cancel"} onClick={() => setRename(false)} />
              <Button text={"Save"} onClick={() => setRename(false)} color={"bg-button"} />
            </div>
          </div>
        </ConfirmationMenu>
      }
      {showKey && (
        <ConfirmationMenu close={() => setShowKey(false)}>
          {showKeyStep === 0 ? 
            <LoginTitle 
              icon={<ErrorIcon />}
              color={"bg-red_error"}
              title={"Export Private Key"} 
              text={"With your private key, anyone can access your funds. Protect it and never disclose it to others."}
            />
          :
            <LoginTitle 
              icon={<Key />}
              title={"Your Private Key"} 
              text={"If you want to import a wallet, you will be able to do so thanks to this key"}
            />
          }
          {showKeyStep === 1 && (
            <div className="w-full mt-3 border border-key-border rounded-2xl">
              <div className="p-3">
                <p className="text-sm text-swiper-text break-words">{key}</p>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4 mt-8">
            {showKeyStep === 0 ? (
              <>
                <Button text={"Cancel"} onClick={() => setShowKey(false)} />
                <Button text={"Save"} onClick={() => setShowKeyStep(showKeyStep + 1)} color={"bg-button"} />
              </>
            )
            : (
              <>
                <Button text={"Close"} onClick={() => setShowKey(false)} />
                <Button text={"Copy"} icon={<CopyIcon />} icon_cl={"icon-24 w"} onClick={() => copyKey(key)} color={"bg-button"} />
              </>
              )
            }
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
