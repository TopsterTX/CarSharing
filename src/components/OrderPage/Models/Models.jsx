import React, {useEffect} from "react";
import {changeTotalButton as actionChangeTotalButton} from '../../../redux/Reducers/TotalButton/totalButton';
import {addItem as actionAddItem} from '../../../redux/Reducers/TotalList/totalList'
import ModelsList from "./ModelsList/ModelsList";
import { ModelsFilter } from "./ModelsFilter/ModelsFilter";
import "./Models.scss";
import { connect } from "react-redux";

const Models = ({changeTotalButton, addItem}) => {

  useEffect(() => {
    changeTotalButton('/order/place', 'Выберите местоположение')
    
  }, [])

  return (
    <section className="models">
      <div className="models__container">
        <ModelsFilter />
        <ModelsList />
      </div>
    </section>
  );
};

export default connect(
  ({}) => ({}),
  {
    changeTotalButton: actionChangeTotalButton,
    
  }
)(Models)