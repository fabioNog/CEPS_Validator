import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


import {connect} from 'react-redux';


function toogleLesson(module,lesson){
    return{
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }
}

const AddressForm = ({ modules, dispatch })  => (
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
            autoComplete="cidade-level2"
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
export default connect(state => ({modules: state.modules}))(AddressForm);
