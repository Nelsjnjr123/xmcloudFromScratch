/**
 * This module exports two React functional components: FeaturedBox and FeaturedBoxes.
 * FeaturedBox is a reusable component that displays a single featured box with an icon, title, description, and a link to read more.
 * FeaturedBoxes is a component that takes an array of FeaturedBoxProps and renders them using the FeaturedBox component.
 */

import React from 'react';
import Link from 'next/link';

/**
 * Interface for the props of the FeaturedBox component.
 * @interface FeaturedBoxProps
 * @property {string} icon - The class name of the icon to display in the featured box.
 * @property {string} color - The color of the featured box.
 * @property {string} title - The title of the featured box.
 * @property {string} description - The description of the featured box.
 * @property {string} link - The link to the page to read more.
 * @property {string} readMoreText - The text to display for the read more link.
 */
interface FeaturedBoxProps {
  icon: string;
  color: string;
  title: string;
  description: string;
  link: string;
  readMoreText: string;
}

/**
 * The FeaturedBox component is a reusable component that displays a single featured box with an icon, title, description, and a link to read more.
 * @param {FeaturedBoxProps} props - The props for the FeaturedBox component.
 * @returns {JSX.Element} - A JSX element that displays a single featured box.
 */
const FeaturedBox: React.FC<FeaturedBoxProps> = ({ icon, color, title, description, link, readMoreText }) => {
  return (
    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
      <div className="single-featured-box">
        <div className={`icon ${color}`}>
          <i className={icon}></i>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <Link href={link}>
          <a className="read-more-btn">{readMoreText}</a>
        </Link>
      </div>
    </div>
  );
};

/**
 * Interface for the props of the FeaturedBoxes component.
 * @interface FeaturedBoxesProps
 * @property {FeaturedBoxProps[]} featuredBoxes - An array of FeaturedBoxProps to render using the FeaturedBox component.
 */
interface FeaturedBoxesProps {
  featuredBoxes: FeaturedBoxProps[];
}

/**
 * The FeaturedBoxes component takes an array of FeaturedBoxProps and renders them using the FeaturedBox component.
 * @param {FeaturedBoxesProps} props - The props for the FeaturedBoxes component.
 * @returns {JSX.Element} - A JSX element that displays multiple featured boxes.
 */
const FeaturedBoxes: React.FC<FeaturedBoxesProps> = ({ featuredBoxes }) => {
  return (
    <div className="featured-boxes-area">
      <div className="container">
        <div className="featured-boxes-inner">
          <div className="row m-0">
            {featuredBoxes.map((featuredBox) => (
              <FeaturedBox key={featuredBox.title} {...featuredBox} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBoxes;
