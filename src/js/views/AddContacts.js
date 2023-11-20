import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const AddContacts = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        agenda_slug: "Paulmak21",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(formData);
    };
    console.log(formData)
    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="inputName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="" onChange={handleChange} name="full__name"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Adress</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" onChange={handleChange} name="email" />
                            <div id="emailHelp" className="form-text"></div>
                        </div><div className="col-12">
                            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhone" placeholder="" onChange={handleChange} name="phone" />
                        </div><div className="col-12 mb-3">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="" onChange={handleChange} name="address" />
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar Contacto</button>
                    </form>
                    </div>
                    </div>
        </div>
    );
};