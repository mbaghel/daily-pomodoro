// Actions and reducers for Settings
// Used in settingsScreen and timerScreen

export function changeSetting(item) {
  return {
    type: 'CHANGE_SETTING',
    payload: item,
  }
}
// initial settings:
// pomodoroLength: 25
// shortbreak: 5
// longBreak: 15
// numPomodoros: 4
// Changed for testing purposes
const initialState = {
  pomodoroLength : 0.1667,
  shortBreak : 0.0834,
  longBreak : 0.1667,
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
