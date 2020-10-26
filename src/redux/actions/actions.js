export const simpleAction = () => dispatch => {
    console.log("doing the action")
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   }