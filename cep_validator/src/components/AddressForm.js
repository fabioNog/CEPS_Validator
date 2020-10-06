import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


import { connect } from 'react-redux';

  /* 
  function toogleLesson(module, lesson) {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
    }
  }
 */
function AddressForm (){

  const [cityStep, setCityStep] = React.useState('');
  const [cepStep, setCepStep] = React.useState('');


  const handleInputCityChange = e => {    
    const auxValues = { ...cityStep };
    auxValues[e.target.cityStep] = e.target.value;
    setCityStep(auxValues);      
  }

  const handleInputCepChange = e => {    
    const auxValues = { ...cepStep };
    auxValues[e.target.cepStep] = e.target.value;
    setCepStep(auxValues);      
  }
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
              autoComplete="cidade-level2"
              onChange={handleInputCityChange}
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
              onChange={handleInputCepChange}
            />
          </Grid>
        </Grid>
      </div>
    )
}

export default connect(state => ({ modules: state.modules }))(AddressForm);
