import {handleActions} from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";
import { NotificationManager } from "react-notifications";
import {api} from 'api';
import { push } from "react-router-redux";


// ------------------------------------
// Constants
// ------------------------------------

const LISTAR_ROLES = 'LISTAR_ROLES';

export const { reducers, initialState, actions } = createReducer(
    "usuarios",
    "user",
    "usuario",
    "list",
);


const obtenerRoles = () => (dispatch) => {
    api.get('/rol')
       .then(res => {
           dispatch({type: LISTAR_ROLES, dataRol: res})
       })
       .catch(console.error);
}

const crearUsuario = (data, attachments = []) => (dispatch) => {    
    console.log(data);
    dispatch(actions.setLoader(true));
    api.postAttachments('user', data, attachments).then(() => {
        NotificationManager.success('Registro creado', 'Éxito', 3000);
        dispatch(push('list'));
    }).catch((err) => {
        console.log({err});
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
        dispatch(actions.setLoader(false));
    });
};



actions['obtenerRoles'] = obtenerRoles;
actions['crearUsuario'] = crearUsuario;
initialState['dataRol'] = null;
reducers[LISTAR_ROLES] = (state, {dataRol}) => {
    return {
        ...state,
        dataRol
    }
}
export default handleActions(reducers, initialState);
