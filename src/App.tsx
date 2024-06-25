function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 rounded-md bg-slate-300 p-10">
        <button className="px-2 py-2 rounded-sm bg-purple-400">
          Increment
        </button>
        <h1 className="text-3xl font-bold m-10">Hello world!</h1>
        <button className="px-2 py-2 rounded-sm bg-purple-400">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
