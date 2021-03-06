import {Route,Switch,Redirect} from 'react-router-dom'
import Index from './pages/index'
import LazyPage from './pages/lazyPage'
import HookDemo from './pages/hooks'
import Context from './pages/context'
import ReduxTest from './pages/reduxTest'

export default function App() {
  return (
    <Switch>
      <Route path="/index" component={Index}/>
      <Route path="/lazy" component={LazyPage}/>
      <Route path="/hooks" component={HookDemo}/>
      <Route path="/context" component={Context}/>
      <Route path='/redux' component={ReduxTest} />
      <Redirect to="/index"/>
    </Switch>
  )
}
