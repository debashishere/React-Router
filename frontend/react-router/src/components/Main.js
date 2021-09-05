import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact'
import Roster from './Roster'

function Main () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/roster' component={Roster} />
        {/* <Route path='/roster' component={Roster}/> */}
        {/* <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    </div>
  )
}

export default Main;