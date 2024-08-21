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
import footKrugok from "../assets/png/Football_Krugok.png"
import footSport from "../assets/png/Football_Zally.png"
import footBall from "../assets/png/Foot_Ball.png"
import InFootball from "../assets/png/InFootball.png"
import InFootball2 from "../assets/png/InFootball2.png"
import InVollay from "../assets/png/Volley_InKrugok.png"
import Box from "../assets/png/Box.png"
import InBox from "../assets/png/Box_InSport.png"
import Box_Boll from "../assets/png/Box_Boll.png"
import Vollay from "../assets/png/Volley_Krugok.png"
import Vollay_Sport from "../assets/png/Volley_Sport.png"
import Tennis1 from "../assets/png/Tennis1.png"
import Tennis2 from "../assets/png/Tennis2.png"
import TennisIn from "../assets/png/Tennis_In.png"
import Takvondo from "../assets/png/Taekvondo.png"
import TakvondoIn from "../assets/png/Takvondo_In.png"


export const sports = [
  { 
    id: 1, 
    name: "Баскетбол", 
    image: basketball, 
    backgroundImage: krugok, 
    backgroundImage2: sportss, 
    inbackgroundImage: krugoks, 
    inbackgroundImage2: krugoks, 
    boll: basketballs 
  },
  { 
    id: 2, 
    name: "Футбол", 
    image: soccer, 
    backgroundImage: footSport, 
    backgroundImage2: footKrugok, 
    inbackgroundImage: InFootball, 
    inbackgroundImage2: InFootball2, 
    boll: footBall 
  },
  { 
    id: 3, 
    name: "Теннис", 
    image: tennis, 
    backgroundImage: Tennis1, 
    backgroundImage2: Tennis2,
    inbackgroundImage: TennisIn, 
    inbackgroundImage2: TennisIn,  
    boll: "https://s3-alpha-sig.figma.com/img/a9b8/f0f1/f5766ef6e7b42c9ad56fb31f5a81ca7e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3zevk0VxU2IMLvN~As9kOo3xzXAvl~vHZzhmyK6lZeEJQzehSK471oNkPks8fvQv1H4fl5Pe4H86NC079HH6n9iT85gReqcRRWvYKf9a~sO2TbxRNInk8GIsrz80oxz69~eMh~~iheHW1KglYt5CdKspXkJut9JVSHcW85RB9wEuFiTaOA54tom-mc26KW438k1bI7v68AUZvHMCl-FTtY3LnYDXH8oBpZRroBWGdVRMkugJBb8Ddtm5K4aUE0-eZAiUoSzQv1uICh7Ad1ACMydqKGpXSUfXT1rMU722U4rnnSw4wrzVcBn7a6hTuitbWe3VNJp4K5A8N0kOthkAw__" 
  },
  { 
    id: 4, 
    name: "Плавание", 
    image: swimming, 
    backgroundImage: krugok, 
    backgroundImage2: sportss, 
    inbackgroundImage: InFootball, 
    inbackgroundImage2: InFootball2, 
    boll: basketballs 
  },
  { 
    id: 5, 
    name: "Волейбол", 
    image: volleyball, 
    backgroundImage: Vollay, 
    backgroundImage2: Vollay_Sport,
    inbackgroundImage: InVollay, 
    inbackgroundImage2: InVollay,  
    boll: "https://s3-alpha-sig.figma.com/img/35ba/4abc/d0a0782ee5ed52b67c56f7f1386424e3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ezgt-CC8Wnbv1sJJtZeiE3J-~2uwGxw0TpvMTAFXN64o6WygryD2FIYBOSyx7nY2nLLC~ISy8Db7SaZCa2EuEZFXIo6HFbeIxkFHYJkNt7G~xXMWv~exGWdABDrdwNZeMiREEcjUOHV4J98enMIOI7YuR4kk~tomMergTVOsvSE5no9wQXz03WZy0SEdfsSYyCuJje3UFIr6s9qS7pRGXt2tluV9rr60xCRViih1o3QUIAYZAXbGfeevFH-9Tmn77oxYjoW7U3ZD74tqmu4HLgqFygbyZBe5V8JAmycfGXwT6D1D14rtzAaioDR88RfxC2Z8GmniZfCynlnD53iC8g__" 
  },
  { 
    id: 6, 
    name: "Тхэквондо", 
    image: taekwondo, 
    backgroundImage: Takvondo, 
    backgroundImage2: Takvondo, 
    inbackgroundImage: TakvondoIn, 
    inbackgroundImage2: TakvondoIn, 
    boll: "https://s3-alpha-sig.figma.com/img/ae49/829a/c62b1966ff5c7eb501dd721c70afb5df?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkEVARgJ7iEX5Ejeqa-OFalR~QiNPz58Xt-~insz5F3k3zHh-BffVM9ZWpokbQgvN~kbEDdA6ytLI2iWtqCTeIVD7f0XE90~M98MCGhrU3ZZzeRGDE9f2c4UgGhsipuYhCpdeCeHAW66zE3bW1g9KhHqvTqV4lYlA-hE9G8EaqO~du9sPAXRgkGkZZU~DS~bdJktXrZbjwfS0fga6jNsbBoy7X~8A9jK4R~UHiCwMLgZd64oCmsx9G3YExxSqa~THvrWroRQbAtFtbHNUh9~lgRUXffRiUpxmz1GfMbH-I8vYwICJk0DPcwa2ZrGoIZ9tM~n-naQaPpmDGQEYk-2Yw__" 
  },
  { 
    id: 7, 
    name: "Бокс", 
    image: boxing, 
    backgroundImage: Box, 
    backgroundImage2: Box,
    inbackgroundImage: InBox, 
    inbackgroundImage2: InBox,  
    boll: Box_Boll
  },
  { 
    id: 8, 
    name: "Велоспорт", 
    image: cycling, 
    backgroundImage: krugok, 
    backgroundImage2: sportss, 
    inbackgroundImage: InFootball, 
    inbackgroundImage2: InFootball2, 
    boll: basketballs 
  },
  { 
    id: 9, 
    name: "Йога", 
    image: yoga, 
    backgroundImage: krugok, 
    backgroundImage2: sportss, 
    inbackgroundImage: InFootball, 
    inbackgroundImage2: InFootball2, 
    boll: basketballs 
  },
];
