const Data = [
	{
		id: 1,
		sku: '187-SAM-498',
		titulo: 'Smart Tv Samsung',
		descripcion: 'Smart Tv Samsung 43" UN43T5300AGCZB Full Hd',
		stock: 2,
		precio: 49999.0,
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-187-SAM-498.png'
	},
	{
		id: 2,
		sku: '330-ESC-211',
		titulo: 'Cocina Escorial',
		descripcion: 'Cocina Escorial Candor S2 Blanca Gas Envasado 51CM',
		stock: 0,
		precio: 20999.0,
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-330-ESC-211_01.png'
	},
	{
		id: 3,
		sku: '252-RCA-202',
		titulo: 'Split Rca',
		descripcion: 'Aire Split Rca RHS3200FC f/c 3200 Watts',
		stock: 38,
		precio: 46999.0,
		imagen: 'https://www.casadelaudio.com/Image/0/500_500-252-RCA-202_01.png'
	}
];

export const getArticulos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Data)
		}, 2000);
	})
}