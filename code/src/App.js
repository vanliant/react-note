import {Route,Switch,Redirect} from 'react-router-dom'
import Index from './pages/index'

export default function App() {
  return (
    <Switch>
      <Route path="/index" component={Index}/>
      <Redirect to="/index"/>
    </Switch>
  )
}
