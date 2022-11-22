export default {
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			description: 'the title of the skill',
			type: 'string',
		},

		{
			name: 'progress',
			title: 'Progess',
			description: 'The progress of the skill from 0 to 100',
			type: 'number',
			validation: (Rule) => Rule.min(0).max(100),
		},

		{
			name: 'image',
			title: 'Image',
			type: 'image',
			option: {
				hotspot: true,
			},
		},
	],

};