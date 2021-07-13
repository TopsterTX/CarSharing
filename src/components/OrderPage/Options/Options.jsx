import React, {useEffect} from "react";
import { Color } from "./Color/Color";
import { DateRent } from "./DateRent/DateRent";
import { Rate } from "./Rate/Rate";
import { Addons } from "./Addons/Addons";
import './Options.scss'
import { useDispatch } from 'react-redux';
import { changeTotalButton } from './../../../redux/ActionCreators/TotalButton/totalButton';

export const Options = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeTotalButton('/order/total', 'Итого'))
  }, [])

  return (
    <section className="options">
      <div className="options__container">
        <Color />
        <DateRent />
        <Rate />
        <Addons />
      </div>
    </section>
  );
};
