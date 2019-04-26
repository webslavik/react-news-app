import React from 'react';

import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const ITEM_HEIGHT = 48;

class cardMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}>
          <MenuItem 
              key={'edit'} 
              onClick={this.handleClose}>
              Edit
          </MenuItem>
          <MenuItem 
            key={'delete'} 
            onClick={this.handleClose}>
            Delete
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default cardMenu;
