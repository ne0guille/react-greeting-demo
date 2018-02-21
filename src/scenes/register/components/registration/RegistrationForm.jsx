import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class RegistrationForm extends React.Component {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { name: '', country: '', birthYear: '' };
  }

  handleChange(stateParam, event) {
    this.setState({ [stateParam]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newVisitor = this.state;

    this.setState({ name: '', country: '', birthYear: '' });

    this.props.onSave(newVisitor);
  }

  renderOptions(countries) {
    return (
      countries.map(c => <option key={c.name}>{c.name}</option>)
    )
  }

  render() {
    const { countries } = this.props;

    return (
      <Form>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            value={this.state.name}
            onChange={e => this.handleChange("name", e)}
            type="text" name="user_name" id="nombre" />
        </FormGroup>
        <FormGroup>
          <Label for="pais">Pais</Label>
          <Input
            value={this.state.country}
            onChange={e => this.handleChange("country", e)}
            type="select" name="select_pais" id="pais">
            <option>Elije un pais</option>
            {this.renderOptions(countries)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="edad">Ano de nacimiento</Label>
          <Input
            value={this.state.birthYear}
            onChange={e => this.handleChange("birthYear", e)}
            type="text" name="edad" id="edad" />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={e => this.handleSubmit(e)}
            color="primary">
            Saludar
        </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default RegistrationForm;