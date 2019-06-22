import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import gray from '@material-ui/core/colors/grey';
import blueGray from '@material-ui/core/colors/blueGrey';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(0)
  },

  avatarPrimaryColor: {
    backgroundColor: theme.palette.primary.main
  },

  avatarSecondaryColor: {
    backgroundColor: theme.palette.secondary.main
  },

  avatarTheme: {
    backgroundColor: '#303030'
  }
});

const colors = [
  {
    id: 'red',
    name: 'Red',
    import: red
  },
  {
    id: 'pink',
    name: 'Pink',
    import: pink
  },
  {
    id: 'purple',
    name: 'Purple',
    import: purple
  },
  {
    id: 'deep-purple',
    name: 'Deep Purple',
    import: deepPurple
  },
  {
    id: 'indigo',
    name: 'Indigo',
    import: indigo
  },
  {
    id: 'blue',
    name: 'Blue',
    import: blue
  },
  {
    id: 'light-blue',
    name: 'Light Blue',
    import: lightBlue
  },
  {
    id: 'cyan',
    name: 'Cyan',
    import: cyan
  },
  {
    id: 'teal',
    name: 'Teal',
    import: teal
  },
  {
    id: 'green',
    name: 'Green',
    import: green
  },
  {
    id: 'light-green',
    name: 'Light Green',
    import: lightGreen
  },
  {
    id: 'lime',
    name: 'Lime',
    import: lime
  },
  {
    id: 'yellow',
    name: 'Yellow',
    import: yellow
  },
  {
    id: 'amber',
    name: 'Amber',
    import: amber
  },
  {
    id: 'orange',
    name: 'Orange',
    import: orange
  },
  {
    id: 'deep-orange',
    name: 'Deep Orange',
    import: deepOrange
  },
  {
    id: 'brown',
    name: 'Brown',
    import: brown
  },
  {
    id: 'gray',
    name: 'Gray',
    import: gray
  },
  {
    id: 'blue-gray',
    name: 'Blue Gray',
    import: blueGray
  }
];

class AppearanceTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryColorMenu: {
        anchorEl: null
      },

      secondaryColorMenu: {
        anchorEl: null
      }
    };
  }

  openMenu = (id, event) => {
    if (!id || !event) {
      return;
    }

    const menu = this.state[id];

    if (!menu) {
      return;
    }

    const anchorEl = event.currentTarget;

    if (!anchorEl) {
      return;
    }

    menu.anchorEl = anchorEl;

    this.setState({ menu });
  };

  closeMenu = (id) => {
    if (!id) {
      return;
    }

    const menu = this.state[id];

    if (!menu) {
      return;
    }

    menu.anchorEl = null;

    this.setState({ menu });
  };

  render() {

    // Styling
    const { classes } = this.props;

    // Events
    const { onPrimaryColorMenuItemClick, onSecondaryColorMenuItemClick } = this.props;

    const { primaryColorMenu, secondaryColorMenu } = this.state;

    return (
      <React.Fragment>
        <DialogContent>
          <DialogContentText classes={{ root: classes.root }}>
            The app’s primary and secondary colors, and their variants, help create a color theme that is harmonious,
            ensures accessible text, and distinguishes UI elements and surfaces from one another.
          </DialogContentText>
        </DialogContent>

        <List disablePadding>
          <ListItem button onClick={(event) => this.openMenu('primaryColorMenu', event)}>
            <ListItemAvatar>
              <Avatar className={classes.avatarPrimaryColor} />
            </ListItemAvatar>

            <ListItemText
              primary="Primary color"
              secondary="Displayed most frequently across the app‘s screens and components"
            />
          </ListItem>

          <ListItem button onClick={(event) => this.openMenu('secondaryColorMenu', event)}>
            <ListItemAvatar>
              <Avatar className={classes.avatarSecondaryColor} />
            </ListItemAvatar>

            <ListItemText
              primary="Secondary color"
              secondary="Provides more ways to accent and distinguish the app"
            />
          </ListItem>

          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatarTheme} />
            </ListItemAvatar>

            <ListItemText
              primary="Dark theme"
              secondary="Displays dark surfaces across the majority of the app"
            />

            <ListItemSecondaryAction>
              <Hidden xsDown>
                <Checkbox />
              </Hidden>

              <Hidden smUp>
                <Switch />
              </Hidden>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <Menu anchorEl={primaryColorMenu.anchorEl} open={Boolean(primaryColorMenu.anchorEl)} onClose={() => this.closeMenu('primaryColorMenu')}>
          {colors.map((color) => {
            return (
              <MenuItem key={color.id} value={color.id} onClick={() => onPrimaryColorMenuItemClick(color.import)}>
                {color.name}
              </MenuItem>
            );
          })}
        </Menu>

        <Menu anchorEl={secondaryColorMenu.anchorEl} open={Boolean(secondaryColorMenu.anchorEl)} onClose={() => this.closeMenu('secondaryColorMenu')}>
          {colors.map((color) => {
            return (
              <MenuItem key={color.id} value={color.id} onClick={() => onSecondaryColorMenuItemClick(color.import)}>
                {color.name}
              </MenuItem>
            );
          })}
        </Menu>
      </React.Fragment>
    );
  }
}

AppearanceTab.propTypes = {

  // Styling
  classes: PropTypes.object.isRequired,

  // Events
  onPrimaryColorMenuItemClick: PropTypes.func.isRequired,
  onSecondaryColorMenuItemClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AppearanceTab);