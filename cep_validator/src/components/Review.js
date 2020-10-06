import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import {connect} from 'react-redux';


/* const modules = [
  { name: 'module 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'module 2', desc: 'Another thing', price: '$3.45' },
  { name: 'module 3', desc: 'Something else', price: '$6.51' },
  { name: 'module 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
]; */
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];




class Review extends Component{
  constructor(props){
    super(props)   
  }  
  render(){
    const classes = makeStyles((theme) => ({
      listItem: {
        padding: theme.spacing(1, 0),
      },
      total: {
        fontWeight: 700,
      },
      title: {
        marginTop: theme.spacing(2),
      },
    }));


    return(      
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirma?
      </Typography>
      <List>
        {this.props.reducers.map((module) => (
          <ListItem className={classes.listItem} key={module.id}>
            <ListItemText  primary={module.cep}/>
            <Typography variant="body2">{module.cidade}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    reducers: state.modules
  }
}

export default connect(mapStateToProps)(Review);