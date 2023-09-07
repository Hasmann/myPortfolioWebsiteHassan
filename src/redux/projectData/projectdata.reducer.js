import projectData from "./projectData.actualData";
import projectDataTypes from "./projectData.types";
import { fetchData } from "./projectData.utils";
const initialState = {
  projectData: projectData,
  fetchedData: [],
};

const projectDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case projectDataTypes.FETCHALLDATA:
      return {
        ...state,
        fetchedData: fetchData(state.projectData, action.payload),
      };
    default:
      return state;
  }
};

export default projectDataReducer;
