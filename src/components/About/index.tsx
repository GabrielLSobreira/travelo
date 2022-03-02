import { Section } from './styles';

export default function About() {
  const services = [
    {
      icon: '/assets/service1.png',
      title: 'Get Best Prices',
      subTitle:
        'Pay through our application and save thousands and get amazing rewards.',
    },
    {
      icon: '/assets/service2.png',
      title: 'Covid Safe',
      subTitle:
        'We have all the curated hotels that have all the precaution for a covid safe environment.',
    },
    {
      icon: '/assets/service3.png',
      title: 'Flexible Payment',
      subTitle:
        ' Enjoy the flexible payment through our app and get rewards on every payment.',
    },
    {
      icon: '/assets/service4.png',
      title: 'Find The Best Near You',
      subTitle:
        'Find the best hotels and places to visit near you in a single click.',
    },
  ];
  return (
    <Section id="about">
      {services.map((service) => {
        return (
          <div key={service.title} className="services">
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}
