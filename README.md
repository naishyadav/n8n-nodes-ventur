# n8n-nodes-ventur

[![npm version](https://badge.fury.io/js/%40venturhq%2Fn8n-nodes-ventur.svg)](https://www.npmjs.com/package/@venturhq/n8n-nodes-ventur)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

An n8n community node for integrating with the Ventur Business Intelligence API. This node provides seamless access to 10 different API endpoints for comprehensive business intelligence, company research, people profiles, and market analysis.

## ✨ Features

- **🎯 10 API Endpoints**: Access all Ventur API endpoints through a single, intuitive n8n node
- **🔄 Dynamic UI**: Input fields dynamically appear based on selected endpoint
- **🔐 Secure Authentication**: API key management with password protection
- **💡 Comprehensive Tooltips**: Detailed descriptions and guidance for all parameters
- **📊 Response Simplification**: Option to return simplified responses for complex data structures
- **⚡ Error Handling**: Robust error messages and graceful failure handling

## 📦 Installation

### From npm (recommended for production)

```bash
npm install @venturhq/n8n-nodes-ventur
```

### From source

1. Clone this repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Build the node:
    ```bash
    npm run build
    ```
4. Install in n8n by uploading the built package or using the npm package

## Setup

1. Obtain a Ventur API key from [Ventur API](https://api.venturhq.com)
2. In n8n, go to Settings > Community Nodes
3. Install the Ventur node
4. Add credentials:
   - **API Key**: Your Ventur API key
   - **Base URL**: `https://api.venturhq.com` (default)

## Available Endpoints

### Company Snapshot
Get comprehensive company intelligence and profiles
- **Input**: Company name
- **Use case**: Detailed company research

### People Snapshot
Get detailed person profiles and professional intelligence
- **Input**: Person name
- **Use case**: Executive and professional research

### Web Search
AI-powered web search with intelligent analysis
- **Input**: Search query
- **Use case**: Web research and analysis

### Demo Research
Business intelligence research for demo preparation
- **Input**: Research query
- **Use case**: Preparing business demos

### Enterprise Company Report
Detailed enterprise-level company analysis
- **Inputs**: Company name, website, country
- **Use case**: In-depth enterprise analysis

### Discover Companies
Find companies matching specific criteria
- **Input**: Search criteria
- **Use case**: Company discovery and lead generation

### Customer Feedback
Analyze customer reviews and sentiment
- **Input**: Company name
- **Use case**: Customer sentiment analysis

### Recruitment Data
Extract job market intelligence and company benefits
- **Input**: Company name
- **Use case**: HR and recruitment research

### Technology Lookup
Analyze company technology stacks and infrastructure
- **Input**: Company name
- **Use case**: Technology stack analysis

### Official Records
Access official company registration data
- **Input**: Company name
- **Use case**: Legal and registration information

## Usage Examples

### Company Research Workflow

1. **Trigger**: Schedule or webhook
2. **Ventur Node**:
   - Endpoint: Company Snapshot
   - Query: `{{$json.companyName}}`
3. **Output**: Company intelligence data

### Advanced Workflow with Simplification

For endpoints returning complex data, enable "Simplify Response" to get a cleaner output with the most important fields.

## Node Parameters

### Common Parameters

- **Endpoint**: Select the API endpoint to use
- **Simplify Response**: Return simplified data instead of raw response (recommended for complex responses)

### Endpoint-Specific Parameters

Most endpoints require a `query` parameter. Some have additional fields:

- **Enterprise Company Report**: Requires company name, website, and country
- **Discover Companies**: Requires search input

### Additional Fields

Some endpoints support additional fields in a collection:
- **Timestamp**: ISO 8601 timestamp (auto-generated if not provided)
- **Source**: Request source identifier (defaults to "n8n-integration")

## Error Handling

The node provides clear error messages for:
- Invalid API keys
- Missing required parameters
- API rate limits
- Network issues

## Best Practices

- Use the "Simplify Response" option for endpoints returning large amounts of data
- Implement proper error handling in your workflows
- Respect API rate limits
- Store API keys securely using n8n credentials

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🏢 About Ventur

[Ventur](https://venturhq.com) is a leading business intelligence platform providing comprehensive company and people data through advanced AI-powered APIs. Our mission is to democratize access to high-quality business intelligence for developers and businesses worldwide.

## 📞 Support

- **Ventur API Documentation**: https://docs.venturhq.com
- **n8n Community Nodes**: https://docs.n8n.io/integrations/community-nodes/
- **n8n Forums**: https://community.n8n.io/
- **Email Support**: hello@venturhq.co.uk

---

**Built with ❤️ by [Ventur HQ Ltd.](https://venturhq.com)**