/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      resourceName
      resourceType
      resourceRole
      createdAt
      updatedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
