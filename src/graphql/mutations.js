/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      projectName
      projectDescription
      businessDomain
      projectPriority
      engFTEneed
      intengFTEneed
      bsaFTEneed
      pmFTEneed
      tpmFTEneed
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      projectName
      projectDescription
      businessDomain
      projectPriority
      engFTEneed
      intengFTEneed
      bsaFTEneed
      pmFTEneed
      tpmFTEneed
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      projectName
      projectDescription
      businessDomain
      projectPriority
      engFTEneed
      intengFTEneed
      bsaFTEneed
      pmFTEneed
      tpmFTEneed
      createdAt
      updatedAt
    }
  }
`;
