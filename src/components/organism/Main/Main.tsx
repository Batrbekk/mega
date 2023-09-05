import Card from "@/components/molecule/Card";

export const Main = () => {
  const cards = [
    {
      id: '1',
      title: 'Mega',
      desc: [
        {
          label: 'Модульный охранный прибор'
        }
      ],
      sim: '2 SIM карты + Ethernet',
      wireless: '80 проводных/беспроводных зон',
      energy: 'Блок питания 2.5 А 12 В',
      wirelessClass: 'text-sm'
    },
    {
      id: '2',
      title: 'Mega Light',
      desc: [
        {
          label: 'Проводной охранный прибор'
        }
      ],
      sim: '2 SIM карты',
      wireless: '16 проводных зон',
      energy: 'Адаптер питания 1А 12B',
      wirelessClass: 'text-sm'
    },
    {
      id: '3',
      title: 'Mega Light 433',
      desc: [
        {
          label: 'Беспроводной охранный прибор'
        }
      ],
      sim: '2 SIM карты',
      wireless: '32 беспроводных зоны',
      energy: 'Адаптер питания 1А 12B',
      wirelessClass: 'text-sm'
    },
    {
      id: '4',
      title: 'Mega Keyboard',
      desc: [
        {
          label: 'Охранный прибор в корпусе клавиатуры'
        },
        {
          label: 'проводной | беспроводной'
        }
      ],
      sim: '2 SIM карты',
      wireless: '8 проводных или 32 беспроводных зоны',
      energy: 'Адаптер 1 А 12 В + АКБ 18650',
      wirelessClass: 'text-xs'
    }
  ];

  return (
    <div className="pt-20 px-20">
      <p className="text-[#050F20] text-[5rem] font-[Inter,sans-serif] font-semibold h-full max-h-[772px] leading-[110%]">
        Выбери свою Mega - новая <br/>
        линейка оборудования <br/>
        во вселенной RITM.
      </p>
      <div className="flex items-start gap-x-7 mt-24">
        {cards.map((card) => (
          <Card
            title={card.title}
            desc={card.desc}
            id={card.id}
            sim={card.sim}
            wireless={card.wireless}
            energy={card.energy}
            wirelessClass={card.wirelessClass}
          />
        ))}
      </div>
    </div>
  )
}

export default Main;
