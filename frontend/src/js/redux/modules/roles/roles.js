import {handleActions} from 'redux-actions';
import { NotificationManager } from "react-notifications";
import {api} from 'api';


export const registroUsuario = () => (dispatch, getStore) => {
    const formData = getStore().form.usuario.values;
    api.post('/user', formData)
       .then(res => {
            NotificationManager.success('El usuario se ha creado con éxito', 'Éxito', 3000);
       })
       .catch(() => {
            NotificationManager.error(`Ocurrión un error al registrar usuario`, 'ERROR', 0);
       })
}

export const obtenerRoles = () => (dispatch, getStore) => {
    api.get('/rol')
       .then(res => {
           console.log(res);
       })
       .catch(console.error);
}


export const actions = {
    registroUsuario
}


export const reducers = {

}

export const initialState = {
    loader : false,
}

export default handleActions(reducers, initialState);
