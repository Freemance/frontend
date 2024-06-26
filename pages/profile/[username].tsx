import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NextSeo } from 'next-seo';
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
  const router = useRouter();
  const { username } = router.query;
  return (
    <React.Fragment>
      <Head>
        <title>{`Freemance | ${profile && profile.firstName} ${
          profile && profile.lastName
        } - ${profile && profile.jobTitle}`}</title>
        <meta
          name="description"
          content={(profile && profile.bio) || 'Freemancer Profile'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: `${profile && profile.firstName} ${
            profile && profile.lastName
          } | ${profile && profile.jobTitle}`,
          description: profile && profile.bio,
          url: `${process.env.SITE_URL}/${username || ''}`,
          type: 'profile',
          profile: {
            firstName: profile && profile.firstName,
            lastName: profile && profile.lastName,
            username: username as string,
            gender: '',
          },
          images: [
            {
              url:
                profile && profile.avatar
                  ? `${process.env.IMAGE_LINK}600X600/${profile.avatar}`
                  : `${process.env.SITE_URL}/mockup.webp`,
              width: 600,
              height: 600,
              alt: `${profile && profile.firstName} ${
                profile && profile.lastName
              }`,
            },
          ],
        }}
      />
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
