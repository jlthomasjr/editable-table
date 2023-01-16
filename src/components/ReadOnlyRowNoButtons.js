import React from "react";

const ReadOnlyRowNoButtons = ({ project, handleEditClick, handleDeleteClick, handleAddFormChange }) => {
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
    </tr>
  );
};

export default ReadOnlyRowNoButtons;
