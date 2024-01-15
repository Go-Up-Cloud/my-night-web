const initialState = {
  usuarios: [],
  token: "",
  urlReturn: "",
  isntallments_number: "",
  response_code: undefined,
  card_detail: "",
  transaction_date: "",
  payment_type_code: "",
  commerce_code: undefined,
  order: "O-" + Math.floor(Math.random() * 10000) + 1,
  commerce_code: 597055555536,
  allProducts: [],
  products: [],
  total: 0,
  countProducts: 0,
  redirect: false,
  tickets: [],
  ticket_by_id: {}
};
import { BUY_PRODUCT, COMMIT, STATUS, REFUND, SET_TICKETS, SET_TICKETS_BY_ID} from "./actions.js";
 
  
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
      const newState = {
        ...state,
        vci: action.payload.vci,
        amount: action.payload.details[0].amount,
        installments_number: action.payload.details[0].installments_number,
        response_code: action.payload.details[0].response_code,
        card_detail: action.payload.card_detail.card_number,
        transaction_date: action.payload.transaction_date,
        payment_type_code: action.payload.details[0].payment_type_code,
        commerce_code: action.payload.details[0].commerce_code,
        redirect: action.payload.details[0].response_code === 0, // redirigir si el código de respuesta es 0
      };

      return newState;
    }
    case STATUS: {
      console.log("desde el reducer status", action.payload);
      return state;
    }
    case SET_TICKETS: 
      return {
        ...state,
        tickets: action.payload,
      };
    case SET_TICKETS_BY_ID: 
      return {
        ...state,
        ticket_by_id: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;