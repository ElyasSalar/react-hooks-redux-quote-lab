// Action Creators
export function addQuote(quote){
  return {
    type: "quotes/add",
    payload: quote
  }
}

export function removeQuote(id){
  return {
    type: "quotes/remove",
    payload: id
  }
}

export function upvoteQuote(id){
  return {
    type: "quotes/upvote",
    payload: id
  }
}

export function downvoteQuote(id){
  return {
    type: "quotes/downvote",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type){
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      const withoutDeleted = state.filter(quote => quote.id !== action.payload);
      return withoutDeleted
    case "quotes/upvote":
      const upvoted = state.map(quote => {
        if(quote.id === action.payload) return {...quote, votes: quote.votes + 1};
        return quote;
      })
      return upvoted;
    case "quotes/downvote":
      const downvoted = state.map(quote => {
        if(quote.id === action.payload && quote.votes > 0) return {...quote, votes: quote.votes - 1};
        return quote;
      })
      return downvoted;
    default:
      return state;
  }
}
