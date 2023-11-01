const TopBar = ({ selected }) => {
  return (
    <div className="flex justify-between border-b p-5">
      {selected ? (
        <>
          <div className="flex">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-checked-checkbox"
              checked
            />
            <label
              htmlFor="hs-checked-checkbox"
              className="text-xl  ml-2 font-semibold"
            >
              0 Files Selected
            </label>
          </div>
          <button
            type="button"
            className="font-semibold text-red-500 hover:underline outline-none transition-all text-lg"
          >
            Delete files
          </button>
        </>
      ) : (
        <h1 className="text-2xl font-semibold">ShantoGallery</h1>
      )}
    </div>
  );
};

export default TopBar;
