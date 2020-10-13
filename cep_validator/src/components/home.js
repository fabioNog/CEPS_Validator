import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';

import { Link } from 'react-router-dom'


/* Import my actions*/
import { addTodo } from '../cepCycle/actions/todoActions'
import {inc,dec,stepChanged} from '../cepCycle/actions/activeActions'

import { bindActionCreators } from 'redux'



import { BindActionCreator } from 'redux';

import { connect } from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://github.com/fabioNog" target="BLANCK">
        Fabio Nogueira
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#0000"
  },
  appBarText: {
    color: '#02010A',
    fontFamily: 'Times New Roman Georgia'
  },
  appBarToolbar: {
    margin: ' auto',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  buttonHome: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#0000'
  },
}));

const steps = ['Cadastre o Endereço', 'Rever Cadastro'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

function Register({dispatch,city,cep}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const submit = () => {
    /* e.preventDefault(); */
    addTodo(city, cep);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar} >
          <Typography variant="h6" className={classes.appBarText} noWrap>
            CEP VALIDATOR
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>

        <Paper className={classes.paper} >
          <Typography component="h1" variant="h4" align="center">
            Cadastro de Endereços
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Dados Cadastrados com Sucesso
                </Typography>
                <Link to="list"><Button className={classes.buttonHome}>Lista de Registros</Button></Link>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Voltar
                      </Button>
                    )}
                    {activeStep === steps.length - 1 ?
                      (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={() => dispatch(addTodo(city,cep)),handleNext}
                        >
                          Salvar
                        </Button>)
                      : (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={handleNext}
                        >
                          Verificar
                        </Button>)}
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

 const mapDispatchToProps = dispatch => bindActionCreators({
  inc,dec
}, dispatch) 


function mapStateToProps(state) {
  return {
    city: state.city.value,
    cep: state.cep.value,
    number: state.activeReducer.number
  }
}

export default connect(mapStateToProps)(Register);
