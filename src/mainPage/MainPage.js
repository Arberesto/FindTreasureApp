import React from 'react';
import ProgressBar from "../progressBar/ProgressBar";
import {callAPI, getSolvedIssuesNumber} from "../internalMagic/InternalMagic";
import './style.css';

export default class MainPage extends React.Component {

    _3words = () => {
        alert('Так дайте металлоискатель')
    };

    findTheTreasure = (url, destination) => {
        callAPI(url, destination)
    };

    buttonOnClick = () => {
        let url='https://api.findtreasure.com'
        let junk='://w'
        this.findTheTreasure(url, junk);
    }

    getSolvedIssuesNumber = () => {
        return 1;
    }

    render() {
    return (
      <div className={'main'}>
        <p className={'main__text'}>text</p>
        <button className={'main__button-answer button'} onClick= { () => {this.buttonOnClick()}} >Find the treasure!</button>
        <ProgressBar currentValue= {getSolvedIssuesNumber()} maxValue={5}/>
        <button className={'main__button-hint button'} >Give me a hint</button>
      </div>
    );
  };
}