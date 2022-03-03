import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "componenets/Promotion/Form";
import UIContainer from "componenets/UI/Container";

const PagesPromotionForm = () => {
  const { id } = useParams();
  return (
    <UIContainer>
      <PromotionForm />
    </UIContainer>
  )
}

export default PagesPromotionForm