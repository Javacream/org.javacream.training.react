export function toDoReducer(state = [], action) {
  if (action.type === "ADD_TODO"){
    return [
            ...state,
            {
              message: action.message
            }
          ]
  }
}
