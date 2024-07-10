import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConfig } from "../redux/configSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);

  const handleItemsChange = (index, value) => {
    const newItems = [...config.sidebar.items];
    newItems[index] = value;
    dispatch(
      updateConfig({
        ...config,
        sidebar: { ...config.sidebar, items: newItems },
      })
    );
  };

  return (
    <aside className="bg-gray-900 p-4 text-white">
      {config?.sidebar?.items?.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          onChange={(e) => handleItemsChange(index, e.target.value)}
          className="bg-gray-800 p-2 mb-2"
        />
      ))}
    </aside>
  );
};

export default Sidebar;
