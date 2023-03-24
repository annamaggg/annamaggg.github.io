import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
      <nav style={{textAlign: 'center'}}>
        <ul className='list'>
          <li><a href="/">Home</a></li>
          <li><a href="/software">Software</a></li>
          <li><a href="/visual-design">Visual Design</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  )
}