import { FC } from "react";
import Item from "../../Container/todo/item";
// import {IProps as ITodo} from "./todo";
import TodoCls from "../../lib/todo";

export interface IProps {
  list: TodoCls[];
  setComplete(idx: number): void;
  remove(idx: number): void;
}

const List: FC<IProps> = ({ list, setComplete, remove }) => {
  return (
    <div className="py-4 px-2 container flex flex-col gap-y-1">
      {list.map((item, idx) => (
        <Item
          key={idx}
          priority={item.getPriority()}
          content={item.getContent()}
          createdAt={item.getCreatedAt()}
          maxAge={item.getMaxAge()}
          isComplete={item.getIsComplete()}
          setComplete={() => {
            setComplete(idx);
          }}
          remove={() => {
            remove(idx);
          }}
        />
      ))}
    </div>
  );
};

export default List;
