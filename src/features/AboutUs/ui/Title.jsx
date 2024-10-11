import React, { useState } from "react";
import gallery from "../../../shared/assets/svg/admin_gallery.svg";

function Title() {
  const [selectedImages, setSelectedImages] = useState(Array(3).fill(null));

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...selectedImages];
      updatedImages[index] = imageUrl;
      setSelectedImages(updatedImages);
    }
  };  

  return (
    <div className="flex flex-col gap-y-[70px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="ml-[50px] font-sans text-3xl font-semibold">
          Заголовок
        </h1>
        <div className="flex items-center cursor-pointer">
          <div className="flex justify-center items-center w-[355px] h-[225px]  border rounded cursor-pointer bg-[#131313]">
            <input
              type="file"
              id="avatar-0"
              className="hidden"
              name="avatar-0"
              accept="image/png, image/jpeg"
              onChange={(e) => handleImageUpload(e, 0)}
            />
            <img
              onClick={() => document.getElementById("avatar-0").click()}
              src={selectedImages[0] || gallery}
              className="w-full h-full border rounded"
              alt="icon"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className=" border w-[207px] overflow-hidden flex items-center justify-center h-[140px] rounded cursor-pointer bg-[#131313] "
          >
            <input
              type="file"
              id={`avatar-${index + 1}`}
              className="hidden "
              name={`avatar-${index + 1}`}
              accept="image/png, image/jpeg"
              onChange={(e) => handleImageUpload(e, index + 1)}
            />
            <img
              onClick={() =>
                document.getElementById(`avatar-${index + 1}`).click()
              }
              src={selectedImages[index + 1] || gallery}
              alt="icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Title;
