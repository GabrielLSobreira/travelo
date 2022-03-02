import { Section } from './styles';

export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src="assets/hero.png" alt="Hero" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label>Where you want to go</label>
            <input type="text" placeholder="Search your location" />
          </div>
          <div className="container">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}
