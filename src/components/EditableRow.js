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
        <input
          type="text"
          required="required"
          placeholder="Business domain"
          name="businessDomain"
          value={editFormData.businessDomain}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Priority (P0, P1...)"
          name="projectPriority"
          value={editFormData.projectPriority}
          onChange={handleEditFormChange}
        ></input>
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
