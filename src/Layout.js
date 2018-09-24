import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { manufacturing, infrastructure, welfare } from './AppMenuItemsList';
import AutoMobile from './AutoMobile';
import Electronics from './Electronics';
import Locations from './Locations';
import LocationForm from './LocationForm';
import { Route } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 730,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class PermanentDrawer extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>{manufacturing}</List>
        <Divider />
        <List>{infrastructure}</List>
        <Divider />
        <List>{welfare}</List>
        <Divider />
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                SunriseAP
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/" component={AutoMobile} />
            <Route exact path="/autoMobile" component={AutoMobile} />
            <Route exact path="/electronics" component={Electronics} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/data" component={LocationForm} />
          </main>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);