const initialState = [
    {
        id: 1,
        userName: '',
        pass: '',
        question: [],
    }
]


const Test = (state = initialState, action) => {
    let item = action.payload
    switch (action.type) {
        case "ADD":
            state[0].directions = item.directions
            return state
        case 'NAME':
            state[0].userName = item.userName
            state[0].pass = item.tel
            return state
        case 'QUEST':
            state[0].question = item.questions
            return state
        default:
            return state
    }

}
export default Test