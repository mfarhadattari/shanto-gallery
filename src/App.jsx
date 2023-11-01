import { useState } from "react";
import Gallery from "./components/Gallery/Gallery";
import TopBar from "./components/TopBar/TopBar";
import imagesData from "./utils/imagesData";

const App = () => {
  const [images, setImages] = useState(imagesData);
  const [selectedImages, setSelectedImages] = useState([]);

  // image select handler
  const handleImageSelect = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((i) => i !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  // image delete handler
  const handelDeleteImage = () => {
    const updatedImages = images.filter(
      (img) => !selectedImages.includes(img.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  // darg drop handler
  const handleImageReorder = (dragIndex, dropIndex) => {
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(dragIndex, 1);
    updatedImages.splice(dropIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  return (
    <div className="bg-slate-100 min-h-screen p-5 font-playpen-sans">
      <div className="max-w-7xl w-full mx-auto border bg-white rounded-md">
        <TopBar
          selectedImages={selectedImages}
          handelDeleteImage={handelDeleteImage}
        />
        <Gallery
          images={images}
          handleImageSelect={handleImageSelect}
          selectedImages={selectedImages}
          handleImageReorder={handleImageReorder}
        />
      </div>
    </div>
  );
};

export default App;
