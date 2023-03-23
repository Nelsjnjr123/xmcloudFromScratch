import React from 'react';

interface ServicesCardProps {
  title: string;
  content: string;
  services: string[];
  imageUrl: string;
  circleImageUrl: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, content, services, imageUrl, circleImageUrl }) => {
  return (
    <div className="services-area ptb-70">
      <div className="container-fluid p-0">
        <div className="overview-box">
          <div className="overview-content">
            <div className="content left-content">
              <h2>{title}</h2>
              <div className="bar"></div>
              <p>{content}</p>

              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <span>
                      <i className="flaticon-check-mark"></i> {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overview-image">
            <div className="image">
              <img src={imageUrl} alt="image" />
              <div className="circle-img">
                <img src={circleImageUrl} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
