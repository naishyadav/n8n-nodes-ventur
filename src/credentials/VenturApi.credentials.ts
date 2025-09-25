import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class VenturApi implements ICredentialType {
	name = 'venturApi';
	displayName = 'Ventur API';
	documentationUrl = 'https://api.venturhq.com';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.venturhq.com',
			required: true,
		},
	];
}