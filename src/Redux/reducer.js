const initialState = {
  usuarios: [],
  token: "",
  urlReturn: "",
  installments_number: "",
  response_code: false,
  message: "",
  card_detail: "",
  transaction_date: "",
  payment_type_code: "",
  commerce_code: undefined,
  order: "O-" + Math.floor(Math.random() * 10000) + 1,
  buy_order: "",
  commerce_code: 597055555536,
  allProducts: [],
  products: [],
  categories: [],
  total: 0,
  countProducts: 0,
  redirect: false,
  events: [],
  ticket_by_id: {},
  bartenders: [],
  bartender_by_id: {},
  orders: [],
};
import { BUY_PRODUCT, COMMIT, STATUS, SET_BARTENDERS, SET_BARTENDER_BY_ID, SET_PRODUCTS, SET_CATEGORIES, SET_EVENTS, SET_ORDERS} from "./actions.js";
 
  
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "TRAER_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };
    case BUY_PRODUCT: {
      return {
        token: action.payload.token,
        urlReturn: action.payload.url,
        products: state.products,
        total: state.total,
        order: state.order,
        commerce_code: state.commerce_code,
        countProducts: state.countProducts,
      };
    }
    case COMMIT: {
      console.log('Antes de la actualización del estado:', state);
      const newState = {
        ...state,
        message: action.payload.message?action.payload.message:state.message,
        buy_order: action.payload.buy_order?action.payload.buy_order:state.buy_order,
        installments_number: action.payload.details?[0].installments_number:state.installments_number,
        response_code: action.payload.details?action.payload.details[0].response_code:state.response_code,
        card_detail: action.payload.card_detail?action.payload.card_detail?.card_number:state.card_detail ,
        transaction_date: action.payload.transaction_date?action.payload.transaction_date:state.transaction_date,
        payment_type_code: action.payload.details?[0].payment_type_code:state.payment_type_code,
        commerce_code: action.payload.details?[0].commerce_code:state.commerce_code,
        redirect: action.payload.details?[0].response_code === 0:state.redirect, // redirigir si el código de respuesta es 0
      };
      console.log('Después de la actualización del estado:', newState)
      return newState;
    }
    case STATUS: {
      console.log("desde el reducer status", action.payload);
      return state;
    }
    case SET_EVENTS: 
      return {
        ...state,
        events: action.payload,
      };
    case SET_BARTENDERS: 
      return {
        ...state,
        bartenders: action.payload,
      };
    case SET_BARTENDER_BY_ID: 
      return {
        ...state,
      bartender_by_id: action.payload,
      };
    case SET_PRODUCTS: 
    return {
      ...state,
      products: action.payload,
    };
    case SET_CATEGORIES: 
    return {
      ...state,
      categories: action.payload,
    };
    case SET_EVENTS: 
    return {
      ...state,
      events: action.payload,
    };
    case SET_ORDERS: 
    return {
      ...state,
      orders: action.payload,
    };
    default:
      return state;
    }
  
}

export default rootReducer;