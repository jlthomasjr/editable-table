import React from "react";

const ProjectsResourcesReadOnlyRowNoButtons = ({ projectresource, handleEditClick, handleDeleteClick, handleAddFormChange }) => {
  return (
    <tr>
      <td>{projectresource.projectName_pr}</td>
      <td>{projectresource.resourceName_pr}</td>
    </tr>
  );
};

export default ProjectsResourcesReadOnlyRowNoButtons;
