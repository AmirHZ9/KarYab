import { gql } from "@apollo/client";
const SENDJOB = gql`
  mutation sendJob(
    $company:String!
    $jobTitle:String!
    $cooprationType:String!
    $description:String!
    $category:String!
    $companyDescription:String!
    $slugs:String!
  ) {
    createJob(
      data: {
        company: $company
        jobTitle: $jobTitle
        cooprationType: $cooprationType
        description:$description
        category: $category
        companyDescription: $companyDescription
        slugs:$slugs
      }
    ) {
      id
    }
  }
`;

export { SENDJOB };
