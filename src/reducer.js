
export const intialState = {
    basket: [],
    user : null
    
}

const actionType = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
   
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };


        case actionType.REMOVE_FROM_BASKET:
            
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);

            }

            else {
                console.warn(`Cant remove product (id:${action.id} as its not in basket!)`)
            }
            return {
                ...state,
                basket: newBasket
            };

            case 'SET_USER':
           
                
                    return {
                        ...state,
                        user: action.user
                    }
        
                


        default:
            return state;
    }

}

export  { reducer, actionType};


export const getBasktetTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
