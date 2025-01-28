import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { CardContact } from "../component/CardContact.jsx";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    console.log(store.listContacts);

    return (
        <div className="container my-5">
            {/* Encabezado */}
            <div className="row mb-4">
                <div className="col text-center">
                    <h2 className="fw-bold text-primary">My Contacts</h2>
                    <p className="text-muted mb-0">
                        Keep track of your personal or professional network
                    </p>
                </div>
            </div>
            
            
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Link to="/AddContact">
                        <button className="btn btn-success shadow-sm">
                            <i className="fa fa-plus me-2"></i>
                            Add New Contact
                        </button>
                    </Link>
                </div>
            </div>

            
            <div className="row">
                <div className="col">
                    <ul className="list-group mt-3 shadow-lg">
                        {store.listContacts && store.listContacts.length > 0 ? (
                            store.listContacts.map((contact, index) => (
                                <CardContact contact={contact} key={index} />
                            ))
                        ) : (
                            <li className="list-group-item text-center py-4 text-muted">
                                No contacts found. Add a new contact to get started.
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
