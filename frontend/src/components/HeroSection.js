import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConfig } from "../redux/configSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);

  const handleTitleChange = (e) => {
    dispatch(
      updateConfig({
        ...config,
        heroSection: { ...config.heroSection, title: e.target.value },
      })
    );
  };

  const handleSubtitleChange = (e) => {
    dispatch(
      updateConfig({
        ...config,
        heroSection: { ...config.heroSection, subtitle: e.target.value },
      })
    );
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${config?.heroSection?.backgroundImage})`,
      }}
    >
      <div className="p-8 bg-black bg-opacity-50 text-white">
        <input
          type="text"
          value={config?.heroSection?.title || ""}
          onChange={handleTitleChange}
          className="bg-gray-800 p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={config?.heroSection?.subtitle || ""}
          onChange={handleSubtitleChange}
          className="bg-gray-800 p-2 mb-2 w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
