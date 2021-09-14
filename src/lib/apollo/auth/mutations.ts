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
          firstName
          lastName
          slykUser
          jobTitle
          bio
          phone
          city
          country
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
