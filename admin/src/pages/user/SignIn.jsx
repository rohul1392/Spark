import React   from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./user.css";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root:{
    display: 'flex',
    fle: 4
  }
}));
const initalValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const classes = useStyles();
  return (
    <div className="user">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
           <div className={classes.paper}>
           <Avatar className={classes.avatar}>
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>
           <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form  className={classes.form} noValidate>
             <Field
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               type="email"
               autoComplete="email"
               autoFocus
               as={TextField}
               error={Boolean(errors.email) && Boolean(touched.email)}
               helperText={Boolean(touched.email) && errors.email} 
             />
             <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
             <FormControlLabel
               control={<Checkbox value="remember" color="primary" />}
               label="Remember me"
             />
             <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               disabled={!isValid || !dirty}
             >
               Sign In
             </Button>
             <Grid container>
               <Grid item xs>
                 <Link href="#" variant="body2">
                   Forgot password?
                 </Link>
               </Grid>
               <Grid item>
                 <Link href="/register" variant="body2">
                   {"Don't have an account? Sign Up"}
                 </Link>
               </Grid>
             </Grid>
           </Form>
        )}
      </Formik>
         </div>
    </Container>
    </div>
  );
}