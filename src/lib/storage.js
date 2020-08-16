const format = (item) => {
  return {
    created: Date.now(),
    value: item,
  };
};

const setItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(format(value)));
};

const getItem = (item) => {
  if (localStorage.getItem(item)) {
    return JSON.parse(localStorage.getItem(item)).value;
  }

  return null;
};

export default {
  setItem,
  getItem,
};
