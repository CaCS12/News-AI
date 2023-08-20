import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';
import Features from '../Features/Features';

const Header = () => (
  <>
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <Features />
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="AI face" />
      </div>
    </div>
  </>
);

export default Header;
