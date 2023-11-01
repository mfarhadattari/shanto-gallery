import { useDrag, useDrop } from "react-dnd";

const Image = ({
  image,
  index,
  selected,
  handleImageSelect,
  handleImageReorder,
}) => {
  const [, ref, preview] = useDrag({
    type: "IMAGE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        handleImageReorder(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      className={`${
        index === 0 && "col-span-2 row-span-2"
      } border rounded-lg relative cursor-pointer`}
      onClick={() => handleImageSelect(image.id)}
      ref={(node) => {
        preview(ref(node));
        drop(node);
      }}
    >
      <div
        className={`w-full h-full absolute hover:bg-black ${
          selected && "bg-white"
        } opacity-50 rounded-md duration-1000`}
      ></div>
      <input
        type="checkbox"
        checked={selected}
        readOnly
        className="mt-5 ml-5 h-5 w-5 absolute border-white cursor-pointer bg-white"
      />
      <img src={image.src} alt={`Image ${image.id}`} />
    </div>
  );
};

export default Image;
