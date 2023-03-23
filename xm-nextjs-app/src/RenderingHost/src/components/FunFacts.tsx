import React, { FC } from 'react';
import Link from 'next/link';

interface FunFactProps {
  title: string;
  subTitle: string;
  downloads: number;
  feedbacks: number;
  workers: number;
  contributors: number;
  ctaTitle: string;
  ctaDescription: string;
  description: {
    downloaded: string;
    feedback: string;
    workers: string;
    contributors: string;
  };
}

const FunFacts: FC<FunFactProps> = ({
  title,
  subTitle,
  description,
  downloads,
  feedbacks,
  workers,
  contributors,
  ctaTitle,
  ctaDescription,
}) => {
  return (
    <section className="funfacts-area ptb-70 pt-0">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <div className="bar"></div>
          <p>{subTitle}</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-3 col-md-3 col-6">
            <div className="funfact">
              <h3>
                <span>{downloads}</span>K
              </h3>
              <p>{description.downloaded}</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-3 col-md-3 col-6">
            <div className="funfact">
              <h3>
                <span>{feedbacks}</span>K
              </h3>
              <p>{description.feedback}</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-3 col-md-3 col-6">
            <div className="funfact">
              <h3>
                <span>{workers}</span>+
              </h3>
              <p>{description.workers}</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-3 col-md-3 col-6">
            <div className="funfact">
              <h3>
                <span>{contributors}</span>+
              </h3>
              <p>{description.contributors}</p>
            </div>
          </div>
        </div>

        <div className="contact-cta-box">
          <h3>{ctaTitle}</h3>
          <p>{ctaDescription}</p>

          <Link href="/contact">
            <a className="btn btn-primary">{description.contactUs}</a>
          </Link>
        </div>

        <div className="map-bg">
          <img src="/images/map.png" alt="map" />
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
