import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "componenets/Promotion/Form";
import UIContainer from "componenets/UI/Container";

const PagesPromotionForm = () => {
  const { id } = useParams();
  return (
    <UIContainer>
      <PromotionForm id={id? Number.parseInt(id, 10) : null} />
    </UIContainer>
  )
}

export default PagesPromotionForm