export const htmlElements = [
	{
		tag: 'h1',
		contents: ['Welcome to our website', 'About us', 'Contact us'],
		properties: [
			{ property: 'id', value: 'heading1' },
			{ property: 'class', value: 'main-heading' },
			{ property: 'style', value: 'text-align:center;' }
		]
	},
	{
		tag: 'p',
		contents: ['About our company', 'Our services', 'Meet our team'],
		properties: [
			{ property: 'id', value: 'paragraph1' },
			{ property: 'class', value: 'main-paragraph' },
			{ property: 'style', value: 'font-size:16px;' }
		]
	},
	{
		tag: 'img',
		contents: ['logo.jpg', 'banner.jpg', 'promo.jpg'],
		properties: [
			{ property: 'alt', value: 'Image of a example' },
			{ property: 'class', value: 'responsive-img' },
			{ property: 'width', value: '100px' }
		]
	},
	{
		tag: 'div',
		contents: ['main container', 'header', 'footer'],
		properties: [
			{ property: 'id', value: 'mainDiv' },
			{ property: 'class', value: 'main-div' },
			{ property: 'style', value: 'display:flex;' }
		]
	},
	{
		tag: 'nav',
		contents: ['main navigation', 'header navigation', 'footer navigation'],
		properties: [
			{ property: 'id', value: 'mainNav' },
			{ property: 'class', value: 'main-nav' },
			{ property: 'style', value: 'display:flex;' }
		]
	},
	{
		tag: 'a',
		contents: ['home', 'about us', 'contact us'],
		properties: [
			{ property: 'href', value: '#home' },
			{ property: 'class', value: 'link' },
			{ property: 'style', value: 'color:blue;' }
		]
	},
	{
		tag: 'form',
		content: [
			'A container for form elements',
			'A way to submit data',
			'A way to interact with the user'
		],
		properties: [
			{ property: 'id', value: 'form-container' },
			{ property: 'class', value: 'form-container' },
			{ property: 'method', value: 'post' }
		]
	},
	{
		tag: 'input',
		content: ['A form element for user input', 'A text field', 'A checkbox'],
		properties: [
			{ property: 'id', value: 'input-field' },
			{ property: 'class', value: 'input-field' },
			{ property: 'type', value: 'text' }
		]
	},
	{
		tag: 'textarea',
		content: ['A multi-line input field', 'A way to input large amounts of text', 'A form element'],
		properties: [
			{ property: 'id', value: 'text-area' },
			{ property: 'class', value: 'text-area' },
			{ property: 'rows', value: '10' }
		]
	},
	{
		tag: 'button',
		content: ['A clickable element', 'A way to submit a form', 'A way to initiate an action'],
		properties: [
			{ property: 'id', value: 'submit-button' },
			{ property: 'class', value: 'submit-button' },
			{ property: 'type', value: 'submit' }
		]
	},
	{
		tag: 'select',
		content: ['A dropdown list', 'A way to select one option', 'A form element'],
		properties: [
			{ property: 'id', value: 'select-field' },
			{ property: 'class', value: 'select-field' },
			{ property: 'multiple', value: 'multiple' }
		]
	},
	{
		tag: 'label',
		content: [
			'A way to describe an input element',
			'A text description of a form element',
			'A visual cue for the user'
		],
		properties: [
			{ property: 'for', value: 'input-field' },
			{ property: 'class', value: 'label-text' },
			{ property: 'style', value: 'font-size: 14px;' }
		]
	},
	{
		tag: 'fieldset',
		content: [
			'A container for form elements',
			'A way to group related form elements',
			'A visual grouping of form controls'
		],
		properties: [
			{ property: 'id', value: 'fieldset-container' },
			{ property: 'class', value: 'fieldset-container' },
			{ property: 'disabled', value: 'disabled' }
		]
	},
	{
		tag: 'legend',
		content: [
			'A caption for a fieldset',
			'A way to describe the form controls',
			'A title for the form'
		],
		properties: [
			{ property: 'id', value: 'legend-text' },
			{ property: 'class', value: 'legend-text' },
			{ property: 'style', value: 'font-weight: bold;' }
		]
	}
];
