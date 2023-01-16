import React from "react";
import "../App.css";
//import "../ProjectsResources";

//console.log(projectnames)

const ProjectsResourcesEditableRow = ({
  editFormData,
  projectnames,
  resourcenames,
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
         {projectnames.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
              })}
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
          {resourcenames.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
              })}
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
