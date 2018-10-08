import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><a href="/" ><Typography>Home</Typography></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href="/landing"><Typography>Create Task</Typography></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href="/dashboard"><Typography>Dashboard</Typography></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href="/chart"><Typography>Productivity</Typography></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href="/about"><Typography>About</Typography></a></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;