import React, {Component} from 'react';
import ons from 'onsenui';
import {Page, Toolbar, ToolbarButton, Icon} from 'react-onsenui';
import './../node_modules/onsenui/css/onsen-css-components.css';
import './../node_modules/onsenui/css/onsenui.css';
import './style.scss';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + (sec % 60).toFixed(2)).slice(-5)
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    this.incrementer = null;
    this.isCounting = false;
  }
  handleStartClick() {
    if (!this.isCounting) {
      this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 0.01
        })
        , 10); 
      this.isCounting = true;
    } 
  }
  handleStopClick() {
    clearInterval(this.incrementer);
    this.isCounting = false;
  }
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
    });
    this.isCounting = false;
  }
  render() {
    return (
      <Page contentStyle={{backgroundColor: '#efeff5'}}>
        <Toolbar>
          <div className='center'>ストップウォッチ</div>
          <div className='right'>
            <ToolbarButton>
              <Icon icon='ion-navicon, material:md-menu'></Icon>
            </ToolbarButton>
          </div>
        </Toolbar>
        <div style={{marginTop: '50%', textAlign: 'center'}}>
          <h1 className='stopwatch-timer'>{formattedSeconds(this.state.secondsElapsed)}</h1>
        </div>
        <div className='stopwatch'>
          <Button className='start-btn' onClick={this.handleStartClick.bind(this)}>start</Button>
          <Button className='stop-btn' onClick={this.handleStopClick.bind(this)}>stop</Button>
          <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
        </div>
      </Page>
    );
  }
}

const Button = (props) =>
  <button type='button' {...props} className={'btn ' + props.className } />;

export default App;
