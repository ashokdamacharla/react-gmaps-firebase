import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class DataManager extends Component {
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    componentWillMount() {
        this.setState({
            lng: '',
            lat: '',
            name: ''
        });
    }

    render() {
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <TextField 
                            id="lan" 
                            label="Lan"
                            value={this.state.lan}
                            onChange={this.handleChange('lan')}
                            margin="normal"
                        />
                        <TextField 
                            id="lat" 
                            label="Lattitude"
                            value={this.state.lat}
                            onChange={this.handleChange('lat')}
                            margin="normal"
                        />
                        <TextField 
                            id="name" 
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </form>
                </CardContent>
                <CardActions>
                    <Button size="small">Save</Button>
                </CardActions>
            </Card>
        );
    }
}

DataManager.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataManager);