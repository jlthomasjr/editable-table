import React from "react";

const ReadOnlyRow = ({ project, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{project.projectName}</td>
      <td>{project.projectDescription}</td>
      <td>{project.businessDomain}</td>
      <td>{project.projectPriority}</td>
      <td>{project.engFTEneed}</td>
      <td>{project.intengFTEneed}</td>
      <td>{project.bsaFTEneed}</td>
      <td>{project.pmFTEneed}</td>
      <td>{project.tpmFTEneed}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, project)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(project.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
