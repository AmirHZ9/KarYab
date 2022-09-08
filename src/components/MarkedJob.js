import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./shared/JobCard";

export default function MarkedJob() {
  const jobs = useSelector((state) => state.markJobState);
  console.log(jobs.markJob);
  return (
    <div>
      {jobs.markJob.map((job) => (
        <JobCard jobs={job} key={job.id} />
      ))}
    </div>
  );
}
