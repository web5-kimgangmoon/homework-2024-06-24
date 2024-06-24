import { FC, useState, ChangeEvent, MouseEvent } from "react";
import AdderComp from "../../Components/todo/adder";

export interface IProps {
  add(priority: number, content: string, maxAge: string): void;
}
interface IState {
  priority: number;
  content: string;
  maxAge: string;
}

const Adder: FC<IProps> = ({ add }) => {
  const [state, setState] = useState<IState>({
    priority: 1,
    content: "",
    maxAge: "",
  });
  const inputPriority = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isNaN(Number(e.currentTarget.value))) {
      console.error("value is not number!");
      return;
    }
    setState((state: IState) => {
      state.priority = Number(e.target.value);
      return { ...state };
    });
  };
  const inputContent = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState((state: IState) => {
      state.content = e.target.value;
      return { ...state };
    });
  };
  const inputMaxAge = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const date = {
      fullYear: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
    const replaceDate = `${date.fullYear}-${date.month
      .toString()
      .padStart(2, "0")}-${date.day}`;
    const targetDate: Array<string> = e.target.value.split("-");
    if (Number(targetDate[0]) > date.fullYear + 3) {
      e.target.value = `${date.fullYear + 3}-${date.month
        .toString()
        .padStart(2, "0")}-${date.day}`;
    }
    if (Number(targetDate[0]) < date.fullYear) {
      e.target.value = replaceDate;
    }
    if (
      Number(targetDate[0]) == date.fullYear &&
      Number(targetDate[1]) < date.month
    ) {
      e.target.value = replaceDate;
    }
    if (
      Number(targetDate[0]) == date.fullYear &&
      Number(targetDate[1]) == date.month &&
      Number(targetDate[2]) < date.day
    ) {
      e.target.value = replaceDate;
    }
    setState((state: IState) => {
      state.maxAge = e.target.value;
      console.log(state.maxAge);
      return { ...state };
    });
  };
  const clickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!state.priority || !state.content || !state.maxAge) {
      console.error("please input datas!");
      return;
    }
    add(state.priority, state.content, state.maxAge);
  };
  return (
    <AdderComp
      priority={state.priority}
      content={state.content}
      maxAge={state.maxAge}
      inputPriority={inputPriority}
      inputContent={inputContent}
      inputMaxAge={inputMaxAge}
      clickAdd={clickAdd}
    />
  );
};

export default Adder;
