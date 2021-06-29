import React, { useRef, useContext } from "react";
import { connect } from "react-redux";
import { toggleNav as actionToggleNav } from "../../../redux/Reducers/Navigation/navigation";
import slider, {
  sliderHide as actionSliderHide,
} from "../../../redux/Reducers/Slider/slider";
import "./BurgerMenu.scss";

const BurgerMenu = ({ className, navigation, toggleNav, sliderHide,slider }) => {
  const burgerMenu = useRef();

  const menuBurgerHandler = () => {
    toggleNav(!navigation.isOpenNav);
    burgerMenu.current.classList.toggle("active");
    sliderHide(!slider.isHide);
    console.log(!slider.isHide);
  };

  return (
    <button
      className={className}
      ref={burgerMenu}
      onClick={() => menuBurgerHandler()}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default connect(({ navigation, slider }) => ({ navigation, slider }), {
  sliderHide: actionSliderHide,
  toggleNav: actionToggleNav,
})(BurgerMenu);
