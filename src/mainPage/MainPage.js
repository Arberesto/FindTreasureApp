import React from 'react';
import ProgressBar from "../progressBar/ProgressBar";
import {getSolvedIssuesNumber,_3words, findTheTreasure} from "../internalMagic/InternalMagic";
import './style.css';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.state = {
            issuesFixedNumber: 1
        }
    }
    buttonOnClick() {
        let url="http://api.findtreasure.pirate";
        let junk=':s//w';

        //call the api to find treasure

        findTheTreasure(url, junk);
    }

    render() {
    const fixedIssueNumber = getSolvedIssuesNumber();
    return (
      <div className={'main'}>
        <p className={'main__text'}>text</p>
        <button className={'main__button-answer button'} onClick = { this.buttonOnClick} >Find the treasure!</button>
        <ProgressBar currentValue= {fixedIssueNumber} maxValue={5}/>
        <button className={'main__button-hint button'} >Give me a hint</button>
      </div>
    );
  };
}