import { useEffect, useRef, useState } from "react";

export const usePopupToggle = () => {
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handlePopupToggle = (name: string) => {
    setOpenPopup((prev) => (prev === name ? null : name));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpenPopup(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { openPopup, handlePopupToggle, popupRef };
};