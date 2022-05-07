import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 8,
    },
  },
  avatar: {
    margin: 8,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 24,
  },
  submit: {
    margin: 24,
  },
  googleButton: {
    marginBottom: 16,
  },
}));
