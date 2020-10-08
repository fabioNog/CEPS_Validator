import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {connect} from 'react-redux';

class Review extends Component{
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
      Typography: {
        margin: ' auto',
      }
    }));


    return(      
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirma?
      </Typography>
      <List>
      
          <ListItem className={classes.listItem} key={module.id}>
            <ListItemText  primary='teste'/>
            <Typography variant="body2">teste</Typography>
          </ListItem>
        )
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

export default connect(state => ({modules: state.modules}))(Review);