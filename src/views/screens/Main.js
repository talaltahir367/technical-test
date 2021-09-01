import React, {
    createContext, useState,
    useEffect
} from 'react'
import List from '../components/List'
import Box from '@material-ui/core/Box'
import Logo from '../../assets/images/logo.jpeg'
import useStyles from '../components/Style'
const GitUsers = createContext()
const Main = () => {
    const Classes = useStyles()
    const [users, setUsers] = useState()
    const fecthUsers = async () => {
        try {
            let response = await fetch('https://api.github.com/users');
            let data = await response.json();
            setUsers(data)
        } catch (err) {

        }
    }
    useEffect(() => {
        fecthUsers()
    }, [!users])
    return (
        <React.Fragment>
            <Box align="center" mt={5} mb={3}>
                <img src={Logo} alt="Logo"
                height="auto" className={Classes.LogoWidth} 
                />
            </Box>
            <GitUsers.Provider value={users}>
                <List />
            </GitUsers.Provider>
        </React.Fragment>
    )
}

export default Main
export { GitUsers }