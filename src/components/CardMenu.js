import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const ITEM_HEIGHT = 48;

class CardMenu extends React.Component {
  state = {
    anchorEl: null,
    toEdit: false,
    toHome: false,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onEdit = () => {
    this.setState({ anchorEl: null, toEdit: true });
  }
  
  onDelete = () => {
    this.setState({ anchorEl: null, toHome: true });
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (this.state.toEdit === true) {
      return <Redirect to={{
        pathname: `/news/${this.props.newsId}/edit`,
      }}/>
    }

    if (this.state.toHome === true) {
      return <Redirect to='/news' />
    }

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
              onClick={this.onEdit}>
              Edit
          </MenuItem>
          <MenuItem 
            key={'delete'} 
            onClick={this.onDelete}>
            Delete
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default connect()(CardMenu);
