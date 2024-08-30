import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Container from "../../../../shared/helpers/Container";
import { sports } from "../../../../shared/api/api";
import InZally from "./InZally";
import InKrugok from "./InKrugok";
import { useTranslation } from "react-i18next";

function Zally() {
  const { id } = useParams();
  const [sport, setSport] = useState();
  const {t} = useTranslation()

  useEffect(() => {
    const findSport = sports.find((data) => data.id === parseInt(id));
    setSport(findSport || null);
  }, [id]);


  return (
    <Container>
      {sport ? (
        <div className="flex flex-col gap-[40px] text-white mb-[100px]">
          <li className="text-4xl">{t(`${sport.name}`)}</li>
          <InZally  sport={sport}/>
          <InKrugok   sport={sport}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
export default Zally;
