import React from 'react';
import './App.css';

const pricingData = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
    ],
    unavailableFeatures: [
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
  },
  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
    ],
    unavailableFeatures: [
      'Monthly Status Reports',
    ],
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    unavailableFeatures: [],
  },
];

const PricingCard = ({ title, price, features, unavailableFeatures, unavailable }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="available">{feature}</li>
        ))}
        {unavailableFeatures.map((feature, index) => (
          <li key={index} className="unavailable">{feature}</li>
        ))}
      </ul>
      <button className={unavailable ? 'unavailable-button' : ''} disabled={unavailable}>BUTTON</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Price Card </h1>
        <div className="card-container">
          {pricingData.map((data, index) => (
            <PricingCard key={index} {...data} unavailable={index < 2} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
