import { ADD_TASK, PUBLISH_TASK } from '../Constants/ActionTypes';

const initialState = '';

const activeTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: '#added_task_id',
        type: ADD_TASK,
      };
    case PUBLISH_TASK:
      return {
        id: '',
        type: PUBLISH_TASK,
      };
    default:
    return state;
    }
};

export default activeTaskReducer;