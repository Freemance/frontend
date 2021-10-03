import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import ProfileLayout from '@layouts/ProfileLayout';
import {
  IProfileByUsernameInput,
  IProfileByUsernameRes,
} from 'src/lib/apollo/user/types';
import { PROFILE_BY_USERNAME } from 'src/lib/apollo/user/queries';
import { useApolloClient } from 'src/lib/apollo/client';
import { ProfileType } from 'src/context/state';

interface IProfileByUsername {
  profile: ProfileType;
}

export default function Profile({ profile }: IProfileByUsername) {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Profile</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout profile={profile} />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const username = context.query.username.toString();

  try {
    const { data } = await useApolloClient().query<
      IProfileByUsernameRes,
      IProfileByUsernameInput
    >({
      query: PROFILE_BY_USERNAME,
      fetchPolicy: 'no-cache',
      variables: {
        username,
      },
    });

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        profile: data.profileByUsername,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
