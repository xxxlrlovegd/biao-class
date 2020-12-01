// import {route} from "./router/router"

import { router } from './route';

// console.log(route)
console.log('00000000');

const http = require('http');
const fs = require('querystring');
const serve = http.createServer((req, res) => {
	const url = req.url;
	const parts = url.split('?');
	const part = parts[0];
	const query = parts[1];
	const q = fs.decode(query);
	req.$query = q;
	let body: string | Function = router[part];
	if (body) {
		switch (typeof body) {
			case 'string':
				break;
			case 'object':
				body = JSON.stringify(body);
				break;
			case 'function':
				body = body(req, res);
				break;
			default:
				throw new Error('this is a error');

				break;
		}
	} else {
		req.statusCode = 404;
		body = 'Not found';
	}
	res.end(body);
});

serve.listen('8080', '127.1.1.1');
