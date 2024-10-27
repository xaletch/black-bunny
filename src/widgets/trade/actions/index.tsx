import { AnalyticsIcon, ChartIcon, DeleteIcon, HideIcon, ProfitIcon } from "@/shared/icons/actions";
import { ShareIcon } from "@/shared/icons/ShareIcon";
import { OptionCard } from "@/shared/ui/optionCard";
import { OptionCardContent } from "@/shared/ui/optionCard/content";
import CopyText from "@/shared/utils/copyText";
import { ConfirmationMenu } from "@/widgets/confirmationMenu"
import { useNavigate } from "@tanstack/react-router"

export const TradeActions = ({ close, isDelete }: { close: () => void; isDelete: () => void }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    close();
    isDelete();
  }

  const cardData = [
    {
      key: "profit",
      label: "Share Profit",
      icon: <ProfitIcon />,
      onClick: () => close(),
      textColor: "text-white",
    },
    {
      key: "shareToken",
      label: "Share Token",
      icon: <ShareIcon />,
      onClick: () => {CopyText("123"); close()},
      textColor: "text-white",
    },
    {
      key: "chart",
      label: "Chart",
      icon: <ChartIcon />,
      onClick: () => {CopyText("123"); close()},
      textColor: "text-white",
    },
    {
      key: "analytics",
      label: "Analytics",
      icon: <AnalyticsIcon />,
      onClick: () => close(),
      textColor: "text-white",
    },
    {
      key: "hide",
      label: "Hide",
      icon: <HideIcon />,
      onClick: () => {navigate({ to: "/trade/hide" }); close()},
      textColor: "text-white",
    },
    {
      key: "deleteAllOrders",
      label: "Delete All Orders",
      icon: <DeleteIcon />,
      onClick: handleDelete,
      textColor: "text-failed",
    },
  ];

  return (
    <ConfirmationMenu close={close}>
      <div className="mt-5 flex flex-col gap-3">
        {cardData.map((card) => (
          <OptionCard key={card.key} select={false} onClick={card.onClick}>
            <OptionCardContent icon={card.icon} cl={"flex items-center justify-center bg-secondary-100"}>
              <div className="flex flex-1">
                <h3 className={`${card.textColor} text-base leading-4 font-medium`}>{card.label}</h3>
              </div>
            </OptionCardContent>
          </OptionCard>
        ))}
      </div>
    </ConfirmationMenu>
  )
}
