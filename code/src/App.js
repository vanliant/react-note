import {Route,Switch,Redirect} from 'react-router-dom'
import Index from './pages/index'
import LazyPage from './pages/lazyPage'
import HookDemo from './pages/hooks'

export default function App() {
  return (
    <Switch>
      <Route path="/index" component={Index}/>
      <Route path="/lazy" component={LazyPage}/>
      <Route path="/hooks" component={HookDemo}/>
      <Redirect to="/index"/>
    </Switch>
  )
}
