import React, {Component} from 'react'
import { Field } from 'redux-form';
import {
    renderNumber,
    renderField,
    renderFilePicker,
    SelectField,
} from "../../Utils/renderField/renderField";


const optionSelect = [
    {"id": "...", "name": "..."},
];

class BodyForm extends Component {

    render(){
        const {setPicture, data} = this.props;

        return (
            <div className="border-top p-0 px-3 pt-3">
                <div className="mb-3 col-12">
                    <strong className="text-muted d-block mb-2">Información personal</strong>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="name">Nombre (*)</label>
                            <Field
                                name="name"
                                placeholder="Ingrese el nombre"
                                component={renderField}
                            />
                        </div>

                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="last_name">Apellido (*)</label>
                            <Field
                                name="last_name"
                                placeholder="Ingrese el apellido"
                                component={renderField}
                            />
                        </div>

                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="address">Dirección</label>
                            <Field
                                name="address"
                                placeholder="Ingrese la dirección"
                                component={renderField}
                            />
                        </div>

                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="phone">Número de teléfono</label>
                            <Field
                                name="phone"
                                numberFormat="#### ####"
                                prefix="+502 "
                                placeholder="#### ####"
                                component={renderNumber}
                            />
                        </div>
                    </div>

                    <strong className="text-muted d-block mb-2 mt-4">Información de usuario</strong>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="rol">Tipo de usuario (*)</label>
                            <Field
                                name="rol"
                                options={data ? data.results : optionSelect}
                                component={SelectField}
                            />
                        </div>
                        <div className="col-md-6 col-12 mb-2">
                                <label htmlFor="email">Email (*)</label>
                                <Field
                                    name="email"
                                    placeholder="ejemplo@classroom.com"
                                    component={renderField}
                                />
                        </div>

                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="username">Nombre de usuario (*)</label>
                            <Field
                                name="username"
                                placeholder="Ingrese el nombre de usuario"
                                component={renderField}
                            />
                        </div>

                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                component={renderField}
                            />
                        </div>

                        <div className="col-12 mb-2">
                            <label htmlFor="picture">Imagen de perfil</label>
                            <Field
                                name="picture"
                                setFile={setPicture} 
                                component={renderFilePicker}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BodyForm;
