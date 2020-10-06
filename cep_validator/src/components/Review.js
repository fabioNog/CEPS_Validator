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