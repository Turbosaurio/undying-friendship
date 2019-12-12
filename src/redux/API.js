
export const mongoSample = {
	rows: [
		{
			'c921a9cd-44c8-4584-9be2-bb67bd8f3645':{
				rowTitle:{
					show: true,
					text: 'Row 1'
				},
				widgets_list: [
					'8c3875fb-8e8e-4ecc-a79f-d7bb75e07b61',
					'2500e0e7-ac1d-40f8-8146-9294638ed744',
					'1d2ffe76-a7bd-43b8-a832-69e32b994415',
				],
				widgets_list_size : [1,1,2]
			}
		},
		{
			'00ad6003-4b5d-4877-af37-1cf6042f74fe':{
				rowTitle:{
					show: true,
					text: 'Row 2'
				},
				widgets_list:[
					'f39841d2-0b9a-42ba-9a5e-5740cac24234',
					'0d2b89fa-b9f4-463a-b863-224e145e9b2a',
				],
				widgets_list_size : [1,1]
			}
		},
	],

	widgets: {
		'8c3875fb-8e8e-4ecc-a79f-d7bb75e07b61':{
			name: 'widget reinhold',
			contents: {
				img:{
					show: true,
					alt: 'forrest gump running',
					src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fearnthis.net%2Fwp-content%2Fuploads%2F2013%2F09%2Fforrest-gump-1.jpg&f=1&nofb=1',
				},
				excerpt: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus. Donec vitae dui tristique, pretium augue non, venenatis ante. Sed gravida fringilla pellentesque. In nec pretium nibh, ac semper arcu. Aliquam imperdiet viverra nisi, vitae sodales lorem ultricies ac. Phasellus non venenatis risus. Aliquam aliquet facilisis turpis, et aliquam orci volutpat in. Sed eget commodo tellus.',
				itemsList: {
					show: false,
				}
			},
		},
		'2500e0e7-ac1d-40f8-8146-9294638ed744':{
			name: 'widget jabi',
			contents: {
				img:{
					show: false,
				},
				excerpt:{
					show: true,
					text: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus. Donec vitae dui tristique, pretium augue non, venenatis ante. Sed gravida fringilla pellentesque. In nec pretium nibh, ac semper arcu. Aliquam imperdiet viverra nisi, vitae sodales lorem ultricies ac. Phasellus non venenatis risus. Aliquam aliquet facilisis turpis, et aliquam orci volutpat in. Sed eget commodo tellus.',
				},
				itemsList:{
					show: true,
					list: [1,2,3,4,5,6,7,8,9],
				}
			},
		},
		'1d2ffe76-a7bd-43b8-a832-69e32b994415':{
			name: 'widget peter',
			contents: {
				img:{
					show: false,
				},
				excerpt:{
					show: true,
					text: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus. Donec vitae dui tristique, pretium augue non, venenatis ante. Sed gravida fringilla pellentesque. In nec pretium nibh, ac semper arcu. Aliquam imperdiet viverra nisi, vitae sodales lorem ultricies ac. Phasellus non venenatis risus. Aliquam aliquet facilisis turpis, et aliquam orci volutpat in. Sed eget commodo tellus.',
				},
				itemsList:{
					show: true,
					list: [1,2,3,4,5,6,7,8,9],
				}
			},
		},

		'f39841d2-0b9a-42ba-9a5e-5740cac24234':{
			name: 'widget sanic',
			contents: {
				img:{
					show: false,
				},
				excerpt:{
					show: true,
					text: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus. Donec vitae dui tristique, pretium augue non, venenatis ante. Sed gravida fringilla pellentesque. In nec pretium nibh, ac semper arcu. Aliquam imperdiet viverra nisi, vitae sodales lorem ultricies ac. Phasellus non venenatis risus. Aliquam aliquet facilisis turpis, et aliquam orci volutpat in. Sed eget commodo tellus.',
				},
				itemsList:{
					show: true,
					list: [1,2,3,4,5,6,7,8,9],
				}
			},
		},
		'0d2b89fa-b9f4-463a-b863-224e145e9b2a':{
			name: 'widget kerouac',
			contents: {
				img:{
					show: false,
				},
				excerpt:{
					show: true,
					text: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus. Donec vitae dui tristique, pretium augue non, venenatis ante. Sed gravida fringilla pellentesque. In nec pretium nibh, ac semper arcu. Aliquam imperdiet viverra nisi, vitae sodales lorem ultricies ac. Phasellus non venenatis risus. Aliquam aliquet facilisis turpis, et aliquam orci volutpat in. Sed eget commodo tellus.',
				},
				itemsList:{
					show: true,
					list: [1,2,3,4,5,6,7,8,9],
				}
			},
		},
	},
}



function _getMongoStuff(){
	// TODO fetch stuff rom mongo
	return new Promise((res, rej) => {
		setTimeout( _ => res({...mongoSample}), 100)
	})
}


export const getInitialData = _ => {
	return Promise.all([
		_getMongoStuff()
	])
	.then(([
		mongo,
		finish
	]) => ({
		mongo,
		finish
	}))
}

