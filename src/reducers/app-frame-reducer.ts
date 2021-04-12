export default (
  state = {
    isDrawerOpen: true,
  },
  action: any,
) => {
  switch (action.type) {
    case 'APP-FRAME-OPEN-DRAWER': {
      return {
        ...state,
        isDrawerOpen: true,
      }
    }
    case 'APP-FRAME-CLOSE-DRAWER': {
      return {
        ...state,
        isDrawerOpen: false,
      }
    }
    default:
      return state
  }
}
