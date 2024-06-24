import { FC, ChangeEvent, MouseEvent } from "react";

export interface IProps {
  priority: number;
  content: string;
  maxAge: string;
  inputPriority(e: ChangeEvent<HTMLInputElement>): void;
  inputContent(e: ChangeEvent<HTMLInputElement>): void;
  inputMaxAge(e: ChangeEvent<HTMLInputElement>): void;
  clickAdd(e: MouseEvent<HTMLButtonElement>): void;
}

const Adder: FC<IProps> = ({
  priority,
  content,
  maxAge,
  inputPriority,
  inputContent,
  inputMaxAge,
  clickAdd,
}) => {
  return (
    <div className="container">
      <div className="px-2 py-4 bg-gray-500 rounded-md flex flex-col gap-y-2">
        <div className="p-1 flex bg-green-400 rounded-sm flex-wrap gap-x-5 gap-y-5">
          <div className="flex">
            <label className="pr-2 text-black text-xl font-bold">
              우선순위
            </label>
            <input
              className="bg-blue-300 outline-0 appearance-none"
              type="number"
              onChange={inputPriority}
              value={priority}
              placeholder="priority"
              name="priotrity"
            />
          </div>
          <div className="flex grow">
            <label className="pr-2 text-black text-xl font-bold">내용</label>
            <input
              className="bg-blue-300 outline-0 grow"
              type="text"
              onChange={inputContent}
              value={content}
              placeholder="content"
              name="content"
            />
          </div>
          <div className="flex">
            <label className="pr-2 text-black text-xl font-bold">만료일</label>
            <input
              className="bg-blue-300 outline-0"
              type="date"
              onChange={inputMaxAge}
              value={maxAge}
              min={`${new Date().getFullYear()}-${(new Date().getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${new Date().getDate()}`}
              max={`${new Date(
                Date.now() + 3 * 365 * 24 * 60 * 60 * 1000
              ).getFullYear()}-${(new Date().getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${new Date().getDate()}`}
              placeholder="maxAge"
              name="maxAge"
            />
          </div>
        </div>
        <div className="p-1 flex justify-center">
          <button
            onClick={clickAdd}
            className="w-1/2 p-3 bg-green-400 rounded-xl
             outline-1 outline-blue-500 border border-green-800
           focus:text-blue-700 focus:border-transparent focus:outline
            focus:bg-blue-400 transition-[background] transition-[border] transition-[color]"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adder;
