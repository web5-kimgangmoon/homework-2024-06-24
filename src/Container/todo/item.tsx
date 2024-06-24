import { FC, MouseEvent } from "react";
import ItemComp from "../../Components/todo/item";

export interface IProps {
  priority: number;
  content: string;
  createdAt: string;
  maxAge: string;
  isComplete: boolean;
  setComplete(): void;
  remove(): void;
}
interface IState {}

const Item: FC<IProps> = ({
  priority,
  content,
  createdAt,
  maxAge,
  isComplete,
  setComplete,
  remove,
}) => {
  const clickSet = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setComplete();
  };
  const clickRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remove();
  };
  return (
    <ItemComp
      priority={priority}
      content={content}
      createdAt={createdAt}
      maxAge={maxAge}
      isComplete={isComplete}
      clickSet={clickSet}
      clickRemove={clickRemove}
    />
  );
};

export default Item;
