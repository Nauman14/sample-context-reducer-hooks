const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      default:
        throw new Error()  
    }
  }

export default counterReducer;