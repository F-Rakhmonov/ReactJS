import React, { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PakingList";
import Stats from "./Stats";

function TravelList() {
  const [items, setItems] = useState([]);

  // AddItem
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  // DeleteItem
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // ToggleItem
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Clear
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  // render
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default TravelList;
