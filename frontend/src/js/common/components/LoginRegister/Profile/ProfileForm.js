import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, validatorFromFunction, validators, combine } from 'validate-redux-form';
import {renderField, renderFilePicker, SelectField, renderNumber} from '../../Utils/renderField/renderField';

const genders = [
    {"label": "Masculino", "value": 0},
    {"label": "Femenino", "value": 1},
];

const ProfileForm = (props) => {
    const { handleSubmit, me, setAvatar } = props;
    return (
            <form action="" onSubmit={handleSubmit} className="py-4">
                <h2>PERFIL</h2>
                <div className="mb-4 card card-small">
                    <div className="border-bottom card-header"><h6 className="m-0">{me.first_name} {me.last_name}</h6></div>
                    <div className="p-0 pt-3 d-flex flex-column flex-md-row">
                        <div className="form-group has-feedback flex-1 mx-3">
                            <label htmlFor="avatar">Avatar</label>
                            <Field photo={me.profile && me.profile.picture ? me.profile.picture : null} setFile={setAvatar} name="avatar" component={renderFilePicker} />
                        </div>
                        <div className="d-flex flex-column flex-1 mx-3">
                            <div className="form-group has-feedback">
                                <label htmlFor="username">Username</label>
                                <Field name="username" placeholder="Username" component={renderField} type="text" className="form-control" />
                            </div>

                            <div className="form-group has-feedback">
                                <label htmlFor="profile.name">Nombre</label>
                                <Field name="profile.name" placeholder="Nombre" component={renderField} type="text" className="form-control" />
                            </div>

                            <div className="form-group has-feedback">
                                <label htmlFor="profile.last_name">Apellido</label>
                                <Field name="profile.last_name" placeholder="Nombre" component={renderField} type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="p-0 pt-3 d-flex flex-column flex-md-row">
                        <div className="form-group has-feedback flex-1 mx-3">
                            <div className="form-group has-feedback">
                                <label htmlFor="profile.phone">Teléfono</label>
                                <Field
                                    numberFormat={"+(502) ####-####"}
                                    name="profile.phone"
                                    placeholder="Teléfono"
                                    component={renderNumber}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group has-feedback flex-1 mx-3">
                            <div className="form-group has-feedback">
                                <label htmlFor="profile.address">Dirección</label>
                                <Field name="profile.address" placeholder="Dirección" component={renderField} type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary mx-auto mb-3">Guardar</button>
                    </div>
                </div>
            </form>
        );
};

export default reduxForm({
    form: 'profile', // a unique identifier for this form
})(ProfileForm);
