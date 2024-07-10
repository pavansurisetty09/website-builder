import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConfig } from "../redux/configSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);

  const handleTitleChange = (e) => {
    dispatch(
      updateConfig({
        ...config,
        navbar: { ...config.navbar, title: e.target.value },
      })
    );
  };

  return (
    <nav className="bg-gray-800 p-4">
      <input
        type="text"
        value={config?.navbar?.title || ""}
        onChange={handleTitleChange}
        className="bg-gray-700 text-white p-2"
      />
    </nav>
  );
};

export default Navbar;
