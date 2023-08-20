import React from 'react';
import Feature from './feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Latest News',
    text: 'Try: Give me the latest news',
  },
  {
    title: 'News by Categories',
    text: 'Business, Entertainment, Health, Sports, Technology, etc. Try: Give me the latest Technology news',
  },
  {
    title: 'News by Terms',
    text: 'Bitcoin, NFTs, PlayStation 5, Smartphones, Apple, Esports... Try: What\'s up with Bitcoin',
  },
  {
    title: 'News by Sources',
    text: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News... Try: Tell me the news from CNN',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is NOW and you just need to realize it. Step into future today and make it happen using your voice.</h1>
      <p>Search your favourite news using VOICE COMMANDS</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
