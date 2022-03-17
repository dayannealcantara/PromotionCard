import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import UIButton from "componenets/UI/Button";
import { BiTrash } from 'react-icons/bi'

const PromotionCard = ({promotion, onClickComments, onClickDelete}) => {
  return (
    <div className="promotionCard">
      <img src={promotion.imageUrl} alt={promotion.title} className="promotionCard-img" />
      <div className="promotionCard-info">
        <h1 className="promotionCard-title">{promotion.title}</h1>
        <span className="promotionCard-price"> R$ {promotion.price}</span>
        <footer className="promotionCard-footer">
          {promotion.comments.length > 0 && (
            <div className="promotionCard-coment">"{promotion.comments[0].comment}"</div>            
          )}
          <button className="promotionCard-comments" onClick={onClickComments}>{promotion.comments.length} {''} {promotion.comments > 1 ? 'Comentários' : 'Comentário'} 
          </button>       
            <UIButton 
            component="a"
             href={promotion.url}
             target="_blank"
              rel="noopener noreferrer" >Ir para ao site</UIButton>
            <UIButton 
              component={Link} 
              to={`/edit/${promotion.id}`} 
              className="promotionCard-editarButton">Editar</UIButton >
        </footer>
        <button  className="deleteButton"type="button" onClick={onClickDelete}>
          <BiTrash/>
        </button>
      </div>
    </div>
  )
}

export default PromotionCard