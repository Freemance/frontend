import { TagType } from 'src/context/state';

export interface IAvailableTagsRes {
  filterTags: ITagConnection;
}

export interface ITagConnection {
  edges: ITagEdge[];
}

export interface ITagEdge {
  node: TagType;
}
