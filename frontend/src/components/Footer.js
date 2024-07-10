import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConfig } from "../redux/configSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);

  const handleTextChange = (e) => {
    dispatch(
      updateConfig({
        ...config,
        footer: { ...config.footer, text: e.target.value },
      })
    );
  };

  return (
    <footer className="bg-gray-800 p-4 text-white">
      <input
        type="text"
        value={config?.footer?.text || ""}
        onChange={handleTextChange}
        className="bg-gray-700 p-2 w-full"
      />
    </footer>
  );
};

export default Footer;
