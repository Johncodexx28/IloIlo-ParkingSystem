import { Menu } from "@headlessui/react";
import { EllipsisVertical, Pencil, Trash, X } from "lucide-react";

const ActionMenu = ({ onEdit, onDelete }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
        <EllipsisVertical size={16} />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={onEdit}
              className={`${
                active ? "bg-gray-100" : ""
              } group flex items-center w-full px-2 py-2 text-sm text-gray-900 rounded-md`}
            >
              <Pencil size={16} className="mr-2" /> Edit
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              onClick={onDelete}
              className={`${
                active ? "bg-red-100 text-red-700" : "text-red-600"
              } group flex items-center w-full px-2 py-2 text-sm rounded-md`}
            >
              <Trash size={16} className="mr-2" /> Delete
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-gray-100" : ""
              } group flex items-center w-full px-2 py-2 text-sm text-gray-900 rounded-md`}
            >
              <X size={16} className="mr-2" /> Cancel
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ActionMenu;
