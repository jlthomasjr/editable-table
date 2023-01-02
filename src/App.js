import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from '@aws-amplify/ui-react';

const App = ({ signOut }) => {
  const [projects, setProjects] = useState(data);
  const [addFormData, setAddFormData] = useState({
    projectName: "",
    projectDescription: "",
    businessDomain: "",
    engFTEneed: "",
  });
  

  const [editFormData, setEditFormData] = useState({
    projectName: "",
    projectDescription: "",
    businessDomain: "",
    engFTEneed: "",
  });

  const [editProjectId, setEditProjectId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      id: nanoid(),
      projectName: addFormData.projectName,
      projectDescription: addFormData.projectDescription,
      businessDomain: addFormData.businessDomain,
      engFTEneed: addFormData.engFTEneed,
    };

    const newProjects = [...projects, newProject];
    setProjects(newProjects);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProject = {
      id: editProjectId,
      projectName: editFormData.projectName,
      projectDescription: editFormData.projectDescription,
      businessDomain: editFormData.businessDomain,
      engFTEneed: editFormData.engFTEneed,
    };

    const newProjects = [...projects];

    const index = projects.findIndex((project) => project.id === editProjectId);

    newProjects[index] = editedProject;

    setProjects(newProjects);
    setEditProjectId(null);
  };

  const handleEditClick = (event, project) => {
    event.preventDefault();
    setEditProjectId(project.id);

    const formValues = {
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      businessDomain: project.businessDomain,
      engFTEneed: project.engFTEneed,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProjectId(null);
  };

  const handleDeleteClick = (projectId) => {
    const newProjects = [...projects];

    const index = projects.findIndex((project) => project.id === projectId);

    newProjects.splice(index, 1);

    setProjects(newProjects);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Business Domain</th>
              <th>Eng FTE Need</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <Fragment>
                {editProjectId === project.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    project={project}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Project</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="projectName"
          required="required"
          placeholder="Project name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="projectDescription"
          required="required"
          placeholder="Project description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="businessDomain"
          required="required"
          placeholder="Business domain (e.g., Finance)..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="engFTEneed"
          required="required"
          placeholder="# Eng FTE resources..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

//export default App;
export default withAuthenticator(App);
