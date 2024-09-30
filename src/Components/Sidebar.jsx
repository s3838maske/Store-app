import { useDispatch } from "react-redux";
import {
  sagaCategoryAction,
  sagaProductList,
} from "../Store/Products/productAction";

// Sidebar.js
const categories = [
  { id: 1, name: "Cloths" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Miscellaneous" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="hidden sm:block">
      <div className="w-full bg-white border-r-1 p-4 z-20 pt-32 h-screen sticky top-0 left-0">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="pl-6">
          <li
            key="AllProduct"
            className="py-4 cursor-pointer"
            onClick={() => dispatch(sagaProductList())}
          >
            <a className="text-gray-600 hover:text-gray-900">All</a>
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className="py-4 cursor-pointer"
              onClick={() => dispatch(sagaCategoryAction(category.id))}
            >
              <a className="text-gray-600 hover:text-gray-900">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
