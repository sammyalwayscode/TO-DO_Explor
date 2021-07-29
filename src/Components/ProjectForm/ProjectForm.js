import React from "react";

function ProjectForm({
  handleSummit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) {
  return (
    <form onSubmit={handleSummit} className="ProjectForm">
      <h3> {heading} </h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Project Name..."
        autoFocus
      />
      <button
        className="Cancle"
        role="button"
        onClick={() => setShowModal(false)}
      >
        Cancle
      </button>
      <button className="Confirm">{confirmButtonText}</button>
    </form>
  );
}

export default ProjectForm;
