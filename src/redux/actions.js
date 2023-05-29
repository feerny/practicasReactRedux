// actions.js

// Acción para incrementar un contador
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  // Acción para decrementar un contador
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  export const calculoEdad = (edad) => {
    return {
      type: 'calculoEdad',
      edad
    };
  };
  
  export const logEdad = (edad) => {
    return {
      type: 'logEdad',
      edad
    };
  };
  