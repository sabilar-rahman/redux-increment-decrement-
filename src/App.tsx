import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
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
      </div>
    </div>
  );
}

export default App;
