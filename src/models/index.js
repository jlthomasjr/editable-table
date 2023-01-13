// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ResourcePOC, ProjectPOC, ProjectsResourcesPOC } = initSchema(schema);

export {
  ResourcePOC,
  ProjectPOC,
  ProjectsResourcesPOC
};