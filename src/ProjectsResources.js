import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
//import data from "./mock-data.json";
import ProjectsResourcesReadOnlyRow from "./components/ProjectsResourcesReadOnlyRow";
import ProjectsResourcesEditableRow from "./components/ProjectsResourcesEditableRow";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { listProjectsResourcesPOCS } from "./graphql/queries";
import {
  createProjectsResourcesPOC as createProjectsResourcesMutation,
  updateProjectsResourcesPOC as updateProjectsResourcesMutation,
  deleteProjectsResourcesPOC as deleteProjectsResourcesMutation,
} from "./graphql/mutations";

import ReactDOM from "react-dom";
import App from "./App";
import Resources from "./Resources";

const ProjectsResources = ({ signOut }) => {
  const [projectsresources, setProjectsResources] = useState([]);
  const [addFormData, setAddFormData] = useState({
    projectName: "",
    businessDomain: "",
    resourceName: "",
    resourceRole: "",
  });

  useEffect(() => {
    fetchProjectsResources();
  }, []);

  async function fetchProjectsResources() {
    const apiData = await API.graphql({ query: listProjectsResourcesPOCS });
    const projectsresourcesFromAPI = apiData.data.listProjectsResourcesPOCS.items;
    setProjectsResources(projectsresourcesFromAPI);
  }

  const [editFormData, setEditFormData] = useState({
    projectName: "",
    businessDomain: "",
    resourceName: "",
    resourceRole: "",
  });

  const [editProjectResourceId, setEditProjectResourceId] = useState(null);

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
    //console.log("ran handleEditFormChange")
  };

  async function handleAddFormSubmit(event) {
    event.preventDefault();
    const newProjectResource = {
      id: nanoid(),
      projectName: addFormData.projectName,
      businessDomain: addFormData.businessDomain,
      resourceName: addFormData.resourceName,
      resourceRole: addFormData.resourceRole,
    };
    await API.graphql({
      query: createProjectsResourcesMutation,
      variables: { input: newProjectResource },
    });
    fetchProjectsResources();
    event.target.reset();
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const editedProjectResource = {
      id: editProjectResourceId,
      projectName: editFormData.projectName,
      businessDomain: editFormData.businessDomain,
      resourceName: editFormData.resourceName,
      resourceRole: editFormData.resourceRole,
    };

    //const newProjects = [...projects];
    //const index = projects.findIndex((project) => project.id === editProjectId);
    //newProjects[index] = editedProject;
    //console.log("Running handleEditFormSubmit")
    //console.log(editedProject)

    await API.graphql({
      query: updateProjectsResourcesMutation,
      variables: { input: editedProjectResource },
    });
    //console.log("About to run fetchProjects")
    fetchProjectsResources();
    setEditProjectResourceId(null);
    event.target.reset();
  };

  const handleEditClick = (event, projectresource) => {
    event.preventDefault();
    setEditProjectResourceId(projectresource.id);

    const formValues = {
      projectName: projectresource.projectName,
      businessDomain: projectresource.businesDomain,
      resourceName: projectresource.projectresourceRole,
      resourceRole: projectresource.resourceRole,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProjectResourceId(null);
  };

  async function handleDeleteClick(id) {
    const newProjectsResources = [...projectsresources];
    const index = projectsresources.findIndex((projectresource) => projectresource.id === id);
    newProjectsResources.splice(index, 1);
    setProjectsResources(newProjectsResources);

    //console.log("Running handleDeleteClick")
    //console.log(projectId)
    //console.log(id)
    //console.log(projects)
    //console.log(newProjects)
    //console.log(deleteProject)

    await API.graphql({
      query: deleteProjectsResourcesMutation,
      variables: { input: { id } },
    });
  };

  async function handleProjectsClick(id) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  async function handleResourcesClick(id) {
    ReactDOM.render(
      <React.StrictMode>
        <Resources />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  return (
    <div className="app-container">
    <t1><button type="button" onClick={handleProjectsClick}>
          Go To Projects
        </button>
        <button type="button" onClick={handleResourcesClick}>
          Go To Resources
        </button></t1>
      <h2>Projects with Resources</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Business Domain</th>
              <th>Resource Name</th>
              <th>Resource Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectsresources.map((projectresource) => (
              <Fragment>
                {editProjectResourceId === projectresource.id ? (
                  <ProjectsResourcesEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ProjectsResourcesReadOnlyRow
                    projectresource={projectresource}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Resources to Projects</h2>
      <form onSubmit={handleAddFormSubmit}>
      <select
          onChange={handleAddFormChange}
          name="projectName"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Project Name</option>
          <option id="1" >Build dynamic population from Projects table</option>
        </select>
        <br />
        <select
          onChange={handleAddFormChange}
          name="businessDomain"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Business Domain</option>
          <option id="1" >Build dynamic population based on Project Name</option>
        </select>
        <br />
          <select
          onChange={handleAddFormChange}
          name="resourceName"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Resource Name</option>
          <option id="1" >Build dynamic populationn from Resources table</option>
        </select>
        <br />
          <select
          onChange={handleAddFormChange}
          name="resourceRole"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Role</option>
          <option id="1" >Build dynamic population based on Resource Name</option>
        </select>
        <br /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

//export default App;
export default withAuthenticator(ProjectsResources);
