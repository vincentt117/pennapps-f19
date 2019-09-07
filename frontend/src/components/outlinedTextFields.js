import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

class OutlinedTextFields extends React.Component {

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Send data here
      this.props.parentCallback({x: 6, y: 40});
      console.log(e.target.value);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="What's Happening?"
          style={{ margin: 8 }}
          placeholder="Enter your news headline"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyDown}
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);