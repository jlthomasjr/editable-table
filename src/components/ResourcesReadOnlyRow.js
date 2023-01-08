import React from "react";

const ResourcesReadOnlyRow = ({ resource, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{resource.resourceName}</td>
      <td>{resource.resourceType}</td>
      <td>{resource.resourceRole}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, resource)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(resource.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ResourcesReadOnlyRow;
