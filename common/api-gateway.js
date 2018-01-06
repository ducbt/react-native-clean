export default class ApiGateway {
	configEndpoint = null;
	headers = {
		Accept: 'application/json', 'Content-Type': 'application/json'
	};
	get = {
		method: 'GET',
		headers: this.headers,
	};
	post = {
		method: 'POST',
		headers: this.headers
	};

	constructor(config) {
		this.configEndpoint = config;
	}

	async load() {
		return fetch(this.configEndpoint, ApiGateway.generateHeader(null, this.get, false))
			.then(ApiGateway.unpackJson);
	}

	async save(dto) {
		return fetch(this.configEndpoint, ApiGateway.generateHeader(dto, this.post, true))
			.then(ApiGateway.unpackJson);
	}

	static generateHeader(dto, headerArg, hasBody) {
		const header = headerArg;
		if(hasBody) header.body = JSON.stringify(dto);
		return header;
	}

	static async unpackJson(response) {
		return response.json();
	}

}
