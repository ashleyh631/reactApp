/* eslint-disable default-case */
import {
    ADD_TASK, EDIT_PENDING_TASK, PUBLISH_TASK
  } from '../Constants/ActionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          effort: undefined,
          id: 'new_task',
          title: '',
          value: undefined,
        };

      case EDIT_PENDING_TASK:
        return {
          effort: action.task.effort ? action.task.effort : state.effort,
          id: 'new_task',
          title: action.task.title ? action.task.title : state.title,
          value: action.task.value ? action.task.value : state.value,
        };

      case PUBLISH_TASK:
        return {};
      default:
        return state;
  }
};