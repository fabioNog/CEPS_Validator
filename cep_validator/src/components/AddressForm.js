import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


import { connect } from 'react-redux';


function toogleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson
  }
}

class AddressForm extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Coloque seus Dados
        </Typography>

                    

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div >
              <TextField
                required
                id="cidade"
                name="cidade"
                label={this.props.value}
                fullWidth                              
                />
            </div>              
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cep"
              name="cep"
              label="Cep"
              fullWidth
              autoComplete="shipping postal-code"
            
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    value: state.field.value
  } 
}


export default connect(mapStateToProps)(AddressForm);
