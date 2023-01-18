import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { listProjectPOCS } from "./graphql/queries";
import {
  createProjectPOC as createProjectMutation,
  updateProjectPOC as updateProjectMutation,
  deleteProjectPOC as deleteProjectMutation,
} from "./graphql/mutations";

import Resources from "./Resources";
import ProjectsResources from "./ProjectsResources";

import ReactDOM from "react-dom";

const App = ({ signOut }) => {
  const [projects, setProjects] = useState([]);
  const [addFormData, setAddFormData] = useState({
    projectName: "",
    projectDescription: "",
    businessDomain: "",
    projectPriority: "",
    engFTEneed: 0,
    intengFTEneed: 0,
    bsaFTEneed: 0,
    pmFTEneed: 0,
    tpmFTEneed: 0,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    //console.log("Running fetchProjects")
    const apiData = await API.graphql({ query: listProjectPOCS });
    //console.log("Projects from API pre")
    //console.log(apiData)
    const projectsFromAPI = apiData.data.listProjectPOCS.items;
    //console.log("Projects from API post")
    //console.log(projectsFromAPI)
    setProjects(projectsFromAPI);
  }

  const [editFormData, setEditFormData] = useState({
    projectName: "",
    projectDescription: "",
    businessDomain: "",
    projectPriority: "",
    engFTEneed: 0,
    intengFTEneed: 0,
    bsaFTEneed: 0,
    pmFTEneed: 0,
    tpmFTEneed: 0,
  });

  const [editProjectId, setEditProjectId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    //console.log("New form data")
    //console.log(newFormData)
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
    //console.log("ran handleEditFormChange")
  };

  async function handleAddFormSubmit(event) {
    event.preventDefault();
    const newProject = {
      id: nanoid(),
      projectName: addFormData.projectName,
      projectDescription: addFormData.projectDescription,
      businessDomain: addFormData.businessDomain,
      projectPriority: addFormData.projectPriority,
      engFTEneed: addFormData.engFTEneed,
      intengFTEneed: addFormData.intengFTEneed,
      bsaFTEneed: addFormData.bsaFTEneed,
      pmFTEneed: addFormData.pmFTEneed,
      tpmFTEneed: addFormData.tpmFTEneed,
    };
    await API.graphql({
      query: createProjectMutation,
      variables: { input: newProject },
    });
    fetchProjects();
    event.target.reset();
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const editedProject = {
      id: editProjectId,
      projectName: editFormData.projectName,
      projectDescription: editFormData.projectDescription,
      businessDomain: editFormData.businessDomain,
      projectPriority: editFormData.projectPriority,
      engFTEneed: editFormData.engFTEneed,
      intengFTEneed: editFormData.intengFTEneed,
      bsaFTEneed: editFormData.bsaFTEneed,
      pmFTEneed: editFormData.pmFTEneed,
      tpmFTEneed: editFormData.tpmFTEneed,
    };

    await API.graphql({
      query: updateProjectMutation,
      variables: { input: editedProject },
    });
    //console.log("About to run fetchProjects")
    fetchProjects();
    setEditProjectId(null);
    event.target.reset();
  };

  const handleEditClick = (event, project) => {
    event.preventDefault();
    setEditProjectId(project.id);

    const formValues = {
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      businessDomain: project.businessDomain,
      projectPriority: project.projectPriority,
      engFTEneed: project.engFTEneed,
      intengFTEneed: project.intengFTEneed,
      bsaFTEneed: project.bsaFTEneed,
      pmFTEneed: project.pmFTEneed,
      tpmFTEneed: project.tpmFTEneed,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProjectId(null);
  };

  async function handleDeleteClick(id) {
    const newProjects = [...projects];
    const index = projects.findIndex((project) => project.id === id);
    newProjects.splice(index, 1);
    setProjects(newProjects);

    //console.log("Running handleDeleteClick")
    //console.log(projectId)
    //console.log(id)
    //console.log(projects)
    //console.log(newProjects)
    //console.log(deleteProject)

    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
  };

  async function handleResourcesClick(id) {
    ReactDOM.render(
      <React.StrictMode>
        <Resources />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  async function handleProjectsResourcesClick(id) {
    ReactDOM.render(
      <React.StrictMode>
        <ProjectsResources />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  return (
    <div className="app-container">
    <t1><button type="button" onClick={handleResourcesClick}>
          Go To Resources
        </button>
        <button type="button" onClick={handleProjectsResourcesClick}>
          Go To Projects with Resources
        </button></t1>
        <h2>Projects</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Business Domain</th>
              <th>Priority</th>
              <th>Eng hrs</th>
              <th>Int Eng hrs</th>
              <th>BSA hrs</th>
              <th>PM hrs</th>
              <th>TPM hrs</th>
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

      <h2>Add Project</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="projectName"
          required="required"
          placeholder="Project name"
          style={{width: "350px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="projectDescription"
          required="required"
          placeholder="Project description"
          style={{width: "350px"}}
          onChange={handleAddFormChange}
        />
        <br />
          <select
          onChange={handleAddFormChange}
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
          <option id="7" >Consumer</option>
          <option id="8" >Institutional</option>
          <option id="9" >Developer</option>
          <option id="9" >Platform</option>
          </select>
          <br />
        <select
          onChange={handleAddFormChange}
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
        <br />
        <input
          type="number"
          name="engFTEneed"
          placeholder="Eng hrs"
          style={{width: "175px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="number"
          name="intengFTEneed"
          placeholder="Integration Eng hrs"
          style={{width: "175px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="number"
          name="bsaFTEneed"
          placeholder="BSA hrs"
          style={{width: "175px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="number"
          name="pmFTEneed"
          placeholder="PM hrs"
          style={{width: "175px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="number"
          name="tpmFTEneed"
          placeholder="TPM hrs"
          style={{width: "175px"}}
          onChange={handleAddFormChange}
        />
        <br /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

//export default App;
export default withAuthenticator(App);
