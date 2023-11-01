import { FaImage } from "react-icons/fa";

const AddImage = () => {
  return (
    <div>
      <input
        type="file"
        id="add-img"
        className="opacity-0 absolute z-[-1] w-[100px]"
      />
      <label
        htmlFor="add-img"
        className="border-2 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer h-full p-5"
      >
        <div className="flex flex-col items-center ">
          <h1>
            <FaImage />
          </h1>
          <h1 className="text-lg">Add Image</h1>
        </div>
      </label>
    </div>
  );
};

export default AddImage;
