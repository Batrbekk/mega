import React from "react";

type Props = {
  title: string
  desc: Array<{
    label: string;
  }>;
  id: string,
  sim: string,
  wireless: string,
  energy: string,
  wirelessClass: string
};

export const Card: React.FC<Props> = (props) => {
  return (
    <div className="px-11 py-9 miniMac:px-4 bg-[#EEEEF1] rounded-[5px] w-1/4 relative">
      <div className="flex justify-center miniMac:h-[275px] h-[330px] max-h-[330px]">
        <img src={`/assets/cards/${props.id}.png`} alt="card-img" />
      </div>
      <p className="mt-6 text-center font-[Inter,sans-serif] text-[#050F20] text-[30px] font-semibold">{ props.title }</p>
      <div className="absolute w-full left-0 flex flex-col items-center">
        {props.desc.map((item) => (
          <p className="text-center font-[Inter,sans-serif] text-[#7F7F83] text-[16px] max-w-[365px]">{ item.label }</p>
        ))}
      </div>
      <div className="miniMac:mt-20 mt-16">
        <div className="flex items-center justify-between py-4 border-b border-[#DADADA]">
          <p className="text-[#252525] font-[Inter,sans-serif]">{props.sim}</p>
          <img src="/assets/icons/sim.svg" alt="sim-icon" />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-[#DADADA]">
          <p className={`${props.wirelessClass} text-[#252525] font-[Inter,sans-serif]`}>{props.wireless}</p>
          <img src="/assets/icons/shield.svg" alt="sim-icon" />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-[#252525] font-[Inter,sans-serif]">{props.energy}</p>
          <img src="/assets/icons/energy.svg" alt="sim-icon" />
        </div>
      </div>
      <button className="flex items-center justify-center gap-x-2 text-[#252525] text-base font-[Inter,sans-serif] px-6 py-3.5 rounded-full bg-[rgba(0,0,0,0.10)] hover:bg-[#050F20] hover:text-white mt-6 w-full">
        Узнать больше
        <svg id="btn-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
          <path d="M2 7.5L6.5 12L11 7.5" stroke="#282828" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  )
}

export default Card;
