import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { useProfileLayoutStyle } from './ProfileLayout.style';
import { ProfileContext } from './ProfileLayout.context';
import ProfileHeader from '@components/organisms/ProfileHeader';
import ProfileBody from '@components/organisms/ProfileBody';
import ProfileAppBar from '@components/molecules/ProfileAppBar';
import { IProfileLayout } from './types';
import { IMe, ME } from 'src/lib/apollo/user';
import { ActionType, useGlobalContext } from 'src/context';
import LoadingIndicatorCentered from '@components/atoms/LoadingIndicatorCentered';

const ProfileLayout = ({ fromLogin, profile }: IProfileLayout) => {
  const classes = useProfileLayoutStyle();

  const isUser: boolean = profile ? false : true;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const router = useRouter();

  const { state, dispatch } = useGlobalContext();

  const [me, { loading, error, data }] = useLazyQuery<IMe>(ME, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (state.user === null && isUser) {
      me();
    }
    if (data) {
      dispatch({
        type: ActionType.SetUser,
        payload: data.me,
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      router.replace('/login');
    }
  }, [error]);

  if ((loading || state.user === null) && isUser)
    return <LoadingIndicatorCentered />;

  return (
    <Container className={classes.contain} maxWidth="md">
      <ProfileContext.Provider value={{ profile, isUser, isEdit, setIsEdit }}>
        <ProfileAppBar />
        <ProfileHeader />
        <ProfileBody />
      </ProfileContext.Provider>
    </Container>
  );
};

export default ProfileLayout;
