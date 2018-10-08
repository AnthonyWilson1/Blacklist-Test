import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      align: 'center',
      card: {
        minWidth: 275,
      },
      title: {
        marginBottom: 16,
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      greenAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
        },
    }),

  });

  function Home (props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
      <Grid container spacing ={24} direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.root} elevation={4}>
            <Typography align="center" color="inherit" variant="display2" component="h2">
              The BLACK list
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>
                <Avatar className={classes.greenAvatar}>
                  <AssignmentIcon />
                </Avatar>
              </Typography>
              <Typography variant="headline" component="h2">
              Goal
              </Typography>
              <Typography component="p" color="inherit">
                Our mission is too improve the 
                <br />
                productivity of individuals 
                <br />
                in their everyday lives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>
                <Avatar className={classes.greenAvatar}>
                  <AssignmentIcon />
                </Avatar>
              </Typography>
              <Typography variant="headline" component="h2">
              Main Features
              </Typography>
              <Typography component="p" color="inherit">
                {bull}Create a custom List.
                <br />
                {bull}Create multiple List.
                <br />
                {bull}Track Productivity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>
                <Avatar className={classes.greenAvatar}>
                  <AssignmentIcon />
                </Avatar>
              </Typography>
              <Typography variant="headline" component="h2">
              Other Features to Come!
              </Typography>
              <Typography component="p" color="inherit">
                {bull}Integrated with Google Calendar.
                <br />
                {bull}Integrated with Google Task.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
    );
  }


  export default withStyles(styles)(Home);