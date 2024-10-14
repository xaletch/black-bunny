import { FC } from "react"
import { TransactionItemProps } from "./transactionItem.interface"
import { BTCMiniIcon } from "@/shared/icons/BTCMiniIcon"
import { ConfirmIcon, FailedIcon, PendingIcon } from "@/shared/icons/status"
import { ArrowTopIcon } from "@/shared/icons/ArrowTopIcon"


export const TransactionItem: FC<TransactionItemProps> = ({ icon, type, status, hash, fee, actions, amount, currency, transaction_id, }) => {
  return (
    <div className="w-full">
      <div className="flex gap-3">
        {icon && <img className="min-w-12 h-12" src={icon} alt={type} />}
        {!icon && type === 'sent' && (
          <div className="min-w-12 h-12 transaction-arrow rounded-full flex items-center justify-center bg-dark_gray border border-secondary-100"><ArrowTopIcon/></div>
        )}
        <div className="w-full">
          <div className="flex justify-between items-center py-[2px]">
            <div className="h-10 flex flex-col justify-between">
              <h4 className="text-sm font-medium text-white capitalize">{type}</h4>
              {hash && <p className="text-xs mt-[2px] text-swiper-text">{hash}</p>}
              {transaction_id && <p className="text-xs mt-[2px] text-swiper-text">ID: {transaction_id}</p>}
              {currency && <p className="text-xs mt-[2px] text-swiper-text">{currency}</p>}
            </div>
            <div className="h-10 flex items-end flex-col justify-between">
              {status && 
                <div className="flex items-center gap-1">
                  <p className={`text-sm capitalize ${status === 'pending' ? 'text-pending' : status === 'failed' ? 'text-failed' : status === 'confirmed' ? 'text-confirmed' : ''}`}>{status}</p>
                  <span>{status === 'pending' ? <PendingIcon /> : status === 'failed' ? <FailedIcon /> : status === 'confirmed' ? <ConfirmIcon /> : ''}</span>
                </div>
              }
              {amount && <p className="flex items-center text-sm font-medium text-white">
                {amount.includes('BTC') && <span className="flex mr-1"><BTCMiniIcon /></span>}
                {amount}
              </p>}
              {fee && <p className={`text-xs text-swiper-text ${parseFloat(fee.replace('$', '')) >= 1 ? 'text-confirmed' : ''}`}>{fee}</p>}
            </div>
          </div>
          {actions && <div className="mt-3 flex items-center gap-2 justify-end">
            {actions.map((item, index) => (
              <button className={`w-36 h-8 flex items-center justify-center rounded-full text-sm ${item === "Speed Up" ? 'bg-button text-[#FFFFFF]' : 'bg-dark_gray text-white'}`} key={index}>{item}</button>
            ))}  
          </div>}
        </div>
      </div>
    </div>
  )
}
