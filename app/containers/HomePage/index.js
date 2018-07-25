/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import question from 'images/question-mark.png';
import user from 'images/user.jpg';
import {
  MobileWrapper,
  CardWrapper,
  CardNumber,
  Month,
  OwnerName,
  CvvWrapper,
  StyledInput,
  ButtonsWrapper,
  TextWrapper,
  AppWrapper,
  DetialsCard,
  UserImage,
  HintText,
  TypeHeading,
} from './style';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      card_number: '',
      card_month: '',
      card_name: '',
      card_cvv: '',
      animate: false,
    };
  }

  cardNumber = e => {
    const newState = { card_number: e.target.value };
    if (this.state.card_number.length === 15) {
      this.setState({ ...this.newState, step: 2 });
    } else {
      this.setState(newState);
    }
  };

  cardMonth = e => {
    const newState = { ...this.state, card_month: e.target.value };
    if (this.state.card_month.length === 4) {
      this.setState({ ...this.state, step: 3 });
    } else {
      this.setState(newState);
    }
  };

  cardName = e => {
    this.setState({ ...this.state, card_name: e.target.value });
  };

  cardCvv = e => {
    if (this.state.card_cvv.length === 4) {
      this.setState({ ...this.state, animate: true });
    } else {
      this.setState({ ...this.state, card_cvv: e.target.value });
    }
  };

  keyClick = item => {
    if (
      !isNaN(item) &&
      this.state.card_number.length < 16 &&
      this.state.step === 1
    ) {
      this.setState({ card_number: this.state.card_number + item });
    }
  };

  handleEnter = e => {
    if (e.keyCode === 13 || e.which === 13) {
      if (this.state.step === 1 && this.state.card_number.length === 16) {
        this.setState({ ...this.state, step: 2 });
      }
      if (this.state.step === 2 && this.state.card_month.length === 3) {
        this.setState({ ...this.state, step: 3 });
      }
      if (this.state.step === 3 && this.state.card_name) {
        this.setState({ ...this.state, step: 4 });
      }
      if (this.state.step === 4) {
        this.setState({
          ...this.state,
          animate: true,
          step: 1,
          card_name: '',
          card_number: '',
          card_month: '',
          card_cvv: '',
        });
      }
    }
  };

  render() {
    const buttons = [
      1,
      2,
      3,
      '-',
      4,
      5,
      6,
      ',',
      7,
      8,
      9,
      'x',
      '.',
      0,
      '_',
      '>',
    ];
    const aplphabets = [
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '?',
      ';',
      ':',
      '_',
      '+',
    ];
    return (
      <AppWrapper>
        <MobileWrapper className="child">
          <CardWrapper flip={this.state.card_number.length > 0}>
            <CardNumber>
              {!this.state.card_number && (
                <FormattedMessage {...messages.placeHolder} />
              )}
              {this.state.card_number &&
                this.state.card_number.length > 0 && (
                  <span>{this.state.card_number}</span>
                )}
            </CardNumber>
            <Month>
              {!this.state.card_month && <span>MM/YY</span>}
              {this.state.card_month && <span>{this.state.card_month}</span>}
            </Month>
            <OwnerName>
              {!this.state.card_name && (
                <FormattedMessage {...messages.cardHolder} />
              )}
              {this.state.card_name && <span>{this.state.card_name}</span>}
            </OwnerName>
            <CvvWrapper>
              {!this.state.card_cvv && (
                <FormattedMessage {...messages.cvvWrapper} />
              )}
              {this.state.card_cvv && (
                <span>
                  {Array.from(this.state.card_cvv).map(() => (
                    <span key={Math.random()}>x</span>
                  ))}
                </span>
              )}
              <img src={question} alt={question} />
            </CvvWrapper>
          </CardWrapper>
          {this.state.step === 1 && (
            <div>
              <TextWrapper>16-Digit Number </TextWrapper>
              <StyledInput
                autoFocus
                placeholder="16 Digit Number"
                type="text"
                maxLength="16"
                value={this.state.card_number}
                onKeyDown={e => this.handleEnter(e)}
                onChange={e => this.cardNumber(e)}
              />
            </div>
          )}
          {this.state.step === 2 && (
            <div>
              <TextWrapper>Month and Year</TextWrapper>
              <StyledInput
                autoFocus
                placeholder="Month and Year"
                type="text"
                maxLength="5"
                value={this.state.card_month}
                onKeyDown={e => this.handleEnter(e)}
                onChange={e => this.cardMonth(e)}
              />
            </div>
          )}
          {this.state.step === 3 && (
            <div>
              <TextWrapper>Name on Card</TextWrapper>
              <StyledInput
                autoFocus
                placeholder="Account Holder Name"
                type="text"
                maxLength="50"
                value={this.state.card_name}
                onKeyDown={e => this.handleEnter(e)}
                onChange={e => this.cardName(e)}
              />
            </div>
          )}
          {this.state.step === 4 && (
            <div>
              <TextWrapper>CVV</TextWrapper>
              <StyledInput
                autoFocus
                placeholder="CVV"
                type="password"
                maxLength="4"
                value={this.state.card_cvv}
                onKeyDown={e => this.handleEnter(e)}
                onChange={e => this.cardCvv(e)}
              />
            </div>
          )}
          {this.state.step !== 3 && (
            <ButtonsWrapper>
              {buttons.map(item => (
                <li onClick={() => this.keyClick(item)} key={item}>
                  {item}
                </li>
              ))}
            </ButtonsWrapper>
          )}
          {this.state.step === 3 && (
            <ButtonsWrapper small>
              {aplphabets.map(item => <li key={Math.random()}>{item}</li>)}
            </ButtonsWrapper>
          )}
        </MobileWrapper>
        <DetialsCard className="child" animate={this.state.animate}>
          <UserImage>
            <img src={user} alt={user} />
            <div>
              <TypeHeading>Credit Card Flow</TypeHeading>
              <HintText>
                By
                <a href="https://www.linkedin.com/in/namburu26/">
                  Jaya Krishna Namburu
                </a>
              </HintText>
            </div>
          </UserImage>
        </DetialsCard>
      </AppWrapper>
    );
  }
}
