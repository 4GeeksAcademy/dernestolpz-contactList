import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const eliminarContacto = () => {
        if (!contact || !contact.id) {
            console.warn("Contacto no válido, no se puede eliminar.");
            return;
        }
        console.log("Eliminando contacto:", contact);
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item bg-light rounded-3 shadow-sm p-3 mb-3 border-0">
            <div className="row align-items-center">
                {/* Imagen */}
                <div className="col-md-3 text-center mb-3 mb-md-0">
                    <img
                        className="rounded-circle img-fluid shadow-sm"
                        style={{ maxWidth: "120px" }}
                        src="https://picsum.photos/170/170"
                        alt="Contact"
                    />
                </div>

                {/* Datos del contacto */}
                <div className="col-md-6 text-md-start text-center">
                    <h5 className="mb-1 fw-bold text-primary">{contact.name}</h5>
                    <p className="mb-1 text-muted">{contact.address}</p>
                    <p className="mb-1">{contact.phone}</p>
                    <p className="mb-1">{contact.email}</p>
                </div>

                {/* Botones de acción */}
                <div className="col-md-3 text-md-end text-center">
                    <Link
                        to={"/editContact/" + contact.id}
                        className="btn btn-outline-secondary me-2 mb-2 mb-md-0"
                        title="Edit Contact"
                    >
                        <i className="fa fa-eraser"></i>
                    </Link>
                    <button
                        className="btn btn-outline-danger"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={"#delete-contact-" + contact.id}
                        title="Delete Contact"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>

            {/* Modal de confirmación */}
            <div
                className="modal fade"
                id={"delete-contact-" + contact.id}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Are you sure?
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            You are about to delete a contact
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={eliminarContacto}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
