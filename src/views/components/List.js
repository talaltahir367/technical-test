import React,{useContext} from 'react'
import Container from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { capitalize } from '@material-ui/core'
import useStyles from './Style'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import {GitUsers} from '../screens/Main'
import CircularProgress from '@material-ui/core/CircularProgress'
const List = () => {
    const UserData = useContext(GitUsers)
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid
                container
                direction="row"
                align = "center"
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
            >
                {UserData?
                    UserData.map((user, index) => {
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={user.avatar_url}
                                            title={user.login}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h6">
                                              {capitalize(user.login)}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link target="_blank" 
                                      className={classes.anchor} href={user.html_url}>
                                      Visit Profile <ArrowRightAltIcon className={classes.moreIcon} />
                                    </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })

                : <CircularProgress color="#171516" />}
            </Grid>
        </Container>
    )
}

export default List