import React, { useState } from 'react';

const BuyerData = ({ buyerValues, editMode, saveBuyer }) => {

	const [formData, setFormData] = useState(buyerValues);
	const [msgErrorDatos, setMsgErrorDatos] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		let mensajes = '';

		if (formData.name.length < 3) {
			mensajes += ' * Tenes que completar un nombre.';
		}

		if ((formData.mail !== formData.remail) || formData.mail.length < 10) {
			mensajes += ' * El mail debe ser ingresado correctamente ambas veces.';
		}

		if (mensajes.length > 0) {
			setMsgErrorDatos(mensajes);
		} else {
			saveBuyer(formData);
		}
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
			{
				editMode &&

				<div className="col-md-6 col-sm-12">
					<label className="form-label" htmlFor="remail">Reingresar Email</label>
					<input type="email" className="form-control" name='remail' onChange={handleChange} id="remail" maxLength="150" placeholder="jperez@gmail.com" />
				</div>
			}
			<div className="col-md-6 col-sm-12">
				<label className="form-label" htmlFor="phone">Tel??fono</label>
				<input type="text" className="form-control" disabled={!editMode} name='phone' value={formData.phone} onChange={handleChange} id="phone" maxLength="20" placeholder="1234-5678" />
			</div>
			<div className="col-12">
				<label className="form-label" htmlFor="address">Direcci??n</label>
				<input type="text" className="form-control" disabled={!editMode} name='address' value={formData.address} onChange={handleChange} id="address" maxLength="200" placeholder="av. Siempre viva 741" />
			</div>
			<div className="col-12">
				<label className="form-label" htmlFor="comments">Comentarios</label>
				<input type="text" className="form-control" disabled={!editMode} name='comments' value={formData.comments} onChange={handleChange} id="comments" maxLength="500" placeholder="..." />
			</div>
			{editMode &&
				<div className="col-12">
					<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
					<span className='m-3 text-danger'>{msgErrorDatos}</span>
				</div>

			}
		</form>
	)

};

export default BuyerData;
