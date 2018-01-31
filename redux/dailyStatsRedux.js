// TODO: Add stuff for todo list
// Actions and reducers for daily stats
// Used in Todo screen, Timer screen and Stats screen

const types = {
  ADD_POMODORO: 'ADD_POMODORO'
}

export const dailyActions = {
  addPomodoro: () => {
    return {type: types.ADD_POMODORO};
  }
} 

const initialState = {
  pomodoroCount: 0
}

export const dailyStats = (state = initialState, action) => {
  const { pomodoroCount } = state;
  const { type } = action;

  switch (type) {
    case types.ADD_POMODORO: {
      return {
        ...state,
        pomodoroCount: pomodoroCount + 1
      };
    }
    default: {
      return state;
    }
  }

}