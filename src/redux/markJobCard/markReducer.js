const initialState = {
  markJob: [],
};
const markReducer = (state = initialState, action) => {
  switch (action.type) {
    case "mark_job":
        if(!state.markJob.find(item => item.id == action.payload.id)){
            state.markJob.push({...action.payload})
        }
console.log(state)
      return {
        ...state,
        markJob: state.markJob,
      };
      case "remove_mark":
          const newMarkJobs = state.markJob.filter(item=> item.id !== action.payload.id)
          console.log(state)  
          return{
              ...state,
              markJob:newMarkJobs
          }
    default:
      return state;
  }
};
export default markReducer
