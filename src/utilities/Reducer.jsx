const products =[
    {
        name:'Itel A58, 6.6',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'16GB + 1GB RAM (Dual SIM), 4000mAh, Starry Black',
        price:7999
    },
    {
        name:'XIAOMI Redmi A1+',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/867668/1.jpg?8061',
        specs:'6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G , Dual SIM - Light Blue',
        price:10899
    },
    {
        name:'XIAOMI Mi Piston Earphones',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'Headphones Headset Silver',
        price:997
    },
    {
        name:'Infinix Smart 6',
        image:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/181586/1.jpg?6111',
        specs:'6.6", 32GB + 2GB RAM (Dual SIM), 5000mAh, 4G, Light Sea Green',
        price:10999
    },
    {
        name:'Infinix Hot 20i',
        image:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/509619/1.jpg?6064',
        specs:'6.6", 64GB + 3GB RAM (Dual SIM), 5000mAh, 4G - Luna Blue',
        price:11999
    },
   
    {
        name:'Itel A58, 6.6',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'4GB Ram-128Gb Rom-16Mp/16+8+2Mp-Black',
        price:12999
    },
    {
        name:'Generic S21 Ultra ',
        image:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/9838211/1.jpg?0962',
        specs:' HD+Screen 4G 5G,12GB+512GB, Dual Sim Dual Standby',
        price:16297
    },
    {
        name:'XIAOMI Mi Wifi Range Extender',
        image:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/089606/1.jpg?5477',
        specs:'  300Mbps Wifi Range Extender Repeater Pro Amplifier',
        price:1897
    },
    {
        name:'Samsang As10',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'16GB + 1GB RAM (Dual SIM), 4000mAh, Starry Black',
        price:7999
    },
    {
        name:'Nokia 3.5',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'16GB + 1GB RAM (Dual SIM), 4000mAh, Starry Black',
        price:7999
    },
    {
        name:'Samsang galaxy',
        image:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/077908/1.jpg?3330',
        specs:'16GB + 1GB RAM (Dual SIM), 4000mAh, Starry Black',
        price:7999
    },
    
]

export const INITIAL_STATE ={
    home: products,
    cart: [],
    incart:false
}
 export function ReducerFunction( state, action ){
    switch(action.type){
        case "ADD":
            return{
                ...state,
                cart:[...state.cart, action.payload]
            
            }
        case "INCART":
            return{
                
            }
        
        case "DELETE":
            return{
                ...state,
                cart:state.cart.filter((item)=>item.name !== action.payload)
            }
        case "SORT_BY_PRICE":
            return{
                ...state,
                home:[...state.home.filter((item)=> item.price< action.payload )]
               
            
    
            }
        default:
             return state
    }
 }