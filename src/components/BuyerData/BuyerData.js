import React, { useState } from 'react';

const BuyerData = ({ buyerValues, editMode, saveBuyer }) => {

	const [formData, setFormData] = useState(buyerValues);
	
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		//console.log(formData);
		saveBuyer(formData);
	};

	return (
		<form className="row g-3">
			<div className="col-md-6 col-sm-12">
				<label className="form-label" htmlFor="name">Nombres</label>
				<input type="text" className="form-control" disabled={!editMode} name='name' value={formData.name} onChange={handleChange} id="name" maxLength="30" placeholder="Juan" />
			</div>
			<div className="col-md-6 col-sm-12">
				<label className="form-label" htmlFor="lastName">Apellido</label>
				<input type="text" className="form-control" disabled={!editMode} name='lastName' value={formData.lastName} onChange={handleChange} id="lastName" maxLength="30" placeholder="Perez" />
			</div>
			<div className="col-md-6 col-sm-12">
				<label className="form-label" htmlFor="mail">Email</label>
				<input type="email" className="form-control" disabled={!editMode} name='mail' value={formData.mail} onChange={handleChange} id="mail" maxLength="150" placeholder="jperez@gmail.com" />
			</div>
			<div className="col-md-6 col-sm-12">
				<label className="form-label" htmlFor="phone">Teléfono</label>
				<input type="text" className="form-control" disabled={!editMode} name='phone' value={formData.phone} onChange={handleChange} id="phone" maxLength="20" placeholder="1234-5678" />
			</div>
			<div className="col-12">
				<label className="form-label" htmlFor="address">Dirección</label>
				<input type="text" className="form-control" disabled={!editMode} name='address' value={formData.address} onChange={handleChange} id="address" maxLength="200" placeholder="av. Siempre viva 741" />
			</div>
			<div className="col-12">
				<label className="form-label" htmlFor="comments">Comentarios</label>
				<input type="text" className="form-control" disabled={!editMode} name='comments' value={formData.comments} onChange={handleChange} id="comments" maxLength="500" placeholder="..." />
			</div>
			{ editMode && 
				<div className="col-12">
					<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
				</div>
			}
		</form>
	)

};

export default BuyerData;
