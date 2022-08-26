import { gql } from "@apollo/client";
const SENDJOB = gql`
  mutation sendJob(
    $company: String!
    $enCompany: String!
    $jobTitle: String!
    $category: String!
    $experience: String!
    $cooprationType: String!
    $description: String!
    $companyDescription: String!
    $slugs: String!
    $citys: String!
    $degree: String!
    $militaryService: String!
    $salary: String!
    $sex: String!
    $technology: String!
  ) {
    createJob(
      data: {
        company: $company
        enCompany: $enCompany
        jobTitle: $jobTitle
        experience: $experience
        category: $category
        cooprationType: $cooprationType
        description: $description
        companyDescription: $companyDescription
        slugs: $slugs
        citys: $citys
        degree: $degree
        militaryService: $militaryService
        salary: $salary
        sex: $sex
        technology: $technology
      }
    ) {
      id
    }
  }
`;

export { SENDJOB };
