import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
};

function Greeting(props) {
  const bornYear = moment(`01-01-${props.birthYear}`, "MM-DD-YYYY");
  const today = moment();
  const currenteAge = moment.duration(moment().diff(bornYear)).years();
  
  return (
    <h4 className="greeting">
      Hola <span id="name">{props.name}</span> de <span id="country">{props.country}</span>, 
      el dia {today.date()} del mes {today.month()+1} tendras <span id="age">{currenteAge}</span>
    </h4>
  )
}

export default Greeting;