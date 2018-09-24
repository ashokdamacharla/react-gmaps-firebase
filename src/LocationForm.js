import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { db } from './Firebase.js'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
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
    button: {
        margin: theme.spacing.unit,
    }
});

class LocationForm extends Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = () => {
        //e.preventDefault();
        db.collection('sunriseap').add({lng: this.state.langittude, lat: this.state.lattitude, name: this.state.name, type: this.state.locType})
        console.log('langittude:' + this.state.langittude);
        console.log('lattitude:'+this.state.lattitude);
        console.log('name:'+ this.state.name);

        //db.collection('sunriseap').add({lng: '111', lat: '11', name: 'test1'});
    }

    componentWillMount() {
        this.setState({
            lng: '',
            lat: '',
            name: '',
            locType: ''
        });
    }

    render() {
        const { classes } = this.props;
        return(
            <form noValidate autoComplete="off" onSubmit={e => this.handleSubmit(e)}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline">Add Location</Typography>
                        <TextField 
                            id="langittude"
                            label="Langittude"
                            value={this.state.langittude}
                            onChange={this.handleChange('langittude')}
                            margin="normal"
                        />
                        <TextField 
                            id="lattitude" 
                            label="Lattitude"
                            value={this.state.lattitude}
                            onChange={this.handleChange('lattitude')}
                            margin="normal"
                        />
                        <TextField 
                            id="name" 
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <TextField 
                            id="locType" 
                            label="Location Type"
                            value={this.state.locType}
                            onChange={this.handleChange('locType')}
                            margin="normal"
                        />
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small" className={classes.button} onClick={this.handleSubmit}>Save</Button>
                </CardActions>
            </Card>
            </form>
        );
    }
}

LocationForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationForm);