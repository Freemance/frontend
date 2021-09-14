import React, { useState, useEffect } from 'react';
// Style
import { useDirectoryStyle } from './Directory.style';
import {
  Button,
  TextField,
  Container,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// Components
import CardDirectory from '@components/atoms/CardDirectory/CardDirectory';
// Apollo
import { getAllFreemancers } from 'src/lib/apollo/query/GetAllFreemancers';
import { useQuery } from '@apollo/client';
import NavBar from '../NavBar';

export const Directory = () => {
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery(getAllFreemancers(search));
  const classes = useDirectoryStyle();
  const [freelancers, setFreelancers] = useState(undefined);
  useEffect(() => {
    if (data) {
      setFreelancers(data.profileFilter.edges);
    }
  }, [data]);

  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <div className={classes.root}>
          <form className={classes.form}>
            <TextField
              color="primary"
              variant="outlined"
              size="small"
              name="search"
              label="Search"
              type="search"
              id="search-freelancer"
              placeholder="Find a freemancer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <label htmlFor="search-freelancer">
              <Button
                disabled={search === ''}
                type="submit"
                variant="contained"
                className={classes.button}
              >
                <SearchIcon />
              </Button>
            </label> */}
          </form>
          {error ? (
            <Typography variant="h1" className={classes.errordata}>
              Lost connection...
            </Typography>
          ) : loading ? (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          ) : (
            freelancers && <CardDirectory freelancers={freelancers} />
          )}
        </div>
      </Container>
    </>
  );
};
