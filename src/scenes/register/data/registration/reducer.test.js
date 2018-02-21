import { registrationReducer } from './reducer';
import { registerVisitorSuccess } from './actions';

describe('Registration reducer', () => {
  it('should update registrations when REGISTRATION_SAVE_SUCCESS is triggered', () => {
    const initialState = [{
      name: 'Guille', country: 'Arg', birthYear: '1990'
    }];

    const newVisitor = {name: 'Carlos', country: 'Brasil', birthYear: '1985'};
    const action = registerVisitorSuccess(newVisitor);

    const newState = registrationReducer(initialState, action);
    const updatedVisitor = newState.find(v => v.name === 'Carlos');

    expect(updatedVisitor.name).toBe('Carlos');
    expect(updatedVisitor.country).toBe('Brasil');
    expect(updatedVisitor.birthYear).toBe('1985');
    expect(newState.length).toEqual(2);
  })
})