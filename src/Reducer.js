const initState = {
    settings: {
        loading: false,
        question_category: ``,
        question_difficulty: ``,
        question_type: ``,
        question_number: 50,
    }
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
            case "CHANGE_LOADING":
                return {
                    ...state, 
                    settings: {
                        ...state.settings,
                        loading: action.value
                  }
                }
            case "CHANGE_CATEGORY":
                return {
                  ...state,
                  options: {
                    ...state.options,
                    question_category: action.value
                  }
                }
              case "CHANGE_DIFFICULTY":
                return {
                  ...state,
                  options: {
                    ...state.options,
                    question_difficulty: action.value
                  }
                }
              case "CHANGE_TYPE":
                return {
                  ...state,
                  options: {
                    ...state.options,
                    question_type: action.value
                  }
                }
              
              case "CHANGE_AMOUNT":
                return {
                  ...state,
                  options: {
                    ...state.options,
                    amount_of_questions: action.value
                  }
                }
              default:
                return state
        }
    }
