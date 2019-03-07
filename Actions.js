import {
    ADD_TASK, EDIT_PENDING_TASK, PUBLISH_TASK
} from '../Constants/ActionTypes';

export const addTask = id => ({
    id,
    type: ADD_TASK,
  });

  export const editPendingTask = task => ({
     task,
     type: EDIT_PENDING_TASK,

  });

  export const publishTask = (effort,title,value) => {
    const taskid = Math.random();
    return {
      effort,
      id: taskid,
      title,
      type: PUBLISH_TASK,
      value,
    };
  };




