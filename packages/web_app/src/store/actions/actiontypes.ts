import {GraphReducerName, CanvasReducerName} from './actionnames';

// Graph Reducer Strings
export const MovedBlockActionType = `@@${GraphReducerName}/MOVED_BLOCK`;
export const ResizedBlockActionType = `@@${GraphReducerName}/RESIZED_BLOCK`;
export const SelectedObjectActionType = `@@${GraphReducerName}/SELECTED_BLOCK`;
export const DeselectedObjectActionType = `@@${GraphReducerName}/DESELECTED_BLOCK`;
export const AddEdgeActionType = `@@${GraphReducerName}/ADD_EDGE`;
export const MovedEdgeActionType = `@@${GraphReducerName}/MOVED_EDGE`;

// Canvas Reducer Strings
export const TranslatedCanvasActionType = `@@${CanvasReducerName}/TRANSLATED_CANVAS`;
export const ZoomedCanvasActionType     = `@@${CanvasReducerName}/ZOOMED_CANVAS`;