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
import { listProjectsResourcesPOCS,listProjectPOCS,listResourcePOCS } from "./graphql/queries";
//import { listProjectsResourcesPOCS } from "./graphql/queries";
import {
  createProjectsResourcesPOC as createProjectsResourcesMutation,
  updateProjectsResourcesPOC as updateProjectsResourcesMutation,
  deleteProjectsResourcesPOC as deleteProjectsResourcesMutation,
} from "./graphql/mutations";

import ReactDOM from "react-dom";
import App from "./App";
import Resources from "./Resources";

import ReadOnlyRowNoButtons from "./components/ReadOnlyRowNoButtons";
import ResourcesReadOnlyRowNoButtons from "./components/ResourcesReadOnlyRowNoButtons"; 

const ProjectsResources = ({ signOut }) => {
  const [projectsresources, setProjectsResources] = useState([]);
  const [projectnames, setProjectNames] = useState([]);
  const [resourcenames, setResourceNames] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [addFormData, setAddFormData] = useState({
    projectName_pr: "",
    businessDomain_pr: "",
    resourceName_pr: "",
    resourceRole_pr: "",
  });

  useEffect(() => {
    fetchProjectsResources();
  }, []);

  async function fetchProjectsResources() {
    const apiData = await API.graphql({ query: listProjectsResourcesPOCS });
    const projectsresourcesFromAPI = apiData.data.listProjectsResourcesPOCS.items;
    setProjectsResources(projectsresourcesFromAPI);
  }

    console.log("projectsresources")
    console.log(projectsresources)

  useEffect(() => {
    fetchProjectNames();
  }, []);

  async function fetchProjectNames() {
    const apiData_Names = await API.graphql({ query: listProjectPOCS });
    const projectnamesFromAPI = apiData_Names.data.listProjectPOCS.items.map(projectnames => ({
      value: projectnames.projectName,
      text: projectnames.projectName,
  }));
    setProjectNames(projectnamesFromAPI);
  }

  useEffect(() => {
    fetchResourceNames();
  }, []);

  async function fetchResourceNames() {
    const apiData_ResourceNames = await API.graphql({ query: listResourcePOCS });
    const resourcenamesFromAPI = apiData_ResourceNames.data.listResourcePOCS.items.map(resourcenames => ({
      value: resourcenames.resourceName,
      text: resourcenames.resourceName,
  }));
    setResourceNames(resourcenamesFromAPI);
  }

  const [editFormData, setEditFormData] = useState({
    projectName_pr: "",
    businessDomain_pr: "",
    resourceName_pr: "",
    resourceRole_pr: "",
  });

  const [editProjectResourceId, setEditProjectResourceId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    //console.log("addFormData")
    //console.log(addFormData)

    fetchProjects();
    fetchResources();
  };

  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjectPOCS });
    const projectsFromAPI = apiData.data.listProjectPOCS.items;
    setProjects(projectsFromAPI);
  }

  async function fetchResources() {
    const apiData_Resources = await API.graphql({ query: listResourcePOCS });
    const resourcesFromAPI = apiData_Resources.data.listResourcePOCS.items;
    setResources(resourcesFromAPI);
    //console.log("resourcesFromAPI")
    //console.log(resourcesFromAPI)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  async function handleAddFormSubmit(event) {
    event.preventDefault();
    const newProjectResource = {
      id: nanoid(),
      projectName_pr: addFormData.projectName_pr,
      businessDomain_pr: addFormData.businessDomain_pr,
      resourceName_pr: addFormData.resourceName_pr,
      resourceRole_pr: addFormData.resourceRole_pr,
    };
    await API.graphql({
      query: createProjectsResourcesMutation,
      variables: { input: newProjectResource },
    });
    fetchProjectsResources();
    //event.target.reset();
    //addFormData.resourceName_pr = "";
    //addFormData.projectName_pr = "";
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const editedProjectResource = {
      id: editProjectResourceId,
      projectName_pr: editFormData.projectName_pr,
      businessDomain_pr: editFormData.businessDomain_pr,
      resourceName_pr: editFormData.resourceName_pr,
      resourceRole_pr: editFormData.resourceRole_pr,
    };

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
      projectName_pr: projectresource.projectName_pr,
      businessDomain_pr: projectresource.businesDomain_pr,
      resourceName_pr: projectresource.resourceName_pr,
      resourceRole_pr: projectresource.resourceRole_pr,
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
      <h2>Add Resources to Projects</h2>
      <form onSubmit={handleAddFormSubmit}>
      <select
          onChange={handleAddFormChange}
          name="projectName_pr"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Project</option>
          {projectnames.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
              })}
        </select>
        <br />
        <select
          onChange={handleAddFormChange}
          name="resourceName_pr"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >Name</option>
          {resourcenames.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
              })}
        </select>
        <br /><br />
        <button type="submit">Add</button>
      </form>
      <h2>Project Resources</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table><table1>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Resource Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectsresources.filter(projres => projres.projectName_pr === addFormData.projectName_pr).map((projectresource) => (
              <Fragment>
                {editProjectResourceId === projectresource.id ? (
                  <ProjectsResourcesEditableRow
                    editFormData={editFormData}
                    projectnames={projectnames}
                    resourcenames={resourcenames}
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
          </table1></table>
      </form>
      <h2>Project Details</h2>
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
            </tr>
          </thead>
          <tbody>
            {projects.filter(proj => proj.projectName === addFormData.projectName_pr).map((project) => (
              <ReadOnlyRowNoButtons
              project={project}
            />
            ))}
          </tbody>
        </table>
        <h2>Resource Details</h2>
      <table><table1>
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Resource Type</th>
              <th>Resource Role</th>
            </tr>
          </thead>
          <tbody>
            {resources.filter(res => res.resourceName === addFormData.resourceName_pr).map((resource) => (
              <ResourcesReadOnlyRowNoButtons
              resource={resource}
            />
            ))}
          </tbody>
          </table1></table>
    </div>
  );
};

//export default App;
export default withAuthenticator(ProjectsResources);
