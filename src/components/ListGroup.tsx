import { useState } from "react";

interface Props {
  header: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ header, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>No items founds. </p>}
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item, index) => (
          <li
            // className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            className={
              selectedIndex === index
                ? "w-full px-4 py-2 bg-cyan-400 border-black rounded"
                : "w-full px-4 py-2 border-b border-gray-200 rounded dark:border-gray-600"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
