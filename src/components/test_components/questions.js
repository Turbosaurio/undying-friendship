export default {	
		thankyou: false,
		alerts: {},
		questions:[
			{
				key: 'q1',
				text: 'give information',
				type: 'input',
				options: [
					{
						placeholder: 'first name',
						name: 'firstname',
						type: 'text',
					},
					{
						placeholder: 'second name',
						name: 'secondName',
						type: 'text',
					},
					{
						placeholder: 'birth',
						name: 'birth',
						type: 'date',
					},
					{
						placeholder: 'email',
						name: 'email',
						type: 'email',
					},
				],
			},
			{
				key: 'q2',
				text: 'Whats the worst thing you can say on a first date?',
				type: 'options',
				options: ['talk about her daddy issues', 'tell her to shut up, that you know best', 'talk about the shit you took earlier'],
			},
			{
				key: 'q3',
				text: 'Would you rather be stuck in a house with someone you hate or be stuck in a house alone?',
				type: 'options',
				options: ['yes', 'no', 'I dont know'],
			},
			{
				key: 'q4',
				text: 'If you were the opposite gender for one day, what would you do?',
				type: 'options',
				options: ['abuse my male/female privilege', 'talk shit about my previous gender']
			},
			{
				key: 'q5',
				text: 'give us more infomation about yourself',
				type: 'input',
				options: [
					{
						placeholder: 'something',
						name: 'something',
						type: 'text',
					},
				]
			},
			{
				key: 'q6',
				text: 'select your favorite president',
				type: 'select',
				options: ['lopez obrador', 'AMLO', 'Gansopolis'],
			}
		],
		answers:{
			'q1': {},
			'q5': {},
		}
	
}