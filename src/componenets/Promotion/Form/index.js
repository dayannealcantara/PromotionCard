import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './style.css';
import axios from "axios";

const initialValue = {
  title: '',
  url:'',
  imagemUrl:'',
  price:0,
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();
  
  function onChange(e) {
    const { name, value } = e.target;
    setValues({...values, [name]: value })    
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/promotions', values)
    .then((response) => {
      history.push('/');
    });
  }
 

  return (
    <div>
    <h1>Promo show</h1>
    <h2>Nova Promoção</h2>
    <form onSubmit={onSubmit}>
      <div className="promotion-form">
        <label htmlFor="title">Título</label>
        <input name="title" id="title" type="text" onChange={onChange}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="url">Link</label>
        <input name="url" id="url" type="text" onChange={onChange}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="imageUrl">Imagem(URL)</label>
        <input name="imageUrl" id="imageUrl" type="text" onChange={onChange}/>
      </div>
      <div className="promotion-form">
        <label htmlFor="price">Preço</label>
        <input className="price" name="price" id="price" type="number" onChange={onChange}/>
      </div>
      <div>
        <button type="submit">Salvar</button>
      </div>
    </form>
    </div>
  )

};
export default PromotionForm