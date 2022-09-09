const markJob = (job) => {
  return {
    type: "mark_job",
    payload: job,
  };
};
const removeMark = (job) => {
  return {
    type: "remove_mark",
    payload: job,
  };
};

export { markJob, removeMark };
