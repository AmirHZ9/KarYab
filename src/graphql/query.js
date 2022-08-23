import gql from "graphql-tag";

const getJobs = gql`
query MyQuery {
  jobs {
    id
    jobTitle
    slug
    company
    advantages
    workDays
    category
  }
}
`


const getJobData = gql`
query getJobData($slug: String!)  {
  job(where: {slug: $slug }) {
    advantages
    category
    company
    id
    jobTitle
  }
}
`

export {getJobs,getJobData}
