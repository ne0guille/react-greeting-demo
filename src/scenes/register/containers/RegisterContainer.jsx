import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';

import * as registrationActions from '../data/registration/actions';
import * as visitorsActions from '../data/visitors/actions';
import { countriesFormmatedForDropdown } from '../selectors/selectors';

import VisitorList from '../components/visitorList/VisitorList';
import RegistrationForm from '../components/registration/RegistrationForm';
import Greeting from '../components/greeting/Greeting';

export class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisitorClicked = this.handleVisitorClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.countries.length === 0){
      this.props.actions.fetchCountries();      
    }
  }

  handleVisitorClicked(selectedVisitor) {
  }

  renderGreeting(selectedUser) {
    if (Object.keys(selectedUser).length === 0) return;

    return (
      <Greeting {...selectedUser} />
    )
  }

  render() {
    return (
      <Row>
        <Col xs="6">
          <RegistrationForm
            user={this.props.selectedUser}
            countries={this.props.countries}
            onSave={this.props.actions.registerVisitor}
          />
          <Col xs="12">
            { this.renderGreeting(this.props.selectedUser) }
          </Col>
        </Col>
        <Col xs="6">
          <VisitorList
            visitors={this.props.visitors}
            onVisitorClick={this.handleVisitorClicked}
          />
        </Col>
      </Row>
    );
  }
}

export function mapStateToProps({ registrations }) {
  return {
    visitors: registrations.data,
    isLoading: registrations.isLoading,
    countries: countriesFormmatedForDropdown(registrations.countries),
    selectedUser: registrations.currentVisitor,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ 
      ...registrationActions, 
      ...visitorsActions 
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
