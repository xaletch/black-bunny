import { ArrowBottomIcon } from "@/shared/icons/ArrowBottom";
import { Button } from "@/shared/ui/buttons"
import { Wrapper } from "@/templates/wrapper"
import { useNavigate } from "@tanstack/react-router"

import loading1 from "@/assets/images/loading 1.png";
import loading2 from "@/assets/images/loading 2.png";
import loading3 from "@/assets/images/loading 3.png";
import loading4 from "@/assets/images/loading 4.png";
import { useCallback, useEffect, useState } from "react";
import { Shadow } from "@/shared/ui/shadow";


const slides = [
  {
    img: loading1,
    title: "BlackBunny DEX for everyone",
    description: "Are You Ready To The Moon?"
  },
  {
    img: loading2,
    title: "Trade with Elite Insights,",
    description: "Unlock Token Anomalies"
  },
  {
    img: loading3,
    title: "Cross-Chain Swap with Profit Goals,",
    description: "MEV and fail guard"
  },
  {
    img: loading4,
    title: "Auto trading -",
    description: "your Tesla in DEX world"
  }
]

const DURATION = 4000;

export const Loading = () => {
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const setActiveSlide = useCallback((index: number) => {
    setActiveSlideIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const progressInterval = 100;

    const timerId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / (DURATION / progressInterval));
        
        if (newProgress >= 100) {
          if (activeSlideIndex < slides.length - 1) {
            setActiveSlideIndex((prevIndex) => prevIndex + 1);
            return 0;
          }
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(timerId);
  }, [activeSlideIndex]);
  
  return (
    <Wrapper cl={"pb-4 h-full flex flex-col justify-between"}>
      <Shadow cl={"bg-green"} />
      <div className="">
        <div className="fixed top-[10px] w-full grid grid-cols-4 gap-1 px-4">
          {slides.map((_, index) => (
            <div
              className={`relative w-full h-[3px] overflow-hidden rounded-full bg-secondary-100 ${index < activeSlideIndex ? 'bg-white' : ''}`}
              key={index}
              onClick={() => setActiveSlide(index)}
            >
              <div
                style={{width: `${index === activeSlideIndex ? progress : index < activeSlideIndex ? 100 : 0}%`}}
                className="absolute h-full rounded-full top-0 left-0 bg-white transition-width duration-100"
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <img className="w-full" src={slides[activeSlideIndex].img} alt={slides[activeSlideIndex].title} />
          <div className="mt-[20px] flex flex-col items-center">
            <h2 className="font-bold text-[20px] text-white">{slides[activeSlideIndex].title}</h2>
            <p className="text-base text-center text-gray">{slides[activeSlideIndex].description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 mt-10">
        <Button text={"Create Wallet"} onClick={() => navigate({ to: '/registration-pin' })} color={"bg-button"} />
        <Button text={"Import Wallet"} icon_cl={"w2"} icon={<ArrowBottomIcon />} onClick={() => navigate({ to: '/wallet' })} />
      </div>
    </Wrapper>
  )
}
