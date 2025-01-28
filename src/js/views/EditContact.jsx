import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();



    return (
        <div className="container my-5">

            <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-6">

                    <div className="card shadow p-4">
                        <h1 className="text-center mb-4">Update Contact</h1>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput1" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput1"
                                    placeholder="Full name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput3" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput3"
                                    placeholder="Enter phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput4" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput4"
                                    placeholder="Enter address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </div>

                            <div className="d-grid">
                                <button type="button" className="btn btn-primary">
                                    Update Contact
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="text-center mt-3">
                        <Link to="/" className="text-decoration-none">
                            <i className="fa fa-arrow-left me-1"></i> volver a Contacts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
