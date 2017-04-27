import React from 'react';
import AnimatedNumber from '../AnimatedNumber';
import { toNumber } from '../helpers';

const Token = (props) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="info-box">
        <span className={`info-box-icon ${props.color}`}>
          {props.token}
        </span>
        <div className="info-box-content">
          <span className="info-box-number">
            <span>Total</span><AnimatedNumber value={toNumber(props.sai[props.token].totalSupply)} stepPrecision={4} formatValue={ n => n.toFixed(3) } />
          </span>
          <span className="info-box-number">
            <span>Mine</span><AnimatedNumber value={toNumber(props.sai[props.token].myBalance)} stepPrecision={4} formatValue={ n => n.toFixed(3) } />
          </span>
          <span className="info-box-number">
            <span>Tub</span><AnimatedNumber value={toNumber(props.sai[props.token].tubBalance)} stepPrecision={4} formatValue={ n => n.toFixed(3) } />
          </span>
          <span className="info-box-number">
            <span>Pot</span><AnimatedNumber value={toNumber(props.sai[props.token].potBalance)} stepPrecision={4} formatValue={ n => n.toFixed(3) } />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Token;