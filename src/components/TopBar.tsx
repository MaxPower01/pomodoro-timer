import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectIsAuthenticated,
  signout,
} from "../modules/authentication/authenticationSlice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function TopBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleSignout = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        dispatch(signout());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignin = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("signin");
  };

  return (
    <AppBar position="sticky" color="default" sx={{ marginBottom: 2 }}>
      <Toolbar sx={{ columnGap: "0.5em" }}>
        <Link to="home">
          <Typography variant="h5">Voting App</Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {isAuthenticated ? (
          <React.Fragment>
            <Link to="timer">
              <Button variant="contained" color="primary">
                Polls
              </Button>
            </Link>
            <Button color="primary" onClick={handleSignout}>
              Sign out
            </Button>
          </React.Fragment>
        ) : (
          <Button color="primary" onClick={handleSignin}>
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
