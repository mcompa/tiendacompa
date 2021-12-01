import React from 'react'
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ articulo }) => {
	const { titulo, categoria, descripcion, descripcionLarga, precio, precioLista, stock, imagen, caracteristicas, galeria, financiacion } = articulo;

	const Agregar = (cantidad) => {
		console.log('Agregando ' + cantidad + ' unidades.');
	};

	return (
		<div className="container" style={{ color: "#000000" }}>
			<div className="card">
				<div className="card-body">
					<h3 className="card-title">{titulo}</h3>
					<h6 className="card-subtitle">{categoria}</h6>
					<div className="row">
						<div className="col-lg-5 col-md-5 col-sm-6">
							<div className="white-box text-center">
								<img src={imagen} alt={titulo} className="img-responsive" />
							</div>
							<div className="row">
								{
									galeria &&
									galeria.map(it => {
										return <div className="col-2" key={it}>
											<img src={it} width="50" height="50" alt={titulo} className="img-responsive" />
										</div>
									})
								}
							</div>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-6">
							<div className="row">
								<div className="col-12">
									<h4 className="box-title mt-5">{descripcion}</h4>
								</div>
								<div className="col-lg-7 col-md-7 col-sm-6">

									<h2 className="mt-4">
										<small className="text-muted" style={{ "textDecoration": "line-through", "fontSize": "1rem" }}> $ {precioLista}</small>
										<p style={{ "fontSize": "1.75rem" }}>Precio en un pago:</p>
										<p>$ <strong>{precio}</strong> </p>
									</h2>
									<ItemCount title={titulo} stock={stock} inicial={1} onAdd={Agregar} />
								</div>
								<div className="col-lg-5 col-md-5 col-sm-6">
									{financiacion &&
										<h2 className="mt-4">
											<small className="text-muted" style={{"fontSize": "1rem" }}> Financiación:</small>
											<p style={{ "fontSize": "1.75rem" }}>{financiacion.cantidadCuotas} cuotas de $ <strong>{financiacion.importeCuota}</strong></p>
											{
												!financiacion.intereses &&
												<p style={{ "color": "green" }}> SIN INTERES *</p>
											}
										</h2>
									}
								</div>
							</div>
							<div className="row">
								<h3 className="box-title mt-5">Tips</h3>
								<ul className="list-unstyled">
									<li><i className="material-icons" style={{ color: "green" }}>done_outline</i> Garantia Extendida</li>
									<li><i className="material-icons" style={{ color: "green" }}>done_outline</i> Envios Gratis a todo el pais (*)</li>
									<li><i className="material-icons" style={{ color: "green" }}>done_outline</i> Atencion las 24 hs</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<p className="text-muted" style={{"fontSize": "1rem" }}>{descripcionLarga}</p>
					</div>
					<div className="row">
						<div className="col-12">
							<h3 className="box-title mt-5">Caracteristicas</h3>
							<div className="table-responsive">
								<table className="table table-striped table-product" style={{"fontSize": "1rem" }}>
									<tbody>

										{
											caracteristicas &&
											caracteristicas.map(it => {
												return <tr key={it.nombre}>
													<td width="390">{it.nombre}</td>
													<td>{it.valor}</td>
												</tr>
											})
										}

									</tbody>
								</table>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default ItemDetail;