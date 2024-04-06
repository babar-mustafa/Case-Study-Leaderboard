export const sorting = (data: DataUserList) => {
  let sorted: DataUserList = {};
  Object.keys(data)
    .sort(function (a: string, b: string) {
      if (data[a].bananas < data[b].bananas) {
        return 1;
      }
      if (data[a].bananas > data[b].bananas) {
        return -1;
      }
      return 0;
    })
    .forEach(function (key) {
      sorted[key] = data[key];
    });

  return sorted;
};

export const sortAlphabetically = (data: DataUserList) => {
  let sorted: DataUserList = {};
  Object.keys(data)
    .sort(function (a: string, b: string) {
      if (data[a].name < data[b].name) {
        return -1;
      }
      if (data[a].name > data[b].name) {
        return 1;
      }
      return 0;
    })
    .forEach(function (key) {
      sorted[key] = data[key];
    });

  return sorted;
};
