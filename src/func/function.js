const isCardOpen = (url, state) => {
  const id = url.split("/")[3];
  const result = state.findIndex((item) => item.id == id);
  if (state[result]) {
    return state[result].id;
  }
};
const isInMarked = (state, job) => {
  const index = state.findIndex((item) => item.id === job.id);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};
export { isCardOpen, isInMarked };
