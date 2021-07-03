const defaultState = {
  listItems: [
    {
      head: "Пункт выдачи",
      result: "Ульяновск, Нариманова 32",
    },
  ],
};

const reduce = 'TOTAL-LIST_';

export default (state = defaultState, {type, payload}) => {
    switch(type){
        default: 
            return state;
    }
}
