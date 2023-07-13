export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "cardData":
      return {
        list: [
          ...state.list,
          {
            title: payload.title,
            boardType: payload.boardType,
            id: payload.id,
          },
        ],
      };
    case "updateCardData":
      return {
        list: state.list.map((listItem) => {
          if(payload.id === listItem.id) {
            return {
              ...listItem,
              description: payload.description,
              user: payload.user,
            }
          }
          return listItem;
        }),
      };
      case "heading":
        return {
          list: state.list.map((listItem) => {
            if(payload.id === listItem.id) {
              return {
                ...listItem,
                status: payload.status,
              }
            }
            return listItem;
          }),
        };
    default:
      return state;
  }
};
// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <Fragment>
//       <p>{state}</p>
//       <Button variant="success" onClick={() => dispatch({ type: "INCREMENT" })}>
//         INCREMENT
//       </Button>{" "}
//       <Button variant="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
//         DECRMENT
//       </Button>
//     </Fragment>
//   );
// };
// export default UseReducer;
