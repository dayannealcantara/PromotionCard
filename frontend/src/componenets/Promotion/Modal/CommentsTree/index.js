import React from "react";
import './style.css'

const PromotionModalComments = ({comments}) => {
  if (!comments) {
    return <div>Carregando...</div>
  }
  return(
    <ul className="modalComments">
      {comments.map((item) => (
        <li className="modalCommentsItem">
          <img src={item.user.avatarUrl} alt="" className="modalCommentsImg"/>
          <div className="modalCommentsInfo" >
          <span className="modalCommentsNome">{item.user.name}</span>
          <p className="modalCommentsComentario">{item.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  )

}

export default PromotionModalComments