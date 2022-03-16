import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import './style.css';
import useApi from "componenets/Utils";
import Field from "componenets/Form/Field";
import { Formik, Form } from "formik";
import schema from "./Schema";


const initialValue = {
  title: '',
  url:'',
  imageUrl:'',
  price:0,
}

const PromotionForm = ({ id }) => {
  const history = useHistory();
  const [load, loadInfo] = useApi({
    url: `/promotions/${id}`,
    method: 'get',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id]);
  
  function onSubmit(formValues) {
   save({
     data: formValues,
   }) 
  }

  const values = id ? loadInfo.data : initialValue;
   
  return (
    <div>
    <h1>Promo show</h1>
    <h2>Nova Promoção</h2>
    {!values
    ? (
      <div>Carregando...</div>
    ) : (
    <Formik 
    initialValues={initialValue}
    onSubmit={onSubmit}
    validationSchema={schema}
    render={() => ( 
    <Form>
      {saveInfo.loading && <span>Salvando dados ...</span>}
      <div className="promotion-form">
       <Field name="title" label="Título" type="text" />
      </div>
      <div className="promotion-form">       
        <Field name="url" label="Link" type="text" />
      </div>
      <div className="promotion-form">       
        <Field name="imageUrl" label="Imagem (URL)" type="text" />
      </div>
      <div className="promotion-form">      
        <Field className="price" name="price" label="Preço" type="number" />
      </div>
      <div>
        <button type="submit">Salvar</button>
      </div>
    </Form>
    )}/>
    )}
    </div>
  )

};
export default PromotionForm