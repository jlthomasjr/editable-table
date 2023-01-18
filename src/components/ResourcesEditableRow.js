import React from "react";
import "../App.css";

const ResourcesEditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Resource name"
          name="resourceName"
          value={editFormData.resourceName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <select
          value={editFormData.resourceType}
          onChange={handleEditFormChange}
          name="resourceType"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >FTE or Contractor</option>
          <option id="1" >FTE</option>
          <option id="2" >CTR</option>
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
          <option id="1" >Engineer</option>
          <option id="2" >Integration Engineer</option>
          <option id="3" >BSA</option>
          <option id="4" >PM</option>
          <option id="5" >TPM</option>
        </select>
      </td>
      <td>
        <input
        type="number"
        placeholder="Hours allocated"
        name="resourceHoursAllocated"
        value={editFormData.resourceHoursAllocated}
        onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
        type="number"
        placeholder="3-month utilization"
        name="resourceQutil"
        value={editFormData.resourceQutil}
        onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
        type="number"
        placeholder="12-month utilization"
        name="resourceAutil"
        value={editFormData.resourceAutil}
        onChange={handleEditFormChange}
        ></input>
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

export default ResourcesEditableRow;
