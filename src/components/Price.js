import React from 'react';
import { Typography, Grid, CardMedia, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.secondary.light,
      padding: '2rem 0',
      marginBottom: '3rem',
      borderRadius: '1rem',
    },
    subtitle: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    link: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '1.6rem',
      fontFamily: theme.typography.fontFamily,
      padding: '0 1.5rem',
    },
    icon: {
      padding: '0 1.5rem',
    },
  };
});

function Price({ icon, alt, title, content, link }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <CardMedia
              component='img'
              src={icon}
              height='100%'
              alt={alt}
              className={classes.icon}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle}>{title}</Typography>
            <Typography variant='body1' color='textSecondary'>
              {content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Link href='#' className={classes.link} underline='always'>
          {link}
        </Link>
      </Grid>
    </Grid>
  );
}

export default Price;
