import { ADD_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK } from "../action/type";

const initialState = {
  tasks: [],
};

export const taskreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      const updatedTasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        updatedTaskId: action.payload._id, // Return the id of the updated task
      };
    default:
      return state;
  }
};
