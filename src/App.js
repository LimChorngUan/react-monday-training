import React, { Component } from 'react';
import logo from './logo.svg';
import visaLogo from './Logo_Visa.svg';
import masterLogo from './Mastercard-logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import './App.css';
library.add(farStar, fasStar);

/********************************
 * Root
 ********************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* Amelia is the children of Greetings */}
          <Greetings lang="fr">Amelia</Greetings>

          <Random min="18" max="42" />

          <BoxColor r="97" g="218" b="251" />

          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2020}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#409076"
            color="white"
          />

          <CreditCard
            type="Master Card"
            number="01234567890198356"
            expirationMonth={12}
            expirationYear={2020}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#ebebeb"
            color="#555555"
          />

          <Rating name="Amelia">4</Rating>
          <Rating name="Min">0</Rating>
        </header>
      </div>
    );
  }
}

/********************************
 * Greetings
 ********************************/
class Greetings extends Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola'
    };

    return (
      <div>
        <h2>
          {greetings[this.props.lang]} {this.props.children}
        </h2>
      </div>
    );
  }
}

/********************************
 * Random
 ********************************/
class Random extends Component {
  render() {
    let randomNum =
      Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
      Number(this.props.min);
    return <div>{randomNum}</div>;
  }
}

/********************************
 * Box Color
 ********************************/
class BoxColor extends Component {
  render() {
    const styling = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
    };

    return <div className="box" style={styling} />;
  }
}

/********************************
 * Dots
 ********************************/
class Dots extends Component {
  render() {
    const dotStyling = {
      backgroundColor: this.props.color
    };

    return (
      <div className="row dot-group">
        <div className="dot" style={dotStyling} />
        <div className="dot" style={dotStyling} />
        <div className="dot" style={dotStyling} />
        <div className="dot" style={dotStyling} />
      </div>
    );
  }
}

/********************************
 * Credit Card
 ********************************/
class CreditCard extends Component {
  render() {
    // type logo
    const image = {
      Visa: visaLogo,
      'Master Card': masterLogo
    };

    // format expiry date
    let month = ('0' + this.props.expirationMonth).slice(-2);
    let year = String(this.props.expirationYear).slice(-2);

    // styling
    const styling = {
      backgroundColor: this.props.bgColor,
      color: this.props.color
    };

    return (
      <div className="credit-card" style={styling}>
        {/* Credit card type */}
        <img src={image[this.props.type]} alt={this.props.type} />

        {/* Credit card number */}
        <div className="row">
          <Dots color={this.props.color} />
          <Dots color={this.props.color} />
          <Dots color={this.props.color} />
          <p className="number">{this.props.number.slice(-4)}</p>
        </div>

        <div className="row">
          {/* Expiry Date */}
          <p style={{ marginRight: '20px' }}>
            Expires {month}/{year}
          </p>

          {/* Bank Name */}
          <p>{this.props.bank}</p>
        </div>

        {/* Owner */}
        <p className="owner">{this.props.owner}</p>
      </div>
    );
  }
}

/********************************
 * Rating
 ********************************/
class Rating extends Component {
  render() {
    let ratings = [];
    let stars = [];

    for (let i = 0; i < this.props.children; i++) {
      ratings.push(<FontAwesomeIcon icon={fasStar} />);
    }
    for (let i = this.props.children; i < 5; i++) {
      stars.push(<FontAwesomeIcon icon={farStar} />);
    }

    return (
      <div className="rating">
        <p>{this.props.name}</p>
        {ratings.map(rating => (
          <span>{rating}</span>
        ))}
        {stars.map(star => (
          <span>{star}</span>
        ))}
      </div>
    );
  }
}

export default App;
