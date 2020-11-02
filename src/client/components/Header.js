import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      color: '#fff'
    }
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" className={classes.title}>
            Williams Sonoma
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
