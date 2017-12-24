// Actions and reducers for Settings
// Used in settingsScreen and timerScreen

export function changeSetting(item) {
  return {
    type: 'CHANGE_SETTING',
    payload: item,
  }
}

const initialState = {
  pomodoroLength : 25,
  shortBreak : 5,
  longBreak : 15,
  numPomodoros: 4,
};
 
export const settings = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'CHANGE_SETTING':
      const newState = {...state};
      newState[payload.label] = payload.value;
      return newState;
    
    default: 
      return state;
    
  }
}