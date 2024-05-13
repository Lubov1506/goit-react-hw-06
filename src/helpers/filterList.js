export const filterList = (list, filterValue) => {
  return list.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};
