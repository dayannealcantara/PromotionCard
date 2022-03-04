import React from "react";
import { 
  BrowserRouter as Router , Route, Switch } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search";
import PagesPromotionForm from "./Promotion/Form";


const Root = () => {
  return (
    <Router> 
      <Switch> 
      <Route path="/create" component={PagesPromotionForm}/>
      <Route path="/edit/:id" component={PagesPromotionForm}/>
      <Route path="/" component={PagesPromotionSearch}/>  
      </Switch>     
    </Router>
  )
}

export default Root