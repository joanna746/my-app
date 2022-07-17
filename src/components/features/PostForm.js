import shortid from "shortid";


export const getAllPosts =payload => ({type:'GET_ALL_POSTS', payload});;

console.log(getAllPosts)
const postReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'GET_ALL_POSTS':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }
  export default postReducer;

