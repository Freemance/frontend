import React, { useState, useEffect } from 'react';
// Style
import { useDirectoryStyle } from './Directory.style';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// Components
import CardDirectory from '@components/atoms/CardDirectory/CardDirectory';
// Apollo
import { GetAllFreemancers } from 'src/lib/apollo/query/GetAllFreemancers';
import { useQuery } from '@apollo/client';
import NavBar from '../NavBar';

export const Directory = () => {
  const { data, loading, error } = useQuery(GetAllFreemancers);
  const classes = useDirectoryStyle();
  const [freelancers, setFreelancers] = useState(undefined);
  useEffect(() => {
    if (data) {
      setFreelancers(data.ProfileFilter.edges);
    }
  }, [data]);

  const [search, setSearch] = useState('');
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <div className={classes.root}>
          <form className={classes.form}>
            <TextField
              color="primary"
              margin="normal"
              variant="filled"
              name="search"
              label="Search"
              type="search"
              id="search-freelancer"
              placeholder="Find a freemancer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor="search-freelancer">
              <Button
                disabled={search === ''}
                type="submit"
                variant="contained"
                className={classes.button}
              >
                <SearchIcon />
              </Button>
            </label>
          </form>
          {freelancers && <CardDirectory freelancers={freelancers} />}
        </div>
      </Container>
    </>
  );
};
