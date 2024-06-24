import { FC } from "react";
import Todo from "./Container/todo/todo";
// import "./App.css";

export interface IProps {}

const App: FC<IProps> = ({}) => {
  return (
    <div>
      <Todo></Todo>
    </div>
  );
};

export default App;
