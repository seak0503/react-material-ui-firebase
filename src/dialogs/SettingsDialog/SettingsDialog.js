import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Hidden from '@material-ui/core/Hidden';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaletteIcon from '@material-ui/icons/Palette';
import LinkIcon from '@material-ui/icons/Link';
import SecurityIcon from '@material-ui/icons/Security';

import SwipeableViews from 'react-swipeable-views';

import AppearanceTab from '../../tabs/AppearanceTab/AppearanceTab';

const tabs = [
  {
    key: 'account',
    icon: <AccountCircleIcon />,
    label: 'Account'
  },

  {
    key: 'appearance',
    icon: <PaletteIcon />,
    label: 'Appearance'
  },

  {
    key: 'connections',
    icon: <LinkIcon />,
    label: 'Connections'
  },

  {
    key: 'security',
    icon: <SecurityIcon />,
    label: 'Security'
  }
];

class SettingsDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 1
    };
  }

  handleTabChange = (event, value) => {
    this.setState({
      selectedTab: value
    });
  };

  handleIndexChange = (index) => {
    this.setState({
      selectedTab: index
    });
  };

  render() {

    // Dialog Properties
    const { dialogProps } = this.props;

    // Custom Events
    const { onPrimaryColorMenuItemClick, onSecondaryColorMenuItemClick } = this.props;

    const { selectedTab } = this.state;

    return (
      <Dialog {...dialogProps}>
        <DialogTitle>
          Settings
        </DialogTitle>

        <Tabs indicatorColor="primary" textColor="primary" value={selectedTab} onChange={this.handleTabChange}>
          {tabs.map((tab) => {
            return (
              <Tab key={tab.key} icon={tab.icon} label={tab.label} />
            );
          })}
        </Tabs>

        <Hidden xsDown>
          {selectedTab === 1 &&
            <AppearanceTab
              onPrimaryColorMenuItemClick={onPrimaryColorMenuItemClick}
              onSecondaryColorMenuItemClick={onSecondaryColorMenuItemClick}
            />
          }
        </Hidden>

        <Hidden smUp>
          <SwipeableViews index={selectedTab} onChangeIndex={this.handleIndexChange}>
            <AppearanceTab />
          </SwipeableViews>
        </Hidden>
      </Dialog>
    );
  }
}

SettingsDialog.propTypes = {

  // Dialog Properties
  dialogProps: PropTypes.object.isRequired,

  // Custom Events
  onPrimaryColorMenuItemClick: PropTypes.func.isRequired,
  onSecondaryColorMenuItemClick: PropTypes.func.isRequired
};

export default SettingsDialog;