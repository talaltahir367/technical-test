import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 50,
    [theme.breakpoints.down('xs')]: {
      padding: 20,
    },
  },
  card: {
    boxShadow: "0px 0px 10px 3px rgb(0 0 0 / 10%)",
    borderRadius: "10px"
  },
  anchor: {
    padding: 10,
    textDecoration: "none !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "14px",
    width: "100%",
    background: "#171516",
    margin: "-10px -10px -10px",
  },
  moreIcon: {
    height: "24px",
    paddingTop: "3px",
    paddingLeft: "5px"
  },
  cardBox: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 240,
  },
  LogoWidth: {
    width: 300,
    [theme.breakpoints.down(576)]: {
      width: 220,
    },
  },
  BoxHeight: {
    height: "100vh"
  },
}))
export default useStyles