import { FC, MouseEvent } from "react";

export interface IProps {
  priority: number;
  content: string;
  createdAt: string;
  maxAge: string;
  isComplete: boolean;
  clickSet(e: MouseEvent<HTMLButtonElement>): void;
  clickRemove(e: MouseEvent<HTMLButtonElement>): void;
}

const Item: FC<IProps> = ({
  priority,
  content,
  createdAt,
  maxAge,
  isComplete,
  clickSet,
  clickRemove,
}) => {
  return (
    <div
      className={`flex p-1 border-4 border-green-700 border-double rounded-md text-center items-center ${
        isComplete ? "bg-green-200" : "bg-blue-200"
      } max-[640px]:flex-col`}
    >
      <div
        className={`flex grow max-[640px]:flex-col ${
          isComplete ? "text-green-800" : "text-blue-800"
        }`}
      >
        <div
          className={`flex grow max-[640px]:gap-x-2 ${
            isComplete ? "line-through" : ""
          }`}
        >
          <div
            className={`px-3 border-r border-solid border-black font-bold max-[640px]:border max-[640px]:rounded-full ${
              isComplete
                ? "max-[640px]:bg-green-400"
                : "max-[640px]:bg-blue-400"
            }`}
          >
            {priority}
          </div>
          <div
            className={`grow px-3 border-r border-solid border-black text-left max-[640px]:border max-[640px]:rounded-md ${
              isComplete
                ? "max-[640px]:bg-green-300"
                : "max-[640px]:bg-blue-300"
            }`}
          >
            {content}
          </div>
        </div>
        <div className="flex max-[640px]:w-full">
          <div className="px-3 border-r border-solid border-black">
            from : {createdAt}
          </div>
          <div className="px-3 border-r border-solid border-black max-[640px]:border-r-0">
            to : {maxAge}
          </div>
        </div>
      </div>
      <div className="px-3 flex gap-x-3">
        <button
          className={`border-2 border-green-400 px-2 py-1 rounded-xl bg-green-100 text-green-800 focus:bg-green-300 hover:bg-green-200 transition-[background] ${
            isComplete ? "hidden" : ""
          }`}
          type="button"
          onClick={clickSet}
        >
          완료
        </button>
        <button
          className="border-2 border-red-400 px-2 py-1 rounded-xl bg-red-100 text-red-800 focus:bg-red-300 hover:bg-red-200 transition-[background]"
          type="button"
          onClick={clickRemove}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default Item;
