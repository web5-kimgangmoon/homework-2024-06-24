import { FC } from "react";
import List from "./list";
import Adder from "../../Container/todo/adder";
import TodoCls from "../../lib/todo";

export interface IProps {
  list: TodoCls[];
  setComplete(idx: number): void;
  remove(idx: number): void;
  add(priority: number, content: string, maxAge: string): void;
}

const Todo: FC<IProps> = ({ list, setComplete, remove, add }) => {
  return (
    <div>
      <List list={list} setComplete={setComplete} remove={remove} />
      <Adder add={add}></Adder>
    </div>
  );
};

export default Todo;
