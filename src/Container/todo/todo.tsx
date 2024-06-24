import { FC, useState, useCallback } from "react";
import TodoComp from "../../Components/todo/todo";
import TodoCls from "../../lib/todo";

export interface IProps {}
interface IState {
  list: TodoCls[];
}

const Todo: FC<IProps> = ({}) => {
  const [state, setState] = useState<IState>({
    list: [],
  });
  const setComplete = useCallback(
    (idx: number) =>
      setState(({ list }) => {
        const temp = list[idx];
        list[idx] = new TodoCls(
          temp.getPriority(),
          temp.getContent(),
          temp.getMaxAge(),
          true
        );
        return { list: [...list] };
      }),
    []
  );
  const remove = useCallback(
    (idx: number) =>
      setState(({ list }) => {
        return { list: list.filter((_, itemIdx) => itemIdx !== idx) };
      }),
    []
  );
  const add = (priority: number, content: string, maxAge: string) =>
    setState(({ list }) => {
      list.push(new TodoCls(priority, content, maxAge));
      return { list: [...list] };
    });
  return (
    <TodoComp
      list={state.list}
      setComplete={setComplete}
      remove={remove}
      add={add}
    />
  );
};

export default Todo;
