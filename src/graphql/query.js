import { gql } from "@apollo/client";

const getJobs = gql`
query MyQuery {
  jobs {
    id
    jobTitle
    slugs
    company
    advantages
    workDays
    category
  }
}
`


const getJobData = gql`
query getJobData($slugs: String!)  {
  job(where: {slugs: $slugs }) {
    advantages
    category
    company
    id
    jobTitle
  }
}
`

export {getJobs,getJobData}
