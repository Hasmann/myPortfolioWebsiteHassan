import projectDataTypes from "./projectData.types";
export const fetchDataAction = (dataType) => {
  return {
    type: projectDataTypes.FETCHALLDATA,
    payload: dataType,
  };
};
