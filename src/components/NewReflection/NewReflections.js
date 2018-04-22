import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import './NewReflections.css'
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';


const styles = {
    customWidth: {
      width: 150,
    },
  };

class NewReflections extends Component {
    state = {
        value: 1,
      };
    
    handleChange = (event, index, value) => this.setState({value});

    render(props){
        return (
            <div className="cardHolder">
                <h2>
                    Add New Reflections
                </h2>
                <Card className="inputCard">
                {/* <SelectField
                    floatingLabelText="Frequency"
                    value={this.state.value}
                    onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField> */}
                <TextField
                    label="Enter Your Memory"
                    fullWidth={true}
                    rows={2}
                    rowsMax={4}
                    {...props}
                />

                <TextField
                    label="Enter Your Memory"
                    fullWidth={true}
                    rows={2}
                    rowsMax={4}
                    {...props}
                />
                </Card>
            </div>
        )
    }
}

export default NewReflections;