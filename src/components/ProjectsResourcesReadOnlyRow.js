import React from "react";

const ProjectsResourcesReadOnlyRow = ({ projectresource, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{projectresource.projectName_pr}</td>
      <td>{projectresource.resourceName_pr}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, projectresource)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(projectresource.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProjectsResourcesReadOnlyRow;
