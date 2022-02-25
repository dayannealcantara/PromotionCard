import React from "react";
import './style.css'

const PromotionCard = ({promotion}) => {
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
          <div className="promotionCard-comments">{promotion.comments.length}{''}{promotion.comments > 1 ? 'Comentários' : 'Comentário'}        
            <a className="promotionCard-link" href={promotion.url} target="_blank" rel="noopener noreferrer" >IR PARA O SITE</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default PromotionCard