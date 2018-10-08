import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header';
import SimpleMenu from './Menu';

const styles = {
  root: {
    flexGrow: 1,
    //backgroundColor: "#000000", theme: 'dark',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  color: {
    backgroundColor: "#000000", theme: 'dark',
  },
};

function AppBarTest(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar>
          <SimpleMenu />
          <Typography variant="title" color="inherit" className={classes.flex}>
            BlackList
          </Typography>
          <Header />
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarTest);