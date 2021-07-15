import slide1 from "../../../images/slider-1.jpg";
import slide2 from "../../../images/slider-2.jpg";
import slide3 from "../../../images/slider-3.jpg";
import slide4 from "../../../images/slider-4.jpg";

const defaultState = {
  slideNum: 0,
  isHide: false,
  sliderData: [
    {
      img: slide1,
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      bgButton: "linear-gradient(to right, #13493F, #0C7B1B)",
      id: 0,
    },
    {
      img: slide2,
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      bgButton: "linear-gradient(to right, #132949, #0C7B67)",
      id: 1,
    },
    {
      img: slide3,
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      bgButton: "linear-gradient(to right, #493013, #7B0C3B)",
      id: 2,
    },
    {
      img: slide4,
      text: "Автомобиль проходит еженедельное TO",
      title: "Обслуживание",
      bgButton: "linear-gradient(to right, #281349, #720C7B)",
      id: 3,
    },
  ],
};

const reduce = "SLIDER_";
export const TOGGLE_SLIDE = `${reduce}TOGGLE_SLIDE`;
export const SLIDER_HIDE = `${reduce}SLIDER_HIDE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SLIDE:
      return { ...state, slideNum: payload };
    case SLIDER_HIDE:
      return { ...state, isHide: payload };
    default:
      return state;
  }
};
