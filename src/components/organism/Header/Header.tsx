import styles from './index.module.scss';
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";

export const Header = () => {
  const { t } = useTranslation([COMMON_TNS]);

  const links = [
    {
      href: '#',
      label: 'Mega'
    },
    {
      href: '#',
      label: 'Mega Light'
    },
    {
      href: '#',
      label: 'Mega Keyboard'
    },
    {
      href: '#',
      label: 'Софт'
    },
    {
      href: '#',
      label: 'Контакты'
    }
  ];
  const specification = [
    {
      label: 'Mega'
    },
    {
      label: 'Mega Light'
    },
    {
      label: 'Mega Light 433'
    },
    {
      label: 'Mega Keyboard'
    },
    {
      label: 'Mega Keyboard 433'
    }
  ]

  return (
    <div className="px-16 py-4 flex items-center justify-center relative">
      <img src="/assets/lightLogo.svg" alt="logo" className="mr-auto" />
      <div className="flex items-center justify-center gap-x-9 ">
        {links.map((item) => (
          <a href={item.href} className="text-[#050F20] text-base font-[Inter,sans-serif] font-normal hover:underline">{ item.label }</a>
        ))}
      </div>
      <div className="flex items-center justify-end gap-x-6 w-1/3">
        <div className={`${styles.dropdown} flex items-center gap-x-2 cursor-pointer`}>
          <p className="text-[rgba(0,0,0,0.50)] text-sm tracking-[.14px]">Спецификация</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M1 8L5 12L9 8" stroke="black" strokeOpacity="0.5" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className={`${styles.dropdownMenu} absolute top-full right-0 hidden bg-[rgba(0,0,0,0.10)] py-5 px-12 gap-x-10`}>
            {specification.map((item) => (
              <div className="w-fit flex flex-col items-center gap-y-2">
                <img src="/assets/specification.svg" alt="spec-icon"/>
                <p className="text-xs text-[#252525]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="text-[#252525] text-base font-medium font-[Inter,sans-serif] px-6 py-3.5 rounded-full bg-[rgba(0,0,0,0.10)] hover:bg-[#050F20] hover:text-white">
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default Header;
