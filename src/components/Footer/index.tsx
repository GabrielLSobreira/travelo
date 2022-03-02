import { FooterContainer } from './styles';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

export default function index() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Travelo. All rights reserved</span>
      <ul className="links">
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
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}
