import pending from "@/assets/icon/pending.svg";
import failed from "@/assets/icon/failed.svg";
import confirm from "@/assets/icon/confirm.svg";

export const PendingIcon = () => {
  return <img src={pending} alt="pending" />
}

export const FailedIcon = () => {
  return <img src={failed} alt="failed" />
}

export const ConfirmIcon = () => {
  return <img src={confirm} alt="confirm" />
}

