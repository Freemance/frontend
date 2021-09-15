import React, { useState, useEffect } from 'react';
// Style
import { useDirectoryStyle } from './Directory.style';
import {
  // Button,
  TextField,
  Container,
  CircularProgress,
  Typography,
  MenuItem,
} from '@material-ui/core';
import { Select } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// Components
import CardDirectory from '@components/atoms/CardDirectory/CardDirectory';
// Apollo
import { getAllFreemancers } from 'src/lib/apollo/query/GetAllFreemancers';
import { useQuery } from '@apollo/client';
import NavBar from '../NavBar';
import { getAllTags } from 'src/lib/apollo/query/GetAllTags';

export const Directory = () => {
  const [search, setSearch] = useState('');
  const [selectedtag, setSelectedTag] = useState(0);
  const [tags, setTags] = useState(null);
  const { data, loading, error } = useQuery(getAllFreemancers(search), {
    variables: { tagid: selectedtag },
  });

  const classes = useDirectoryStyle();
  const [freelancers, setFreelancers] = useState(undefined);

  useEffect(() => {
    if (data) {
      setFreelancers(data.profileFilter.edges);
    }
  }, [data]);
  const { data: taggs } = useQuery(getAllTags);

  useEffect(() => {
    if (taggs) {
      setTags(taggs.filterTags.edges);
    }
  }, [taggs]);
  function SelectTag(e: any) {
    const valor: any = e.target.value;
    setSelectedTag(valor);
  }
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <div className={classes.root}>
          <form className={classes.form}>
            <Container maxWidth="sm">
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                name="search"
                label="Search"
                type="search"
                id="search-freelancer"
                placeholder="Find a freemancer"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className={classes.tagfilter}>
                <Select
                  autoWidth={true}
                  id="tags"
                  fullWidth
                  defaultValue="SKills"
                  value={selectedtag}
                  onChange={SelectTag}
                  className={classes.menu}
                >
                  <MenuItem value={0}>All Professions</MenuItem>
                  {tags &&
                    tags.map((profesion: any) => (
                      <MenuItem
                        key={profesion.node.id}
                        value={profesion.node.id}
                      >
                        {profesion.node.name}
                      </MenuItem>
                    ))}
                </Select>
              </div>

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
            </Container>
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
