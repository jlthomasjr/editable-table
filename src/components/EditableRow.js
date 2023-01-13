import React from "react";
import "../App.css";

const EditableRow = ({
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
          placeholder="Project name"
          name="projectName"
          value={editFormData.projectName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Project description"
          name="projectDescription"
          value={editFormData.projectDescription}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <select
          onChange={handleEditFormChange}
          value={editFormData.businessDomain}
          name="businessDomain"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Business domain</option>
          <option id="1" >Finance</option>
          <option id="2" >HR</option>
          <option id="3" >CX</option>
          <option id="4" >Marketing</option>
          <option id="5" >Legal</option>
          <option id="6" >GRC</option>
          </select>
      </td>
      <td>
      <select
          onChange={handleEditFormChange}
          value={editFormData.projectPriority}
          name="projectPriority"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Priority</option>
          <option id="1" >P0</option>
          <option id="2" >P1</option>
          <option id="3" >P2</option>
          <option id="4" >P3</option>
        </select>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Eng hrs"
          name="engFTEneed"
          value={editFormData.engFTEneed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Integration Eng hrs"
          name="intengFTEneed"
          value={editFormData.intengFTEneed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="BSA hrs"
          name="bsaFTEneed"
          value={editFormData.bsaFTEneed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="PM hrs"
          name="pmFTEneed"
          value={editFormData.pmFTEneed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="TPM hrs"
          name="tpmFTEneed"
          value={editFormData.tpmFTEneed}
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

export default EditableRow;
