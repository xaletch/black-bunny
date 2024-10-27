import { Balance } from "@/entities/balance-card";
import { TradeTokenCard } from "@/entities/trade-token-card";
import { TradeBalance } from "@/features/trade/balance"
import { TokenHistoryItem } from "@/features/wallet/token/history/item"
import { ShadowMany } from "@/shared/ui/shadow/many";
import { StatisticsItem } from "@/shared/ui/statistics-item";
import { Wrapper } from "@/templates/wrapper"
import { MenuWhatGasFee } from "@/widgets/menu/wtah-gas-fee";
import { useState } from "react";
import { TradeHistory } from "../history";
import { CategoryWrapper } from "@/shared/ui/category/wrapper";
import { CategoryIcon } from "@/shared/ui/category/item";
import { LoginTitle } from "@/widgets/loginTitle";
import { TransactionSmileIcon } from "@/shared/icons/TransactionSmileIcon";
import { Button } from "@/shared/ui/buttons";
import { useNavigate } from "@tanstack/react-router"
import { ConfirmationMenu } from "@/widgets/confirmationMenu";
import { Checkbox } from "@/shared/ui/checkbox";
import { FiltersIcon } from "@/shared/icons/FiltersIcon";

interface Option {
  label: string;
  value: string;
}

const history = ["Active", "Executed"];

const options: Option[] = [
  { label: 'All', value: 'all' },
  { label: 'Stop Loss', value: 'stopLoss' },
  { label: 'Market Buy', value: 'marketBuy' },
  { label: 'Market Sell', value: 'marketSell' },
  { label: 'Limit Buy', value: 'limitBuy' },
  { label: 'Limit Sell', value: 'limitSell' },
];

export const TradeTokenContent = () => {
  const navigate = useNavigate();
  const [isGas, setIsGas] = useState<boolean>(false);
  const [isFilters, setIsFilters] = useState<boolean>(false);
  const [selectHistory, setSelectHistory] = useState<string>("Active");

  const [selectedOptions, setSelectedOptions] = useState<string[]>(options.map(option => option.value));

  const handleToggle = (value: string) => {
    let newSelection;

    if (value === 'all') {
      if (!selectedOptions.includes('all')) {
        setSelectedOptions(options.map(option => option.value));
      } else {
        setSelectedOptions([]);
      }
    } else {
      newSelection = selectedOptions.includes(value)
        ? selectedOptions.filter(item => item !== value)
        : [...selectedOptions, value];

      if (newSelection.length === options.length) {
        setSelectedOptions([...newSelection, 'all']);
      } else {
        setSelectedOptions(newSelection.filter(item => item !== 'all'));
      }
    }
  };

  const isChecked = (value: string): boolean => selectedOptions.includes(value);

  return (
    <Wrapper cl={"mt-4 flex-1 flex flex-col justify-between"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="relative z-10">
        <TradeBalance onClick={() => setIsGas(true)} />
        <TradeTokenCard>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <StatisticsItem label={"Liquidity"} value={"$97.88K"} />
            <StatisticsItem label={"Volume"} value={"$1.91M"} />
            <StatisticsItem label={"Mcap"} value={"$686.39K"} />
            <StatisticsItem label={"Age"} value={"10h"} />
            <StatisticsItem label={"Trades 24h"} value={"550"} />
            <StatisticsItem label={"DEX"} value={"UNIWAP"} />
          </div>
        </TradeTokenCard>

        <Balance />

        <TradeHistory select={selectedOptions} onClick={() => setIsFilters(true)}>
          <CategoryWrapper>
            {history.map((item, index) => (
              <CategoryIcon key={index} name={item} select={selectHistory} onSelect={()=> setSelectHistory(item)}/>
            ))}
          </CategoryWrapper>
          {selectHistory === "Active" ? (
            <LoginTitle
              cl={'mt-8'}
              icon={<TransactionSmileIcon />}
              title={"No Active Orders"}
              text={""} 
            />
          ) : (
            <div className="flex flex-col gap-5 mt-3">
              <TokenHistoryItem name={"Approve"} date={"June 25, 11:09"} status={"Confirmed"} />
              <TokenHistoryItem name={"Buy: $0.064735"} date={"June 24, 12:45"} profit={"+16,678,585.90 BASE"} profit_price={"$79.09"} />
            </div>
          )}
        </TradeHistory>

      </div>
      <div className="grid grid-cols-2 gap-2 mt-8">
        <Button text={"Buy"} onClick={() => navigate({ to: '/trade/action' })} />
        <Button text={"Sell"} onClick={() => navigate({ to: '/trade/action' })} color={"bg-button"} />
      </div>

      {isGas && <MenuWhatGasFee close={() => setIsGas(false)} />}

      {isFilters && (
        <ConfirmationMenu close={() => setIsFilters(false)}>
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg">
              <FiltersIcon />
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Filters</h3>
              <p className="text-sm text-swiper-text">Displaying transactions according to the set parameters</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {options.map((option) => (
              <div key={option.value} className="w-full rounded-xl border border-bg-checkbox" onClick={() => handleToggle(option.value)}>
                <div className="p-3 flex items-center justify-between">
                  <p className={`text-sm ${option.value === 'all' ? 'font-semibold' : 'font-normal'} text-white`}>
                    {option.label}
                  </p>
                  <Checkbox
                    toggle={() => {}}
                    checked={isChecked(option.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
