import { gql } from "@apollo/client";

const getJobs = gql`
query MyQuery {
  jobs {
    category
    citys
    company
    companyDescription
    cooprationType
    description{
      html
    }
    enCompany
    experience
    jobTitle
    salary
    id
    slugs
  }
}
`


const getJobData = gql`
query getJobData($slugs: String!)  {
  job(where: {slugs: $slugs }) {
    category
    company
    id
    jobTitle
    citys
    companyDescription
    cooprationType
    description{
      html
    }
    enCompany
    experience
    salary
  }
}
`

export {getJobs,getJobData}
