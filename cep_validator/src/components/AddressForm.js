import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


import { connect } from 'react-redux';

import changeCity from '../cepCycle/fieldActions'
import {BindActionCreators, bindActionCreators} from 'redux'

  /* 
  function toogleLesson(module, lesson) {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
    }
  }
 */



class AddressForm extends Component{
    render(){
      return (
        <div>
          <Typography variant="h6" gutterBottom>
            Coloque seus Dados
          </Typography>
  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="cidade"
                name="cidade"
                label="Cidade"
                fullWidth
                onChange ={this.props.changeCity}                              
              />                          
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeCity},dispatch)
}


export default connect(null,mapDispatchToProps)(AddressForm);
