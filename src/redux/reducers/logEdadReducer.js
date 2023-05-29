const initialState = {
    text: "ingrese su edad"
};

const logEdadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'calculoEdad':
            if (action.edad >= 18) {
                return {
                    
                    text: "es mayor de edad"
                };
            }else{
                return {
                    
                    text: "es menor de edad"
                };
            }
        case 'logEdad':
            return {
                
                text: `su edad es ${action.edad} años`
            };
        default:
            return state;
    }
};

export default logEdadReducer;