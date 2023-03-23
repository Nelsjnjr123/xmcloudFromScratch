/**
 * Defines the properties for a single feature box.
 * @interface SingleFeatureBoxProps
 * @property {string} icon - The icon to display in the feature box.
 * @property {string} bgColor - The background color of the feature box.
 * @property {string} title - The title of the feature box.
 * @property {string} description - The description of the feature box.
 */

/**
 * Defines the properties for the OurFeaturesContent component.
 * @interface OurFeaturesContentProps
 * @property {SingleFeatureBoxProps[]} featureBoxes - An array of SingleFeatureBoxProps objects representing the feature boxes to display.
 * @property {string} sectionTitle - The title of the section containing the feature boxes.
 * @property {string} sectionDescription - The description of the section containing the feature boxes.
 */

/**
 * Renders a section containing multiple feature boxes.
 * @function OurFeaturesContent
 * @param {OurFeaturesContentProps} props - The properties to pass to the component.
 * @returns {JSX.Element} - The rendered section containing the feature boxes.
 */

interface SingleFeatureBoxProps {
  icon: string;
  bgColor: string;
  title: string;
  description: string;
}

interface OurFeaturesContentProps {
  featureBoxes: SingleFeatureBoxProps[];
  sectionTitle: string;
  sectionDescription: string;
}

const OurFeaturesContent: React.FC<OurFeaturesContentProps> = ({ featureBoxes, sectionTitle, sectionDescription }) => {
  return (
    <section className="features-area ptb-70 bg-f6f4f8">
      <div className="container">
        <div className="section-title">
          <h2>{sectionTitle}</h2>
          <div className="bar"></div>
          <p>{sectionDescription}</p>
        </div>

        <div className="row">
          {featureBoxes.map((featureBox, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-features-box">
                <div className={`icon ${featureBox.bgColor}`}>
                  <i className={featureBox.icon}></i>
                </div>

                <h3>{featureBox.title}</h3>
                <p>{featureBox.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeaturesContent;
