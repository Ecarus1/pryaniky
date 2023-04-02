const initState = {
  token: "dsadwdaw",
  waiting: false
}

interface IAction {
  type: string
  payload: {
    data: any;
  }
}

export default function reducer(state = initState, action: IAction) {
  switch (action.type) {

    case "auth/load":
      return { ...state, data: {}, waiting: true};

    case "auth/load-success":
      return { ...state, data: action.payload.data, waiting: false};

    case "auth/load-error":
      return { ...state, data: {}, waiting: false}; //@todo текст ошибки сохранить?

    default:
      // Нет изменений
      return state;
  }
}