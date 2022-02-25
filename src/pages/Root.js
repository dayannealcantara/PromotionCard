import React from "react";
import { 
  BrowserRouter as Router , Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search";
import PagesPromotionForm from "./Promotion/Form";


const Root = () => {
  return (
    <Router>     
      <Route path="/create" component={PagesPromotionForm}/>
      <Route path="/edit/:id" component={PagesPromotionForm}/>
      <Route path="/" component={PagesPromotionSearch}/>    
    </Router>
  )
}

export default Root