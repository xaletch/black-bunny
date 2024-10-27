import { Wrapper } from "@/templates/wrapper"
import { CustomizationContentWrapper } from "./wrapper"
import { CategoryIcon } from "@/shared/ui/category/item"
import { CategoryWrapper } from "@/shared/ui/category/wrapper"
import { CustomizationList } from "@/features/customization"
import { useState } from "react"
import { CategoryItem } from "@/shared/ui/item-category"
import { CustomizationCategoryWrapper } from "./category-wrapper"
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/buttons"
import { UpdateIcon } from "@/shared/icons/UpdateIcon"

const services = ["DexScreener", "DexTools"];
const analytics = ["TTF Bot", "PIRBViewBot", "Other"];
const amounts = ["$10", "$50", "$100", "$1000"];
const percents = ["25%", "50%", "75%", "90%"];
const triggers = ["25%", "50%", "200%", "300%"]

export const CustomizationContent = () => {
  const [selectService, setSelectService] = useState<string>('DexScreener');
  const [selectAnalytic, setSelectAnalytic] = useState<string>('TTF Bot');
  const [selectAmount, setSelectAmount] = useState<string>('');
  const [selectPercents, setSelectPercents] = useState<string>('');
  const [selectTriggers, setSelectTriggers] = useState<string>('');
  const [otherValue, setOtherValue] = useState<string>('');

  return (
    <Wrapper cl={"mt-4 flex-1 flex flex-col justify-between"}>
      <CustomizationContentWrapper>
        <CustomizationList title={"Chart Service"} text={"Select your preferred chart service for viewing market data."}>
          <CategoryWrapper>
            {services.map((item, index) => (
              <CategoryIcon key={index} name={item} select={selectService} onSelect={()=> setSelectService(item)}/>
            ))}
          </CategoryWrapper>
        </CustomizationList>
        <CustomizationList title={"Analytics Bot"} text={"Choose an analytics bot to receive market analysis and updates."}>
          <CategoryWrapper>
            {analytics.map((item, index) => (
              <CategoryIcon key={index} name={item} select={selectAnalytic} onSelect={() => setSelectAnalytic(item)}/>
            ))}
          </CategoryWrapper>
          {selectAnalytic.toLocaleLowerCase() === "other" && (
            <div className="mt-3">
              <Input value={otherValue} onChange={(e) => setOtherValue(e)} placeholder={"Enter the bot address"} type={"text"} cl={"px-[14px] py-4 h-14"} />
            </div>
          )}
        </CustomizationList>
        <CustomizationList title={"Amounts Settings"} text={"Set the default amounts for quick transaction entries."}>
          <CustomizationCategoryWrapper>
            {amounts.map((item, index) => (
              <CategoryItem key={index} name={item} select={selectAmount} handleSelect={() => setSelectAmount(item)}/>
            ))}
          </CustomizationCategoryWrapper>
        </CustomizationList>
        <CustomizationList title={"Percents Settings"} text={"Define the percentage values for your portfolio management."}>
          <CustomizationCategoryWrapper>
            {percents.map((item, index) => (
              <CategoryItem key={index} name={item} select={selectPercents} handleSelect={() => setSelectPercents(item)}/>
            ))}
          </CustomizationCategoryWrapper>
        </CustomizationList>
        <CustomizationList title={"Triggers Settings"} text={"Configure the trigger percentages for alerts and automated actions."}>
          <CustomizationCategoryWrapper>
            {triggers.map((item, index) => (
              <CategoryItem key={index} name={item} select={selectTriggers} handleSelect={() => setSelectTriggers(item)}/>
            ))}
          </CustomizationCategoryWrapper>
        </CustomizationList>
      </CustomizationContentWrapper>

      <div className="mt-9 flex flex-col gap-4">
        <Button text={"Reset Customization"} cl={"w2 icon-20"} icon={<UpdateIcon/>} onClick={() => {}} />
        <Button text={"Save"} onClick={() => {}} color={"bg-button"} />
      </div>
    </Wrapper>
  )
}
