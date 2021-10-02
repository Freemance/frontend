import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      accessToken
      refreshToken
      user {
        id
        email
        role
        active
        profile {
          avatar
          firstName
          lastName
          slykUser
          tag {
            id
            name
          }
          jobTitle
          bio
          phone
          city
          country
          portfolioItem {
            id
            screenshts
            proyect
            description
            startDate
            endDate
          }
          employmentHistory {
            id
            name
            company
            startDate
            endDate
          }
          courses {
            id
            course
            institution
            startDate
            endDate
          }
          skills {
            id
            name
          }
        }
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $email: String!
    $password: String!
    $lastName: String!
    $firstName: String!
    $slykUrl: String!
    $username: String!
  ) {
    signup(
      data: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
        slykUser: $slykUrl
        username: $username
      }
    )
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refreshToken($token: String!) {
    refreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`;

export const ACTIVATE_USER = gql`
  mutation activateuser($token: String!) {
    verifyEmail(token: $token) {
      accessToken
      refreshToken
    }
  }
`;
export const RESET_PASSWORD = gql`
  mutation resetpassword($email: String!) {
    recoveryPassword(email: $email)
  }
`;

export const NEW_PASSWORD = gql`
  mutation newpassword($password: String!, $token: String!) {
    resetPassword(data: { password: $password, token: $token }) {
      accessToken
      refreshToken
    }
  }
`;
