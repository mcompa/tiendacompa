const Data = [
	{
		id: 1,
		sku: '187-SAM-498',
		titulo: 'Smart Tv Samsung',
		descripcion: 'Smart Tv Samsung 43" Full Hd',
		descripcionLarga: 'SMART TV LED SAMSUNG UN43T5300AG 43". HDR. High-Dynamic Range nivela la expresión brillante del televisor. para que disfrutes de un inmenso espectro de colores y detalles. incluso en escenas oscuras. PURCOLOR hace que te sientas como si estuvieras en la escena. gracias a la expresión de una amplia gama de colores para un rendimiento de imagen óptimo y una experiencia de visualización inmersiva. Smart Hub & One Remote. Solo necesitas de un control remoto para descubrir una infinidad de variedad de contenido. Podrás controlar desde el decodificador hasta la consola de juegos. las aplicaciones e incluso la televisión en vivo.',
		stock: 2,
		precio: 55999.0,
		precioLista: 65999.0,
		categoria: "TV y Video",
		categoriaId: 'tv-video',
		financiacion: {
			cantidadCuotas: 12,
			importeCuota: 4667,
			intereses: false
		},
		caracteristicas: [
			{
				nombre: "Origen del Producto",
				valor: "ARGENTINA"
			},
			{
				nombre: "Alto en cm",
				valor: "59.66"
			},
			{
				nombre: "Ancho en cm",
				valor: "97.99"
			},
			{
				nombre: "Profundidad en cm",
				valor: "17.03"
			},
			{
				nombre: "Peso en kg",
				valor: "8.20"
			},
			{
				nombre: "Fabricación",
				valor: "Nacional"
			},
			{
				nombre: "Meses de Garantía",
				valor: "12"
			},
			{
				nombre: "Marca",
				valor: "SAMSUNG"
			},
			{
				nombre: "Tamaño de Pantalla",
				valor: "43"
			}
		],
		color: "negro",
		talle: "",
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-187-SAM-498.png',
		galeria: [
			'https://www.casadelaudio.com/Image/0/500_500-187-SAM-498.png',
			'https://www.casadelaudio.com/Image/0/500_501-187-SAM-498.png',
			'https://www.casadelaudio.com/Image/0/500_502-187-SAM-498.png',
			'https://www.casadelaudio.com/Image/0/500_503-187-SAM-498.png',
			'https://www.casadelaudio.com/Image/0/500_504-187-SAM-498.png'
		]
	},
	{
		id: 2,
		sku: '330-ESC-211',
		titulo: 'Cocina Escorial',
		descripcion: 'Cocina Escorial Candor Gas Envasado',
		descripcionLarga: 'Cocina Escorial Candor S2 Blanca Gas Envasado 51CM',
		stock: 0,
		precio: 20999.0,
		precioLista: 20999.0,
		categoria: "Cocina",
		categoriaId: 'cocina',
		financiacion: {
			cantidadCuotas: 12,
			importeCuota: 4667,
			intereses: false
		},
		caracteristicas: [
			{
				nombre: "HDMI",
				valor: "SI"
			}
		],
		color: "negro",
		talle: "",
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png',
		galeria: [
			'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png'
		]
	},
	{
		id: 3,
		sku: '252-RCA-202',
		titulo: 'Split Rca',
		descripcion: 'Aire Split Rca RHS3200FC f/c 3200 Watts',
		descripcionLarga: 'Aire Split Rca RHS3200FC f/c 3200 Watts',
		stock: 38,
		precio: 46999.0,
		precioLista: 46999.0,
		categoria: "Refrigeración",
		categoriaId: 'refrigeracion',
		financiacion: {
			cantidadCuotas: 12,
			importeCuota: 1111,
			intereses: false
		},
		caracteristicas: [
			{
				nombre: "HDMI",
				valor: "SI"
			},
			{
				nombre: "Smart",
				valor: "SI"
			},
			{
				nombre: "Control Remoto",
				valor: "SI"
			},
			{
				nombre: "Tension",
				valor: "220v"
			}
		],
		color: "negro",
		talle: "",
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png',
		galeria: [
			'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png',
			'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png'
		]
	}
];

const Categorias = [
	{
		id: 'tv-video',
		nombre: 'TV y Video'
	},
	{
		id: 'refrigeracion',
		nombre: 'Refrigeración'
	},
	{
		id: 'cocina',
		nombre: 'Cocina'
	},
];

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Data)
		}, 2000);
	})
}

export const getItem = (sku) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(
				Data.find((articulo) => { 
					return articulo.sku === sku
				})
			)
		}, 2000);
	})
}

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Categorias)
		}, 2000);
	})
}