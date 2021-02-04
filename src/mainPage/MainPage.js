import React from 'react';
import {_3words, findTheTreasure} from "../internalMagic/InternalMagic";
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

        //call the function to find treasure, it uses url and destination
        //let url="https://api.findtreasure.com";
        //let destination='://w';
        
        _3words();
    }

    render() {
    return (
      <div className={'main'}>
        <p className={'main__text'}>Find your treasure right away</p>
        <button className={'main__button-answer button'} onClick = { this.buttonOnClick} >Find the treasure!</button>
      </div>
    );
  };
}