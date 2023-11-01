import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddImage from "./AddImage";
import Image from "./Image";

const Gallery = ({
  images,
  handleImageSelect,
  selectedImages,
  handleImageReorder,
}) => {
  return (
    <div className="w-full p-5 ">
      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {/* --------------- lopping image ---------------- */}
          {images.map((image, index) => (
            <Image
              key={image.id}
              image={image}
              index={index}
              selected={selectedImages.includes(image.id)}
              handleImageSelect={handleImageSelect}
              handleImageReorder={handleImageReorder}
            />
          ))}
          {/* ---------------- add image ----------------- */}
          <AddImage />
        </div>
      </DndProvider>
    </div>
  );
};

export default Gallery;
