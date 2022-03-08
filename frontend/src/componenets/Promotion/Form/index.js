import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './style.css';
import useApi from "componenets/Utils";

const initialValue = {
  title: '',
  url:'',
  imageUrl:'',
  price:0,
}

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null: initialValue);
  const history = useHistory();
  const [load] = useApi({
    url: `/promotions/${id}`,
    method: 'get',
    onCompleted: (response) => {
      setValues(response.data);
    }
  });

  const [save, saveInfo] = useApi({
    url: id ? `/promotions/${id}` : 'promotions',
    method: id ? 'put' : 'post',
    onCompleted : (response) =>{
      if (!response.error) {
        history.push('/');
      }
    }
  })
  

  useEffect(() =>{
    if (id) {
     load()
    }
  },[id]);
  
  function onChange(e) {
    const { name, value } = e.target;
    setValues({...values, [name]: value })    
  }

  function onSubmit(e) {
    e.preventDefault(); 
    save({
      data: values,
    })
  }
    
  return (
    <div>
    <h1>Promo show</h1>
    <h2>Nova Promoção</h2>
    {!values
    ? (
      <div>Carregando...</div>
    ) : (
    <form onSubmit={onSubmit}>
      <div className="promotion-form">
        <label htmlFor="title">Título</label>
        <input name="title" id="title" type="text" onChange={onChange} 
        value={values.title}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="url">Link</label>
        <input name="url" id="url" type="text" onChange={onChange}
        value={values.url}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="imageUrl">Imagem(URL)</label>
        <input name="imageUrl" id="imageUrl" type="text" onChange={onChange}
        value={values.imageUrl}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="price">Preço</label>
        <input className="price" name="price" id="price" type="number" onChange={onChange}
        value={values.price}
        />
      </div>
      <div>
        <button type="submit">Salvar</button>
      </div>
    </form>
    )}
    </div>
  )

};
export default PromotionForm