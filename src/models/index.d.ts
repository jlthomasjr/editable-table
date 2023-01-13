import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerResourcePOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResourcePOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resourceName: string;
  readonly resourceType?: string | null;
  readonly resourceRole?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResourcePOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResourcePOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resourceName: string;
  readonly resourceType?: string | null;
  readonly resourceRole?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ResourcePOC = LazyLoading extends LazyLoadingDisabled ? EagerResourcePOC : LazyResourcePOC

export declare const ResourcePOC: (new (init: ModelInit<ResourcePOC>) => ResourcePOC) & {
  copyOf(source: ResourcePOC, mutator: (draft: MutableModel<ResourcePOC>) => MutableModel<ResourcePOC> | void): ResourcePOC;
}

type EagerProjectPOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectPOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName: string;
  readonly projectDescription?: string | null;
  readonly businessDomain?: string | null;
  readonly projectPriority?: string | null;
  readonly engFTEneed?: number | null;
  readonly intengFTEneed?: number | null;
  readonly bsaFTEneed?: number | null;
  readonly pmFTEneed?: number | null;
  readonly tpmFTEneed?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectPOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectPOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName: string;
  readonly projectDescription?: string | null;
  readonly businessDomain?: string | null;
  readonly projectPriority?: string | null;
  readonly engFTEneed?: number | null;
  readonly intengFTEneed?: number | null;
  readonly bsaFTEneed?: number | null;
  readonly pmFTEneed?: number | null;
  readonly tpmFTEneed?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectPOC = LazyLoading extends LazyLoadingDisabled ? EagerProjectPOC : LazyProjectPOC

export declare const ProjectPOC: (new (init: ModelInit<ProjectPOC>) => ProjectPOC) & {
  copyOf(source: ProjectPOC, mutator: (draft: MutableModel<ProjectPOC>) => MutableModel<ProjectPOC> | void): ProjectPOC;
}

type EagerProjectsResourcesPOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectsResourcesPOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName: string;
  readonly businessDomain?: string | null;
  readonly resourceName: string;
  readonly resourceRole?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectsResourcesPOC = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectsResourcesPOC, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName: string;
  readonly businessDomain?: string | null;
  readonly resourceName: string;
  readonly resourceRole?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectsResourcesPOC = LazyLoading extends LazyLoadingDisabled ? EagerProjectsResourcesPOC : LazyProjectsResourcesPOC

export declare const ProjectsResourcesPOC: (new (init: ModelInit<ProjectsResourcesPOC>) => ProjectsResourcesPOC) & {
  copyOf(source: ProjectsResourcesPOC, mutator: (draft: MutableModel<ProjectsResourcesPOC>) => MutableModel<ProjectsResourcesPOC> | void): ProjectsResourcesPOC;
}