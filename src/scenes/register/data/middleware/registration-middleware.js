import { Actions as registrationActions } from '../registration/actions';
import { selectVisitor } from '../visitors/actions';

export const registrationMiddleware = store => next => action => {
    if(action.type === registrationActions.REGISTRATION_SAVE ) {
        store.dispatch(selectVisitor(action.payload));
    }

    next(action);
}