import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import ProfileLayout from '@layouts/ProfileLayout';
import { IProfileByIdInput, IProfileByIdRes } from 'src/lib/apollo/user/types';
import { PROFILE_BY_ID } from 'src/lib/apollo/user/queries';
import { useApolloClient } from 'src/lib/apollo/client';
import { ProfileType } from 'src/context/state';

interface IProfileById {
  profile: ProfileType;
}

export default function Profile({ profile }: IProfileById) {
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
  const id = parseInt(context.query.id.toString());

  try {
    const { data } = await useApolloClient().query<
      IProfileByIdRes,
      IProfileByIdInput
    >({
      query: PROFILE_BY_ID,
      variables: {
        id,
      },
    });

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        profile: data.profileById,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
