import React, { useState } from "react";

function AddItem({ newItem }) {

  const [item, setItem] = useState({ title: "", body: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setItem((preNote) => {
      return { ...preNote, [name]: value };
    });
  }
  const submitHandler = (e) => {
    if (!item.title || !item.body) return;
    setItem({ title: "", body: "" })
    e.preventDefault();
    console.log(item);
    newItem(item);
  };
  return (
    <>
    <form className="add-note" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Title" id="title"
        type="text"
        name="title" value={item.title}
        onChange={(e) => handleChange(e)} />
      <textarea
        placeholder="Take a note..." id="body"
        type="text"
        name="body" value={item.body}
        onChange={(e) => handleChange(e)}></textarea>
      <input type="submit" onClick={submitHandler} value="Add" />
    </form>
    </>
  );
}
export default AddItem;