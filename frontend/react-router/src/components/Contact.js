import { Link } from 'react-router-dom'


function Contact (){
  return (
    <div style={{ width: '500px', height:'250px', backgroundColor:'skyBlue', color: 'white'}}>
      <p> This is Contact screen </p>
      <Link to='/about'>About</Link>
    </div>
  )
}


export default Contact;