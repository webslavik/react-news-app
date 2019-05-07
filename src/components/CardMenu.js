import React from 'react';
import { connect } from 'react-redux';
import { deleteNews } from '../store/actions';

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
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onEdit = () => {
    console.log('Edit news!');
    this.setState({ anchorEl: null });
  }
  
  onDelete = () => {
    this.props.onDeleteNews(this.props.newsId);
    this.setState({ anchorEl: null });
  }

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

const mapDispatchToProps = dispatch => ({
  onDeleteNews: id => dispatch(deleteNews(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CardMenu);
