import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 rounded-md bg-slate-300 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-2 py-2 rounded-sm bg-purple-400"
        >
          Increment
        </button>
        <h1 className="text-3xl font-bold m-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-2 py-2 rounded-sm bg-purple-400"
        >
          Decrement
        </button>
        {/* increment by value */}
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-2 py-2 rounded-sm bg-purple-400"
        >
          incrementBy5
        </button>
      </div>
    </div>
  );
}

export default App;
