export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "cardData":
      return {
        list: [
          ...state.list,
          { title: payload.title, boardType: payload.boardType },
        ],
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
