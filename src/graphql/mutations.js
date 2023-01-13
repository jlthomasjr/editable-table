/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResourcePOC = /* GraphQL */ `
  mutation CreateResourcePOC(
    $input: CreateResourcePOCInput!
    $condition: ModelResourcePOCConditionInput
  ) {
    createResourcePOC(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const updateResourcePOC = /* GraphQL */ `
  mutation UpdateResourcePOC(
    $input: UpdateResourcePOCInput!
    $condition: ModelResourcePOCConditionInput
  ) {
    updateResourcePOC(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const deleteResourcePOC = /* GraphQL */ `
  mutation DeleteResourcePOC(
    $input: DeleteResourcePOCInput!
    $condition: ModelResourcePOCConditionInput
  ) {
    deleteResourcePOC(input: $input, condition: $condition) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const createProjectPOC = /* GraphQL */ `
  mutation CreateProjectPOC(
    $input: CreateProjectPOCInput!
    $condition: ModelProjectPOCConditionInput
  ) {
    createProjectPOC(input: $input, condition: $condition) {
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
export const updateProjectPOC = /* GraphQL */ `
  mutation UpdateProjectPOC(
    $input: UpdateProjectPOCInput!
    $condition: ModelProjectPOCConditionInput
  ) {
    updateProjectPOC(input: $input, condition: $condition) {
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
export const deleteProjectPOC = /* GraphQL */ `
  mutation DeleteProjectPOC(
    $input: DeleteProjectPOCInput!
    $condition: ModelProjectPOCConditionInput
  ) {
    deleteProjectPOC(input: $input, condition: $condition) {
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
export const createProjectsResourcesPOC = /* GraphQL */ `
  mutation CreateProjectsResourcesPOC(
    $input: CreateProjectsResourcesPOCInput!
    $condition: ModelProjectsResourcesPOCConditionInput
  ) {
    createProjectsResourcesPOC(input: $input, condition: $condition) {
      id
      projectName
      businessDomain
      resourceName
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const updateProjectsResourcesPOC = /* GraphQL */ `
  mutation UpdateProjectsResourcesPOC(
    $input: UpdateProjectsResourcesPOCInput!
    $condition: ModelProjectsResourcesPOCConditionInput
  ) {
    updateProjectsResourcesPOC(input: $input, condition: $condition) {
      id
      projectName
      businessDomain
      resourceName
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjectsResourcesPOC = /* GraphQL */ `
  mutation DeleteProjectsResourcesPOC(
    $input: DeleteProjectsResourcesPOCInput!
    $condition: ModelProjectsResourcesPOCConditionInput
  ) {
    deleteProjectsResourcesPOC(input: $input, condition: $condition) {
      id
      projectName
      businessDomain
      resourceName
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
