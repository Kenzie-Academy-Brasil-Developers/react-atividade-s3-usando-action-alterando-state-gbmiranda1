const inicialState = {name: "coloque seu nome"};

function userReducer(state = inicialState, action){
    switch (action.type){
        case "CHANGE_NAME":
            return {name: action.name}
        default:
            return state
    }
}

export default userReducer;