import * as types from '../constants/index';

const initial = [
    {
        id: 1,
        name: 'Iphone 5',
        status: true,
        discription: 'This is the old phone of Brand Apple'
    },
    {
        id: 2,
        name: 'Iphone 13',
        status: false,
        discription: 'This is the new phone of Brand Apple just appear at today'
    }
]

const Product = (state=initial, action) => {
    console.log(action);
    switch (action.type) {
        
        case types.UPDATE_PRODUCT:

        const listProducts = state.map((item, index) =>{
            if(index === action.payload.id){
                console.log(action.payload.id)
                return { 
                    id: action.payload.id, 
                    name: action.payload.title, 
                    status:false, 
                    discription: 'Sản phẩm cũ'
                }
            }
            return {
                id: item.id, 
                name: item.name, 
                status:false, 
                discription: 'Sản phẩm mới'
            }

        })
        return listProducts 
        default:
            return state;
    }
}

export default Product;