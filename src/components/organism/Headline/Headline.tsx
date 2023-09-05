import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import Image from "next/image";

export const Headline = () => {
  const { t } = useTranslation([COMMON_TNS]);

  return (
    <>
      <div className="pt-44 pb-28">
        <p className="text-[#0E1116] text-[5rem] text-center font-semibold font-[Inter,sans-serif] leading-[110%] tracking-[-.8px]">Mega — новая эпоха для лучших <br/> охранных компаний</p>
      </div>
      <div className="flex justify-center pb-20 leading-[110%]">
        <img src="/assets/mega.png" alt="mega-img" />
      </div>
    </>
  )
}

export default Headline;
