/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResourcePOC = /* GraphQL */ `
  query GetResourcePOC($id: ID!) {
    getResourcePOC(id: $id) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const listResourcePOCS = /* GraphQL */ `
  query ListResourcePOCS(
    $filter: ModelResourcePOCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResourcePOCS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resourceName
        resourceType
        resourceRole
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectPOC = /* GraphQL */ `
  query GetProjectPOC($id: ID!) {
    getProjectPOC(id: $id) {
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
export const listProjectPOCS = /* GraphQL */ `
  query ListProjectPOCS(
    $filter: ModelProjectPOCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectPOCS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProjectsResourcesPOC = /* GraphQL */ `
  query GetProjectsResourcesPOC($id: ID!) {
    getProjectsResourcesPOC(id: $id) {
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
export const listProjectsResourcesPOCS = /* GraphQL */ `
  query ListProjectsResourcesPOCS(
    $filter: ModelProjectsResourcesPOCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectsResourcesPOCS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectName_pr
        businessDomain_pr
        resourceName_pr
        resourceRole_pr
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
