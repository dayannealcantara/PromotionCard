import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import './style.css'
import PromotionList from "../List";
import useApi from "componenets/Utils";


const PromotionSearch = () =>{
  const mountRef = useRef(null)
  const [search, setSearch] = useState('')
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: '/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined,
    },
  });

  useEffect(() => { 
   load({
     debounced: mountRef.current,
   });
   if (!mountRef.current) {
     mountRef.current = true;
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="promotion-search">
      <header className="promotion-header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>     
        <input 
        className="promotion-input" 
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <PromotionList promotions={loadInfo.data} loading={loadInfo.loading} error={ loadInfo.error}/>     
          </div>
  )
};

export default PromotionSearch