import basketball from "../assets/img/Rectangle 2.png";
import soccer from "../assets/img/Rectangle 3.png";
import tennis from "../assets/img/Rectangle 4 (1).png";
import swimming from "../assets/img/Rectangle 2 (1).png";
import volleyball from "../assets/img/Rectangle 4 (2).png";
import taekwondo from "../assets/img/Rectangle 5.png";
import boxing from "../assets/img/Rectangle 5 (1).png";
import cycling from "../assets/img/Rectangle 6.png";
import yoga from "../assets/img/Rectangle 7.png";
import krugoks from "../assets/png/Basket_Krugok2.png";
import basketballs from "../assets/png/basketball.png";
import krugok from "../assets/png/Basket_Krugok.png";
import sportss from "../assets/png/Basket_Sports.png";
import footKrugok from "../assets/png/Football_Krugok.png";
import footSport from "../assets/png/Football_Zally.png";
import footBall from "../assets/png/Foot_Ball.png";
import InFootball from "../assets/png/InFootball.png";
import InFootball2 from "../assets/png/InFootball2.png";
import InVollay from "../assets/png/Volley_InKrugok.png";
import Box from "../assets/png/Box.png";
import InBox from "../assets/png/Box_InSport.png";
import Box_Boll from "../assets/png/Box_Boll.png";
import Vollay from "../assets/png/Volley_Krugok.png";
import Vollay_Sport from "../assets/png/Volley_Sport.png";
import Tennis1 from "../assets/png/Tennis1.png";
import Tennis2 from "../assets/png/Tennis2.png";
import TennisIn from "../assets/png/Tennis_In.png";
import Takvondo from "../assets/png/Taekvondo.png";
import TakvondoIn from "../assets/png/Takvondo_In.png";
import tennisBoll from "../assets/svg/tennis_boll.svg";
import volleyballBoll from "../assets/svg/volleyboll_boll.svg";
import txekvondo from "../assets/svg/txekvondo_boll.svg";

export const sports = [
  {
    id: 1,
    name: "Баскетбол",
    image: basketball,
    backgroundImage: krugok,
    backgroundImage2: sportss,
    inbackgroundImage: krugoks,
    inbackgroundImage2: krugoks,
    boll: basketballs,
  },
  {
    id: 2,
    name: "Футбол",
    image: soccer,
    backgroundImage: footSport,
    backgroundImage2: footKrugok,
    inbackgroundImage: InFootball,
    inbackgroundImage2: InFootball2,
    boll: footBall,
  },
  {
    id: 3,
    name: "Теннис",
    image: tennis,
    backgroundImage: Tennis1,
    backgroundImage2: Tennis2,
    inbackgroundImage: TennisIn,
    inbackgroundImage2: TennisIn,
    boll: tennisBoll,
  },
  {
    id: 4,
    name: "Плавание",
    image: swimming,
    backgroundImage: krugok,
    backgroundImage2: sportss,
    inbackgroundImage: InFootball,
    inbackgroundImage2: InFootball2,
    boll: basketballs,
  },
  {
    id: 5,
    name: "Волейбол",
    image: volleyball,
    backgroundImage: Vollay,
    backgroundImage2: Vollay_Sport,
    inbackgroundImage: InVollay,
    inbackgroundImage2: InVollay,
    boll: volleyballBoll,
  },
  {
    id: 6,
    name: "Тхэквондо",
    image: taekwondo,
    backgroundImage: Takvondo,
    backgroundImage2: Takvondo,
    inbackgroundImage: TakvondoIn,
    inbackgroundImage2: TakvondoIn,
    boll: txekvondo,
  },
  {
    id: 7,
    name: "Бокс",
    image: boxing,
    backgroundImage: Box,
    backgroundImage2: Box,
    inbackgroundImage: InBox,
    inbackgroundImage2: InBox,
    boll: Box_Boll,
  },
  {
    id: 8,
    name: "Велоспорт",
    image: cycling,
    backgroundImage: krugok,
    backgroundImage2: sportss,
    inbackgroundImage: InFootball,
    inbackgroundImage2: InFootball2,
    boll: basketballs,
  },
  {
    id: 9,
    name: "Йога",
    image: yoga,
    backgroundImage: krugok,
    backgroundImage2: sportss,
    inbackgroundImage: InFootball,
    inbackgroundImage2: InFootball2,
    boll: basketballs,
  },
];
