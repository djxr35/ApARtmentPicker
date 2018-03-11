import { apartments } from "../testDB";


const initialState = {
  apartments: apartments
}

export const FILTER_PLACE = 'FILTER_PLACE';

export function filterByPlace(place){
  const action = {type: 'FILTER_PLACE', place};
  return action;
}

export default function apartmentReducer(state = initialState, action){
  switch (action.type){
    case FILTER_PLACE:
      return {...state, apartments: state.apartments.filter((apt)=>{
        if (apt.place === action.place){
          return apt;
        }
      })}
    default: return state;
  }
}
