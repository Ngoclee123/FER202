import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    const draggedOverItem = items[index];
    if (draggingIndex === index) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems[draggingIndex];
    updatedItems.splice(draggingIndex, 1);
    updatedItems.splice(index, 0, draggedItem);

    setDraggingIndex(index);
    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(index);
          }}
          onDragEnd={handleDragEnd}
          style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '4px', cursor: 'move' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragDropList;