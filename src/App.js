import React,{Suspense,lazy} from 'react'
import Box from '@material-ui/core/Box'
import {
  Switch,
  Route,
} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
const Main = lazy(() => import('./views/screens/Main'))
const App = () => {
  const Loader = (
    <Box style={{width:"100%"}}>
      <LinearProgress color="primary" />
    </Box>
  )
  return (
    <React.Fragment>
      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default App