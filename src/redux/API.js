const defaultWidgetSettings = {
	widgetSettings:{
		colorScheme: 'bg_1',
		showImage: true,
		imageShape: 'square',
		summaryLayout: 'a',
		listColumns: 2,
		widgetSpacing: 10,
		slick: true,
	}
}

const defaultRowSettings = {
	constrain: true,
	showTitle: true,
	rowSpacing: 20,
}

const columnDefaultSettings = {
	margin: 10,
}

const defaultContents = {
	title:{
		show: true,
		text: 'title 1'
	},
	img:{
		show: "true",
		alt: 'forrest gump running',
		src: 'https://www.mediasteak.com/wp-content/uploads/Mediasteak-space-weltraum-all.jpg',
	},				
	excerpt:{
		show: "true",
		text: 'Ut mollis consectetur purus quis tincidunt. Vestibulum et odio odio. Ut dapibus elementum lobortis. Vestibulum hendrerit a ante id fringilla. Sed laoreet nunc eros, et condimentum nisi maximus eu. Curabitur et ultricies enim, at pulvinar metus.',
	},
	itemsList: {
		show: "true",
		list: [
			{name: 1, text:'hola'},
			{name: 2, text:'cola'},
			{name: 3, text:'loca'},
			{name: 4, text:'caol'},
			{name: 5, text:'loac'},
		],
	},
}


export const mongoSample = {
	rows: {
		'c921a9cd-44c8-4584-9be2-bb67bd8f3645':{
			rowSettings:{
				title: 'Row Contents 1',
				...defaultRowSettings,
			},
			columns_list:[
				'4c8479c5-e9c9-403a-94d7-52b8a577e052',
				'a12b3e61-8098-44a6-9088-59b3807b636f',
			],
		},
		'00ad6003-4b5d-4877-af37-1cf6042f74fe':{
			rowSettings:{
				title: 'Row Contents 2',
				...defaultRowSettings,
			},
			columns_list:[
				'6db368d1-9231-4535-81a4-40e0ac27ad1d',
				'53d6da9e-38c5-4b8f-8245-cbde44808555',
			]
		}
	},

	columns:{
		'4c8479c5-e9c9-403a-94d7-52b8a577e052':{
			columnSettings:{
				...columnDefaultSettings,
			},
			widgets_list: [
				'8c3875fb-8e8e-4ecc-a79f-d7bb75e07b61',
			],
		},
		'a12b3e61-8098-44a6-9088-59b3807b636f':{
			columnSettings:{
				...columnDefaultSettings,
			},
			widgets_list: [
				'2500e0e7-ac1d-40f8-8146-9294638ed744',
				'1d2ffe76-a7bd-43b8-a832-69e32b994415',
			],
		},
		'6db368d1-9231-4535-81a4-40e0ac27ad1d':{
			columnSettings:{
				...columnDefaultSettings,
			},
			widgets_list: [
				'f39841d2-0b9a-42ba-9a5e-5740cac24234',
			],
		},
		'53d6da9e-38c5-4b8f-8245-cbde44808555':{
			columnSettings:{
				...columnDefaultSettings,
			},
			widgets_list: [
				'0d2b89fa-b9f4-463a-b863-224e145e9b2a',
			
			],
		}

	},


	widgets: {
		'8c3875fb-8e8e-4ecc-a79f-d7bb75e07b61':{
			...defaultWidgetSettings,
			contents: {
				name: 'Widget reinhold',
				...defaultContents,
			},
		},
		'2500e0e7-ac1d-40f8-8146-9294638ed744':{
			...defaultWidgetSettings,
			contents: {
				name: 'Widget jabi',
				...defaultContents,
			},
		},
		'1d2ffe76-a7bd-43b8-a832-69e32b994415':{
			...defaultWidgetSettings,
			contents: {
				name: 'Widget peter',
				...defaultContents,
			},
		},

		'f39841d2-0b9a-42ba-9a5e-5740cac24234':{
			...defaultWidgetSettings,
			contents: {
				name: 'Widget sanic',
				...defaultContents,
			},
		},
		'0d2b89fa-b9f4-463a-b863-224e145e9b2a':{
			...defaultWidgetSettings,
			contents: {
				name: 'Widget kerouac',
				...defaultContents,
			},
		},
	},
}



function _getMongoStuff(){
	// TODO fetch stuff rom mongo
	return new Promise((res, rej) => {
		setTimeout( _ => res({...mongoSample}), 1000)
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

