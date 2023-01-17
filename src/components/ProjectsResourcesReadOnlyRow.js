import React from "react";

const ProjectsResourcesReadOnlyRow = ({ projectresources, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{projectresources.projectName_pr}</td>
      <td>{projectresources.resourceName_pr}</td>
      <td>{projectresources.resourceRole}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(projectresources.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProjectsResourcesReadOnlyRow;
