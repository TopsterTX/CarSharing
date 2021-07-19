const defaultState = {
  isChoseOptions: false,
  isChoseColor: false,
  isChoseRate: false,
  isChoseDateRent: false,
  colors: [
    {
      id: 0,
      color: "Любой",
      active: false,
    },
    {
      id: 1,
      color: "Красный",
      active: false,
    },
    {
      id: 2,
      color: "Голубой",
      active: false,
    },
  ],
  dateFrom: "",
  dateTo: "",
  rates: [
    {
      id: 0,
      rate: "Поминутно",
      ratePrice: 7,
      postfix: '₽/мин',
      active: false,
    },
    {
      id: 1,
      rate: "На сутки",
      ratePrice: 1999,
      postfix: '₽/сутки',
      active: false,
    },
  ],
  addons: [
    {
      id: 0,
      addon: "Полный бак",
      price: 500,
      active: false,
    },
    {
      id: 1,
      addon: "Детское кресло",
      price: 200,
      active: false,
    },
    {
      id: 2,
      addon: "Правый руль",
      price: 1600,
      active: false,
    },
  ],
};

const reduce = "OPTIONS_";
export const CHOSE_OPTIONS = `${reduce}CHOSE_OPTIONS`;
export const CHOSE_COLOR = `${reduce}CHOSE_COLOR`;
export const CHOSE_DATE_RENT = `${reduce}CHOSE_DATE_RENT`;
export const CHOSE_RATE = `${reduce}CHOSE_RATE`;
export const CHANGE_COLOR = `${reduce}CHANGE_COLOR`;
export const CHANGE_RATE = `${reduce}CHANGE_RATE`;
export const CHANGE_DATE_FROM = `${reduce}CHANGE_DATE_FROM`;
export const CHANGE_DATE_TO = `${reduce}CHANGE_DATE_TO`;
export const CHANGE_ADDON = `${reduce}CHANGE_ADDON`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_OPTIONS:
      return {
        ...state,
        isChoseOptions: payload,
      };
    case CHOSE_COLOR:
      return {
        ...state,
        isChoseColor: payload,
      };
    case CHOSE_RATE:
      return {
        ...state,
        isChoseRate: payload,
      };
    case CHOSE_DATE_RENT:
      return {
        ...state,
        isChoseDateRent: payload,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        colors: state.colors.map((el) => {
          if (el.id === payload.id) {
            return { ...el, active: payload.bool };
          }
          return el;
        }),
      };
    case CHANGE_DATE_TO:
      return {
        ...state,
        dateTo: payload,
      };
    case CHANGE_DATE_FROM:
      return {
        ...state,
        dateFrom: payload,
      };
    case CHANGE_RATE: 
      return {
        ...state,
        rates: state.rates.map(el => {
          if(el.id === payload.id) {
            return {...el, active: payload.bool};
          }
          return el;
        })
      }
    default:
      return state;
  }
};
