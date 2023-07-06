import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
  });
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardProvider };
