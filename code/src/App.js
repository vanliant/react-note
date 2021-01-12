import {Route,Switch,Redirect} from 'react-router-dom'
import Index from './pages/index'
import LazyPage from './pages/lazyPage'

export default function App() {
  return (
    <Switch>
      <Route path="/index" component={Index}/>
      <Route path="/lazy" component={LazyPage}/>
      <Redirect to="/index"/>
    </Switch>
  )
}
