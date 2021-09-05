import { Link } from 'react-router-dom'


function Header () {
  return (
      <header className="App-header">
        <div>React App Header</div>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/contact'>Contact</Link>
        <br/>
        <Link to='/roster'>Roster</Link>
      </header>
  )
}

export default Header