import React from 'react';
import ProgressBar from "../progressBar/MainPage";
import './style.css';

export default class MainPage extends React.Component {

  render() {
    return (
      <div className={'main'}>
        <p className={'main__text'}>text</p>
        <button className={'main__button-answer button'}>Find the treasure!</button>
        <ProgressBar currentValue={4} maxValue={10}/>
        <button className={'main__button-hint button'}>Give me a hint</button>
      </div>
    );
  };
}