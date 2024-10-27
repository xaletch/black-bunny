import { CopiedIcon } from '@/shared/icons/CopiedIcon';
import { Store } from 'react-notifications-component';

export const Notification = () => {
  return (
    <div className="w-full flex items-center gap-3 flex-1 backdrop-blur-lg rounded-full p-4" style={{
      backdropFilter: 'blur(34px)',
      boxShadow: '0 4px 12px 0 rgba(16, 71, 62, 0.24)',
      background: 'rgba(7, 177, 149, 0.23)',
    }}>
      <div>
        <CopiedIcon />
      </div>
      <p className="font-medium text-[16px] leading-6 text-[#07b195]">Copied</p>
    </div>
  );
};

export const notify = () => {
  Store.addNotification({
    content: Notification,
    type: "success",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      click: false,
      waitForAnimation: false,
    },
  });
};

