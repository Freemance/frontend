import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import { useProfileLayoutStyle } from './ProfileLayout.style';
import { ProfileContext } from './ProfileLayout.context';
import ProfileHeader from '@components/organisms/ProfileHeader';
import ProfileBody from '@components/organisms/ProfileBody';
import ProfileEditBar from '@components/molecules/ProfileEditBar';
import { IProfileLayout } from './types';
import { useLazyQuery } from '@apollo/client';
import { IMe, ME } from 'src/lib/apollo/user';
import { ActionType, useGlobalContext } from 'src/context';
import { useRouter } from 'next/router';
import LoadingIndicatorCentered from '@components/atoms/LoadingIndicatorCentered';

const ProfileLayout = ({ fromLogin }: IProfileLayout) => {
  const classes = useProfileLayoutStyle();

  const isUser: boolean = true;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const router = useRouter();

  const { state, dispatch } = useGlobalContext();

  const [me, { loading, error, data }] = useLazyQuery<IMe>(ME);

  useEffect(() => {
    if ((!fromLogin || state.user === null) && isUser) {
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

  if (loading || state.user === null) return <LoadingIndicatorCentered />;

  return (
    <Container
      className={isEdit ? classes.containEdit : classes.contain}
      maxWidth="md"
    >
      <ProfileContext.Provider value={{ isUser, isEdit, setIsEdit }}>
        {isEdit && <ProfileEditBar />}
        <ProfileHeader />
        <ProfileBody />
      </ProfileContext.Provider>
    </Container>
  );
};

export default ProfileLayout;
