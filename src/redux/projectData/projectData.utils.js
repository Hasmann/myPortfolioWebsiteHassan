export const fetchData = (allData, payload) => {
  return payload === null
    ? allData
    : allData.filter((el) => {
        return el.type === payload;
      });
};
