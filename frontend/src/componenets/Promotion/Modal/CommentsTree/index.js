import React, {useState, useMemo} from "react";
import './style.css'

function getTree(list) {
  if (!list) {
    return [];
  }
  const roots = [];
  const childrenByParentId ={};

  list.forEach((item) => {
    if(!item.parentId) {
      roots.push(item);
      return;
    }
    if (!childrenByParentId[item.parentId]) {
      childrenByParentId[item.parentId] = [];
    }
    childrenByParentId[item.parentId].push(item);   
  });

  function buildNodes(nodes) {
    if (!nodes) {
      return null;
    }
    return nodes.map((node) => ({
      ...node,
      children:buildNodes(childrenByParentId[node.id]),
    }));
  }

  return buildNodes(roots)
}

const PromotionModalCommentsTree = ({comments, sendComment}) => {
  const tree = useMemo(() => getTree(comments), [comments]);
  const [comment, setComment] = useState('');
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  if (!comments) {
    return <div>Carregando...</div>
  }
  function renderItem(item) {
    return(
      <li className="modalCommentsItem">
          <img 
          src={item.user.avatarUrl} 
          alt="" 
          className="modalCommentsImg"/>
        <div className="modalCommentsInfo" >
          <span className="modalCommentsNome">{item.user.name}</span>
          <p className="modalCommentsComentario">{item.comment}</p>
          <button 
          type="button"
          className="modalCommentsResponder"
          onClick={() => {
            setComment(''); 
            setActiveCommentBox(activeCommentBox === item.id ? null : item.id);
          }}
          >Responder</button>
          {activeCommentBox === item.id && (
            <div className="modalCommentsComentarioBox">
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
              <button
              type="button"
              className="modalCommentsComentarioButton"
              onClick={() => {
                sendComment(comment, item.id);
                setComment('');
                setActiveCommentBox(null)
              }}>Enviar</button>
            </div>
          )}
          {item.children && renderList(item.children)}
          </div>
        </li>
      );   
    }

    function renderList(list) {
      return (
        <ul className="modalComments">
        {list.map(renderItem)} </ul>
      );
    }
    return renderList(tree) 
  };
  PromotionModalCommentsTree.defaultProps = {
    sendComment: () => {},
  };

export default PromotionModalCommentsTree