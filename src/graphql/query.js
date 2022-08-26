import { gql } from "@apollo/client";

const getJobs = gql`
query MyQuery {
  jobs {
    category
    citys
    company
    cooprationType
    jobTitle
    id
    slugs
  }
}
`


const getJobData = gql`
query getJobData($id: ID!)  {
  job(where: {id: $id }) {
   category
    company
    id
    jobTitle
    citys
    companyDescription
    cooprationType
    description
    enCompany
    experience
    salary
    sex
    militaryService
    technology
    degree
  }
}
`

export {getJobs,getJobData}
