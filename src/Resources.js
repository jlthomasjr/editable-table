import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
//import data from "./mock-data.json";
import ResourcesReadOnlyRow from "./components/ResourcesReadOnlyRow";
import ResourcesEditableRow from "./components/ResourcesEditableRow";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator, Text
} from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { listResourcePOCS } from "./graphql/queries";
import {
  createResourcePOC as createResourceMutation,
  updateResourcePOC as updateResourceMutation,
  deleteResourcePOC as deleteResourceMutation,
} from "./graphql/mutations";

import ReactDOM from "react-dom";
import App from "./App";
import ProjectsResources from "./ProjectsResources";

const Resources = ({ signOut }) => {
  const [resources, setResources] = useState([]);
  const [addFormData, setAddFormData] = useState({
    resourceName: "",
    resourceType: "",
    resourceRole: "",
    resourceHoursAllocated: "",
    resourceQutil: "",
    resourceAutil: "",
  });

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    const apiData = await API.graphql({ query: listResourcePOCS });
    const resourcesFromAPI = apiData.data.listResourcePOCS.items;
    setResources(resourcesFromAPI);
  }

  const [editFormData, setEditFormData] = useState({
    resourceName: "",
    resourceType: "",
    resourceRole: "",
    resourceHoursAllocated: "",
    resourceQutil: "",
    resourceAutil: "",
  });

  const [editResourceId, setEditResourceId] = useState(null);

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
    const newResource = {
      id: nanoid(),
      resourceName: addFormData.resourceName,
      resourceType: addFormData.resourceType,
      resourceRole: addFormData.resourceRole,
    };
    await API.graphql({
      query: createResourceMutation,
      variables: { input: newResource },
    });
    fetchResources();
    event.target.reset();
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const editedResource = {
      id: editResourceId,
      resourceName: editFormData.resourceName,
      resourceType: editFormData.resourceType,
      resourceRole: editFormData.resourceRole,
      resourceHoursAllocated: editFormData.resourceHoursAllocated,
      resourceQutil: editFormData.resourceQutil,
      resourceAutil: editFormData.resourceAutil,
    };

    //const newProjects = [...projects];
    //const index = projects.findIndex((project) => project.id === editProjectId);
    //newProjects[index] = editedProject;
    //console.log("Running handleEditFormSubmit")
    //console.log(editedProject)

    await API.graphql({
      query: updateResourceMutation,
      variables: { input: editedResource },
    });
    //console.log("About to run fetchProjects")
    fetchResources();
    setEditResourceId(null);
    event.target.reset();
  };

  const handleEditClick = (event, resource) => {
    event.preventDefault();
    setEditResourceId(resource.id);

    const formValues = {
      resourceName: resource.resourceName,
      resourceType: resource.resourceType,
      resourceRole: resource.resourceRole,
      resourceHoursAllocated: resource.resourceHoursAllocated,
      resourceQutil: editFormData.resourceQutil,
      resourceAutil: editFormData.resourceAutil,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditResourceId(null);
  };

  async function handleDeleteClick(id) {
    const newResources = [...resources];
    const index = resources.findIndex((resource) => resource.id === id);
    newResources.splice(index, 1);
    setResources(newResources);

    //console.log("Running handleDeleteClick")
    //console.log(projectId)
    //console.log(id)
    //console.log(projects)
    //console.log(newProjects)
    //console.log(deleteProject)

    await API.graphql({
      query: deleteResourceMutation,
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
    <t1><button type="button" onClick={handleProjectsClick}>
          Go To Projects
        </button>
        <button type="button" onClick={handleProjectsResourcesClick}>
          Go To Projects with Resources
        </button></t1>
      <h2>Resources</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table><table1>
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Resource Type</th>
              <th>Resource Role</th>
              <th>Hours Allocated</th>
              <th>3-Month Utilization %</th>
              <th>12-Month Utilization %</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <Fragment>
                {editResourceId === resource.id ? (
                  <ResourcesEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ResourcesReadOnlyRow
                    resource={resource}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
          </table1></table>
      </form>

      <h2>Add Resource</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="resourceName"
          required="required"
          placeholder="First name last name"
          style={{width: "350px"}}
          onChange={handleAddFormChange}
        />
        <br />
        <select
          onChange={handleAddFormChange}
          name="resourceType"
          required="required"
          style={{width: "350px", paddingTop: "4px", paddingBottom: "4px",fontWeight: "400"}}
          >
          <option id="0" >FTE or Contractor</option>
          <option id="1" >FTE</option>
          <option id="2" >CTR</option>
        </select>
        <br />
          <select
          onChange={handleAddFormChange}
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
        <br />
        <br /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

//export default App;
export default withAuthenticator(Resources);
