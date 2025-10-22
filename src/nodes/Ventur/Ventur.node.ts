import {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Ventur implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ventur',
		name: 'ventur',
		icon: 'file:ventur.png',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["endpoint"]}}',
		description: 'Access Ventur Business Intelligence API endpoints',
		defaults: {
			name: 'Ventur',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'venturApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Venture Intelligence Endpoint',
				name: 'endpoint',
				type: 'options',
				options: [
					{
						name: 'Company Snapshot',
						value: 'companySnapshot',
						description: 'Get comprehensive company intelligence and profiles',
					},
					{
						name: 'People Snapshot',
						value: 'peopleSnapshot',
						description: 'Get detailed person profiles and professional intelligence',
					},
					{
					name: 'Web Search',
					value: 'webSearch',
					description: 'AI-powered web search with intelligent analysis',
				},
				{
					name: 'Enterprise Company Report',
					value: 'enterpriseCompanyReport',
					description: 'Detailed enterprise-level company analysis',
				},
					{
						name: 'Discover Companies',
						value: 'discoverCompanies',
						description: 'Find companies matching specific criteria',
					},
					{
						name: 'Customer Feedback',
						value: 'customerFeedback',
						description: 'Analyze customer reviews and sentiment',
					},
					{
						name: 'Recruitment Data',
						value: 'recruitmentData',
						description: 'Extract job market intelligence and company benefits',
					},
					{
						name: 'Technology Lookup',
						value: 'technologyLookup',
						description: 'Analyze company technology stacks and infrastructure',
					},
					{
						name: 'Official Records',
						value: 'officialRecords',
						description: 'Access official company registration data',
					},
				],
				default: 'companySnapshot',
				required: true,
				description: 'Select the Ventur API endpoint to use',
			},
			{
				displayName: 'Company Name',
				name: 'companySnapshotName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['companySnapshot'],
					},
				},
				description: 'Please enter a company name, e.g., Monzo Bank',
			},
			{
				displayName: 'Person Name',
				name: 'personName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['peopleSnapshot'],
					},
				},
				description: 'Please enter a person\'s name, e.g., John Doe',
			},
			{
				displayName: 'Search Query',
				name: 'webSearchQuery',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['webSearch'],
					},
				},
				description: 'Enter a search query',
			},
			{
				displayName: 'Company Name',
				name: 'customerFeedbackCompanyName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['customerFeedback'],
					},
				},
				description: 'Please enter a company name, e.g., Monzo Bank',
			},
			{
				displayName: 'Company Name',
				name: 'recruitmentCompanyName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['recruitmentData'],
					},
				},
				description: 'Please enter a company name',
			},
			{
				displayName: 'Company Name',
				name: 'technologyCompanyName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['technologyLookup'],
					},
				},
				description: 'Please enter a company name',
			},
			{
				displayName: 'Company Name',
				name: 'officialRecordsCompanyName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['officialRecords'],
					},
				},
				description: 'Please enter a company name (UK companies only)',
			},
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['enterpriseCompanyReport'],
					},
				},
				description: 'The company name for analysis',
			},
			{
				displayName: 'Company Website',
				name: 'companyWebsite',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['enterpriseCompanyReport'],
					},
				},
				description: 'The company website URL',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['enterpriseCompanyReport'],
					},
				},
				description: 'The company country',
			},
			{
				displayName: 'Search Criteria',
				name: 'searchInput',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						endpoint: ['discoverCompanies'],
					},
				},
				description: 'Enter search criteria for discovering companies, e.g., pre-seed investors in the UK',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('venturApi');
		const baseUrl = credentials.baseUrl as string;
		const apiKey = credentials.apiKey as string;

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const endpoint = this.getNodeParameter('endpoint', itemIndex) as string;

				let requestBody: IDataObject = {};
				let apiEndpoint = '';

				// Build request based on selected endpoint
				switch (endpoint) {
					case 'companySnapshot':
						apiEndpoint = '/api/v1/company-snapshot';
						requestBody = {
							query: this.getNodeParameter('companySnapshotName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					case 'peopleSnapshot':
						apiEndpoint = '/api/v1/people-snapshot';
						requestBody = {
							query: this.getNodeParameter('personName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					case 'webSearch':
						apiEndpoint = '/api/v1/web-search';
						requestBody = {
							query: this.getNodeParameter('webSearchQuery', itemIndex),
						};
						break;

					case 'enterpriseCompanyReport':
						apiEndpoint = '/api/v1/enterprise-company-report';
						requestBody = {
							company_name: this.getNodeParameter('companyName', itemIndex),
							company_website: this.getNodeParameter('companyWebsite', itemIndex),
							country: this.getNodeParameter('country', itemIndex),
						};
						break;

					case 'discoverCompanies':
						apiEndpoint = '/api/v1/discover-companies';
						requestBody = {
							search_input: this.getNodeParameter('searchInput', itemIndex),
						};
						break;

					case 'customerFeedback':
						apiEndpoint = '/api/v1/customer-feedback';
						requestBody = {
							query: this.getNodeParameter('customerFeedbackCompanyName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					case 'recruitmentData':
						apiEndpoint = '/api/v1/recruitment-data';
						requestBody = {
							query: this.getNodeParameter('recruitmentCompanyName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					case 'technologyLookup':
						apiEndpoint = '/api/v1/technology-lookup';
						requestBody = {
							query: this.getNodeParameter('technologyCompanyName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					case 'officialRecords':
						apiEndpoint = '/api/v1/official-records';
						requestBody = {
							query: this.getNodeParameter('officialRecordsCompanyName', itemIndex),
							timestamp: new Date().toISOString(),
							source: 'ventur-n8n-integration',
						};
						break;

					default:
						throw new Error(`Unknown endpoint: ${endpoint}`);
				}

				const response = await this.helpers.request({
					method: 'POST',
					url: `${baseUrl}${apiEndpoint}`,
					headers: {
						'X-API-Key': apiKey,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(requestBody),
					json: true,
				});

				const result = response;

				returnData.push({
					json: result,
				});

						} catch (error) {
							if (this.continueOnFail()) {
								returnData.push({
									json: { error: error instanceof Error ? error.message : String(error) },
								});
								continue;
							}
							throw error;
						}
					}
			
					return [returnData];
				}
			}