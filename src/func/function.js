const isCardOpen = (url, state) => {
  const id = url.split("/")[3];
  const result = state.findIndex((item) => item.id == id);
  if (state[result]) {
    return state[result].id;
  }
};

export { isCardOpen };
