import { Switch, Route} from 'react-router-dom'
import  FullRoster  from './FullRoster';
import  Player  from './Player';

function Roster (){
  return (
    <div>
    <h2> This is roster page. </h2>
      <Switch>
        <Route exact to='/roster'  component={FullRoster} />
        <Route to='/roster/:number' component={Player} />
      </Switch>
    </div>
  )
}

export default Roster;