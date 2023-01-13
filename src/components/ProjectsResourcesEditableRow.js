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
          value={editFormData.projectName_pr}
          onChange={handleEditFormChange}
          name="projectName_pr"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Project Name</option>
          <option id="1" >Build dynamic population from Projects table</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.businessDomain_pr}
          onChange={handleEditFormChange}
          name="businessDomain_pr"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Business Domain</option>
          <option id="1" >Build dynamic population based on Project Name</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.resourceName_pr}
          onChange={handleEditFormChange}
          name="resourceName_pr"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Resource Name</option>
          <option id="1" >Build dynamic populationn from Resources table</option>
        </select>
      </td>
      <td>
      <select
          value={editFormData.resourceRole_pr}
          onChange={handleEditFormChange}
          name="resourceRole_pr"
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
