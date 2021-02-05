import React from 'react';
import {_3words, findTheTreasure, checkCurrentState, getErrorsText} from "../internalMagic/InternalMagic";
import './style.css';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.state = {
            result: '',
            errorsText: ''
        }
    }

    buttonOnClick() {

        //call the function to find the treasure, it uses url and destination
        //let url="https://api.findtreasure.com";
        //let destination='://w';
        _3words()




        this.setState({...this.state,
          result: checkCurrentState(),
          errorsText: getErrorsText()})
    }

    render() {
    return (
      <div className={'main'}>
        <p className={'main__text'}>Find your treasure right away</p>
        <button className={'main__button-answer button'} onClick = { this.buttonOnClick} >Find the treasure!</button>
        <div className={'main__result-text'}>
            <p className={'result-text'}>{this.state.result}</p>
            <p className={'result-text'}>{this.state.errorsText}</p>
        </div>
      </div>
    );
  };
}