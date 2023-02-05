const initialState = [

]


const Test = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let item = action.payload
            state.push(item)
            return state

        default:
            return state
    }

}
export default Test