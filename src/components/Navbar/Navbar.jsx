import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>CATAL<span>YS</span>T</h2>

      <div className='navigation-wrapper'>
        <h4>HOME</h4>
        <h4>SERVICES</h4>
        <h4>CONTACT US</h4>
        <button>LOGIN</button>
      </div>
    </div>
  )
}

export default Navbar