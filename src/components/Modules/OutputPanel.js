// ---------------------------------------------------------
// Output panel
// 2018-01-31 22:49
// ---------------------------------------------------------
// Recieves api URL and renders result inside a card

import React, {Component} from 'react';
import {
  Dimmer,
  Loader,
  Segment,
} from 'semantic-ui-react';
import '../../index.css';

// ---------------------------------------------------------
// Loader
// 2018-01-31 22:49
// ---------------------------------------------------------

const LoadingComp = () => (
  <Dimmer active>
    <Loader inverted>Loading</Loader>
  </Dimmer>
);

// ---------------------------------------------------------
// Static png
// 2018-02-05 07:54
// ---------------------------------------------------------
// Experimental feature

// const StaticDisplay = props => {
//   return <Image src={props.outputLoc} />;
// };

// ---------------------------------------------------------
// iframe
// 2018-02-05 07:55
// ---------------------------------------------------------

class IframeDisplay extends Component {
  render() {
    return (
      <div className="frame-container">
        <div>
          <a href={this.props.outputLoc} style={{float: 'right'}}>
            See larger
          </a>
        </div>
        <iframe
          src={this.props.outputLoc}
          frameBorder="0"
          title={this.props.outputLoc}
          scrolling="no"
          style={{marginTop: '20px'}}
        />
      </div>
    );
  }
}

const OutputPanel = props => {
  return (
    <Segment style={{height: '550px', width: '680px', border: 'none'}}>
      {props.loading ? <LoadingComp /> : <IframeDisplay {...props} />}
    </Segment>
  );
};

export default OutputPanel;
