import React from "react";
import "../App.css";

const ProjectsResourcesEditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <select
          value={editFormData.projectName}
          onChange={handleEditFormChange}
          name="projectName"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Project Name</option>
          <option id="1" >Build dynamic population from Projects table</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.businessDomain}
          onChange={handleEditFormChange}
          name="businessDomain"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Business Domain</option>
          <option id="1" >Build dynamic population based on Project Name</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.resourceName}
          onChange={handleEditFormChange}
          name="resourceName"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Resource Name</option>
          <option id="1" >Build dynamic populationn from Resources table</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.resourceRole}
          onChange={handleEditFormChange}
          name="resourceRole"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Role</option>
          <option id="1" >Build dynamic population based on Resource Name</option>
        </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ProjectsResourcesEditableRow;