import React, {useEffect, useState} from "react"
import UIModal from "componenets/UI/Modal"
import useApi from "componenets/Utils";
import PromotionModalCommentsTree from "./CommentsTree";
import './style.css'


const PromotionModal = ({promotionId, onClickClose }) =>{
  const [comment, setComment] = useState('');
  const [load, loadInfo] = useApi({
    url:'/comments',
    params:{
      promotionId,
      _expand: 'user'
    }
  });

  const [sendComment, sendCommentInfo] = useApi({
    url: '/comments',
    method: 'POST'
  })

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);

  async function onSubmit(e) {
    e.preventDefault();
    try{
    await sendComment({
      data: {
        userId:1,
        promotionId,
        comment,
      },
    });
    setComment('');
    load();
  } catch (e) {}
}

  async function sendAnswer(text, parentId) {
    await sendComment({
      data: {
        userId: 1,
        promotionId,
        comment: text,
        parentId,
      },
    });
    load({ quietly: true })
  }

  return(
    <UIModal isOpen onClickClose={onClickClose}>
      <form className="promotionModalForm" onSubmit={onSubmit} >
        <textarea 
        placeholder="Comente aqui..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        disabled={sendCommentInfo.loading}
        />
        <button className="promotionModalButton" type="submit" disabled={sendCommentInfo.loading}>
          {sendCommentInfo.loading? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    <PromotionModalCommentsTree comments={loadInfo.data} sendComment={sendAnswer}/>
  </UIModal>
  )
 }

 export default PromotionModal