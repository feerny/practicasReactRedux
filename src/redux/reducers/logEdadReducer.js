const initialState = {
    text: "ingrese su edad"
};

const logEdadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'calculoEdad':
            if (action.edad > 18) {
                return {
                    ...state,
                    text: "es mayor de edad"
                };
            }else{
                return {
                    ...state,
                    text: "es menor de edad"
                };
            }
        case 'logEdad':
            return {
                ...state,
                text: `su edad es ${action.edad} años`
            };
        default:
            return state;
    }
};

export default logEdadReducer;