/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResourcePOC = /* GraphQL */ `
  subscription OnCreateResourcePOC(
    $filter: ModelSubscriptionResourcePOCFilterInput
  ) {
    onCreateResourcePOC(filter: $filter) {
      id
      resourceName
      resourceType
      resourceRole
      resourceHoursAllocated
      resourceQutil
      resourceAutil
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResourcePOC = /* GraphQL */ `
  subscription OnUpdateResourcePOC(
    $filter: ModelSubscriptionResourcePOCFilterInput
  ) {
    onUpdateResourcePOC(filter: $filter) {
      id
      resourceName
      resourceType
      resourceRole
      resourceHoursAllocated
      resourceQutil
      resourceAutil
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResourcePOC = /* GraphQL */ `
  subscription OnDeleteResourcePOC(
    $filter: ModelSubscriptionResourcePOCFilterInput
  ) {
    onDeleteResourcePOC(filter: $filter) {
      id
      resourceName
      resourceType
      resourceRole
      resourceHoursAllocated
      resourceQutil
      resourceAutil
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectPOC = /* GraphQL */ `
  subscription OnCreateProjectPOC(
    $filter: ModelSubscriptionProjectPOCFilterInput
  ) {
    onCreateProjectPOC(filter: $filter) {
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
export const onUpdateProjectPOC = /* GraphQL */ `
  subscription OnUpdateProjectPOC(
    $filter: ModelSubscriptionProjectPOCFilterInput
  ) {
    onUpdateProjectPOC(filter: $filter) {
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
export const onDeleteProjectPOC = /* GraphQL */ `
  subscription OnDeleteProjectPOC(
    $filter: ModelSubscriptionProjectPOCFilterInput
  ) {
    onDeleteProjectPOC(filter: $filter) {
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
export const onCreateProjectsResourcesPOC = /* GraphQL */ `
  subscription OnCreateProjectsResourcesPOC(
    $filter: ModelSubscriptionProjectsResourcesPOCFilterInput
  ) {
    onCreateProjectsResourcesPOC(filter: $filter) {
      id
      projectName_pr
      businessDomain_pr
      resourceName_pr
      resourceRole_pr
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectsResourcesPOC = /* GraphQL */ `
  subscription OnUpdateProjectsResourcesPOC(
    $filter: ModelSubscriptionProjectsResourcesPOCFilterInput
  ) {
    onUpdateProjectsResourcesPOC(filter: $filter) {
      id
      projectName_pr
      businessDomain_pr
      resourceName_pr
      resourceRole_pr
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectsResourcesPOC = /* GraphQL */ `
  subscription OnDeleteProjectsResourcesPOC(
    $filter: ModelSubscriptionProjectsResourcesPOCFilterInput
  ) {
    onDeleteProjectsResourcesPOC(filter: $filter) {
      id
      projectName_pr
      businessDomain_pr
      resourceName_pr
      resourceRole_pr
      createdAt
      updatedAt
    }
  }
`;
