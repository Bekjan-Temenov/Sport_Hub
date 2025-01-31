import Container from "../../../shared/helpers/Container";

const details = {
  name: "Bilimkana Arena",
  dimensions: "23x24x8",
  courts: 2,
  type: "Крытый",
  surface: "Паркет",
  inventory: "Со своим мячом",
  hourlyRate: "3000с",
};

const infoSections = [
  {
    title: "Основная информация",
    items: [
      { label: "Размеры зала", value: details.dimensions },
      { label: "Количество", value: `${details.courts} площадки` },
      { label: "Тип", value: details.type },
    ],
  },
  {
    title: "Дополнительная информация",
    items: [
      { label: "Покрытие", value: details.surface },
      { label: "Инвентарь", value: details.inventory },
      { label: "Оплата за час", value: details.hourlyRate },
    ],
  },
];

const InfoGym = () => (
  <Container>
    <div className="p-6 text-white">
      <h2 className="mb-6 text-4xl">Зал {details.name}</h2>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        {infoSections.map((section, index) => (
          <div key={index} className="sm:w-[45%] w-full">
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-3 mb-2">
                  <div className="sm:bg-red-500 bg-white sm:w-[10px] sm:h-[10px] w-[5px] h-[5px] rounded-full"></div>
                  <span className="flex justify-between sm:w-full w-[300px]">
                    <span className="text-md md:text-xl lg:text-2xl">{item.label}:</span>
                    <span className="text-red-600 md:text-xl sm:text-white text-md lg:text-2xl">{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default InfoGym;
