import { AppContext } from "../App";
import { useContext } from "react";

export default function Form() {
  const { handleChange, handleSubmit, showForm } = useContext(AppContext);

  return (
    <form className={`form ${showForm ? "show" : ""}`} onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Title..."
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="url-image">URL image</label>
      <input
        type="text"
        id="title"
        placeholder="Url..."
        name="url"
        onChange={handleChange}
      />
      <label htmlFor="name">Author's Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name..."
        name="name"
        onChange={handleChange}
      />
      <div className="text">
        <label htmlFor="textarea">Description</label>
        <textarea
          id="textarea"
          placeholder="Description..."
          maxLength={250}
          name="description"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
