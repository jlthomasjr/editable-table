import React from "react";

const ResourcesReadOnlyRowNoButtons = ({ resource, handleEditClick, handleDeleteClick, handleAddFormChange }) => {
  return (
    <tr>
      <td>{resource.resourceName}</td>
      <td>{resource.resourceType}</td>
      <td>{resource.resourceRole}</td>
      <td>{resource.resourceHoursAllocated}</td>
    </tr>
  );
};

export default ResourcesReadOnlyRowNoButtons;
