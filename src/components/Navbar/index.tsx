import { Nav } from './styles';

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src="/assets/logo.png" alt="Travelo Logo" />
            Travelo
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>
  );
}
