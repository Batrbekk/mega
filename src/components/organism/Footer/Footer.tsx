export const Footer = () => {
  const cities = [
    {
      city: 'Санкт-Петербург',
      phone: '+7 812 325-01-02'
    },
    {
      city: 'Москва',
      phone: '+7 495 609-03-32'
    },
    {
      city: 'Алматы',
      phone: '+7 777 226-91-91'
    }
  ];

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
    }
  ];

  return (
    <div className="bg-[#050F20] p-20 mt-36 flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-[Inter,sans-serif] text-[70px] text-white font-semibold">Попробуй прямо сейчас. <br/> Выбери свое решение.</p>
          <p className="font-[Inter,sans-serif] text-[20px] text-white font-light">Оставьте заявку или позвоните, и мы сами всё за вас заполним.</p>
        </div>
        <button className="text-[#050F20] text-[22px] font-[Inter,sans-serif] px-24 py-9 rounded-full bg-white">
          Оформить заказ
        </button>
      </div>
      <div className="mt-[92px] flex justify-between items-end">
        <div className="flex items-end gap-x-[35px]">
          <p className="text-[#C0C0C0] text-sm font-[Inter,sans-serif] max-w-[126px]">
            Санкт-Петербург
            пр. Энергетиков д.30 к.8
          </p>
          {cities.map((item) => (
            <div>
              <p className="text-[#C0C0C0] text-sm font-[Inter,sans-serif]">{item.city}</p>
              <p className="text-white text-[22px] font-[Inter,sans-serif]">{item.phone}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-[35px]">
          {links.map((item) => (
            <a href={item.href} className="text-white font-[Inter,sans-serif] text-lg hover:underline">{item.label}</a>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-8 border-t border-[rgba(243,243,243,0.18)] flex justify-between">
        <p className="text-base text-white opacity-40">
          Разнообразный и богатый опыт говорит нам, что понимание сути ресурсосберегающих технологий не даёт нам иного выбора, кроме определения
        </p>
        <p className="text-base text-white">
          © 2022 Компания "Ритм"
        </p>
      </div>
    </div>
  )
}

export default Footer;
