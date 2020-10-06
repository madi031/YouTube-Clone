import {
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

import styles from '../styles/Header.module.css';

const Header = props => {
  const [searchText, setSearchText] = useState('');

  let goToHome = () => {
    props.search('YouTube');
  };

  let handleChange = e => {
    setSearchText(e.target.value);
  }

  let handleEnter = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  let handleSubmit = () => {
    props.search(searchText);
  }

  return (
    <Paper
      className={styles.container}
      elevation={2}
    >
      <div
        style={{ cursor: 'pointer', textAlign: 'center' }}
        onClick={goToHome}
      >
        <Typography
          variant='h5'
        >
          YouTube
        </Typography>
        <Typography
          variant='caption'
        >
          Clone
        </Typography>
      </div>
      <div
        className={styles.searchContainer}
      >
        <TextField
          className={styles.search}
          placeholder='Search'
          value={searchText}
          variant='outlined'
          onChange={e => handleChange(e)}
          onKeyDown={e => handleEnter(e)}
        />
        <IconButton
          aria-label='search'
          className={styles.searchIcon}
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Header;
