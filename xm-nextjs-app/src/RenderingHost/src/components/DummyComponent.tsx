import { FC } from 'react';

import FeaturedBoxes from './FeaturedBoxes';
import ServicesCard from './ServicesCard';
import OurFeaturesContent from './OurFeaturesContent';
import FunFacts from './FunFacts';
import AccountCreateArea from './AccountCreateArea';

const featuredBoxesData = [
  {
    icon: 'flaticon-piggy-bank',
    color: 'color-fb7756',
    title: 'Transparent Pricing',
    description: 'Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
    link: '/features-one',
    readMoreText: 'Read More',
  },
  {
    icon: 'flaticon-data-encryption',
    color: 'color-facd60',
    title: 'Fully Encrypted',
    description: 'Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
    link: '/features-one',
    readMoreText: 'Read More',
  },
  {
    icon: 'flaticon-wallet',
    color: 'color-1ac0c6',
    title: 'Instant Cashout',
    description: 'Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
    link: '/features-one',
    readMoreText: 'Read More',
  },
  {
    icon: 'flaticon-shield',
    color: '',
    title: 'Safe and Secure',
    description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
    link: '/features-one',
    readMoreText: 'Read More',
  },
];

const servicesData = {
  title: 'Freelancers, entrepreneurs, and sole traders',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  services: [
    'Free plan available',
    'Full data privacy compliance',
    '100% transparent costs',
    'Commitment-free',
    'Real-time spending overview',
    'Debit Mastercard included',
  ],
  imageUrl: '/images/feature1.png',
  circleImageUrl: '/images/circle.png',
};

const featureBoxes = [
  {
    icon: 'flaticon-settings',
    bgColor: '',
    title: 'Incredible infrastructure',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
  {
    icon: 'flaticon-envelope-of-white-paper',
    bgColor: 'bg-f78acb',
    title: 'Email notifications',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
  {
    icon: 'flaticon-menu',
    bgColor: 'bg-cdf1d8',
    title: 'Simple dashboard',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
  {
    icon: 'flaticon-info',
    bgColor: 'bg-c679e3',
    title: 'Information retrieval',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
  {
    icon: 'flaticon-cursor',
    bgColor: 'bg-eb6b3d',
    title: 'Drag and drop functionality',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
  {
    icon: 'flaticon-alarm',
    bgColor: '',
    title: 'Deadline reminders',
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
  },
];

const funFactsData = {
  title: 'We always try to understand customers expectation',
  subTitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  downloads: 180,
  feedbacks: 20,
  workers: 500,
  contributors: 70,
  ctaTitle: 'Have any questions about us?',
  ctaDescription: "Don't hesitate to contact us",
  description: {
    downloaded: 'Downloaded',
    feedback: 'Feedback',
    workers: 'Workers',
    contributors: 'Contributors',
    contactUs: 'Contact Us',
  },
};

interface Props {
  //
}

const DummyComponent: FC<Props> = ({}) => {
  return (
    <div>
      <FeaturedBoxes featuredBoxes={featuredBoxesData} />

      <ServicesCard {...servicesData} />

      <OurFeaturesContent
        featureBoxes={featureBoxes}
        sectionTitle="Our features"
        sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <FunFacts {...funFactsData} />

      <AccountCreateArea
        title="Apply for an account in minutes"
        description="Get your Haiper account today!"
        buttonText="Get Your Account"
        buttonLink="/sign-up"
      />
    </div>
  );
};

export default DummyComponent;
