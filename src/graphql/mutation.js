import { gql } from "@apollo/client";
const SENDJOB = gql`
  mutation sendJob(
    $company:String!
    $enCompany:String!
    $jobTitle:String!
    $cooprationType:String!
    $description:String!
    $category:String!
    $companyDescription:String!
    $experience:String!
    $slugs:String!,

  ) {
    createJob(
      data: {
        company: $company
        enCompany:$enCompany
        jobTitle: $jobTitle
        cooprationType: $cooprationType
        description:$description
        category: $category
        companyDescription: $companyDescription
        experience: $experience
        slugs:$slugs
      }
    ) {
      id
    }
  }
`;

export { SENDJOB };
