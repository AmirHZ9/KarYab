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

export {getJobs}
