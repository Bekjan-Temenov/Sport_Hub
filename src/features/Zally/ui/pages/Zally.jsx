import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../shared/helpers/Container";
import { sports } from "../../../../shared/api/api";
import InZally from "./InZally";
import InKrugok from "./InKrugok";

function Zally() {
  const { id } = useParams();
  const [sport, setSport] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const findSport = sports.find((data) => data.id === parseInt(id));
    setSport(findSport || null);
  }, [id]);

  const handleButtonClick = () => {
    setIsClicked(true);
  };
  const handleOpenClick = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      {sport ? (
        <div className="flex flex-col gap-[40px] text-white mb-[100px]">
          <li className="text-4xl">{sport.name}</li>
          <InZally isClicked={isClicked} handleButtonClick={handleButtonClick} sport={sport}/>
          <InKrugok handleOpenClick={handleOpenClick} isOpen={isOpen} sport={sport}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
export default Zally;
