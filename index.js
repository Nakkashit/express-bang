export default function () {
	return function (_, res, next) {
		res.bang = {};
		/**
		 * @param {string} [message="Bad Request"] - message key for error message
		 **/
		res.bang.badRequest = (message = "Bad Request") => {
			console.log(res);
			this.send(400).json({
				error: "Bad Request",
				message: message,
				statusCode: 400,
			});
		};

		/**
		 * @param {string} [message="Unauthorized"] - message key for error message
		 **/
		res.bang.unauthorized = (message = "Unauthorized") => {
			this.send(401).json({
				error: "Unauthorized",
				message: message,
				statusCode: 401,
			});
		};

		/**
		 * @param {string} [message="Payment Required"] - message key for error message
		 **/
		res.bang.paymentRequired = (message = "Payment Required") => {
			this.send(402).json({
				error: "Payment Required",
				message: message,
				statusCode: 402,
			});
		};

		/**
		 * @param {string} [message="Forbidden"] - message key for error message
		 **/
		res.bang.forbidden = (message = "Forbidden") => {
			this.send(403).json({
				error: "Forbidden",
				message: message,
				statusCode: 403,
			});
		};

		/**
		 * @param {string} [message="Not Found"] - message key for error message
		 **/
		res.bang.notFound = (message = "Not Found") => {
			this.send(404).json({
				error: "Not Found",
				message: message,
				statusCode: 404,
			});
		};

		/**
		 * @param {string} [message="Method Not Allowed"] - message key for error message
		 **/
		res.bang.methodNotAllowed = (message = "Method Not Allowed") => {
			this.send(405).json({
				error: "Method Not Allowed",
				message: message,
				statusCode: 405,
			});
		};

		/**
		 * @param {string} [message="Not Acceptable"] - message key for error message
		 **/
		res.bang.notAcceptable = (message = "Not Acceptable") => {
			this.send(406).json({
				error: "Not Acceptable",
				message: message,
				statusCode: 406,
			});
		};

		/**
		 * @param {string} [message="Proxy Authentication Required"] - message key for error message
		 **/
		res.bang.proxyAuthenticationRequired = (
			message = "Proxy Authentication Required",
		) => {
			this.send(407).json({
				error: "Proxy Authentication Required",
				message: message,
				statusCode: 407,
			});
		};

		/**
		 * @param {string} [message="Request Timeout"] - message key for error message
		 **/
		res.bang.requestTimeout = (message = "Request Timeout") => {
			this.send(408).json({
				error: "Request Timeout",
				message: message,
				statusCode: 408,
			});
		};

		/**
		 * @param {string} [message="Conflict"] - message key for error message
		 **/
		res.bang.conflict = (message = "Conflict") => {
			this.send(409).json({
				error: "Conflict",
				message: message,
				statusCode: 409,
			});
		};

		/**
		 * @param {string} [message="Gone"] - message key for error message
		 **/
		res.bang.gone = (message = "Gone") => {
			this.send(410).json({
				error: "Gone",
				message: message,
				statusCode: 410,
			});
		};

		/**
		 * @param {string} [message="Length Required"] - message key for error message
		 **/
		res.bang.lengthRequired = (message = "Length Required") => {
			this.send(411).json({
				error: "Length Required",
				message: message,
				statusCode: 411,
			});
		};

		/**
		 * @param {string} [message="Precondition Failed"] - message key for error message
		 **/
		res.bang.preconditionFailed = (message = "Precondition Failed") => {
			this.send(412).json({
				error: "Precondition Failed",
				message: message,
				statusCode: 412,
			});
		};

		/**
		 * @param {string} [message="Payload Too Large"] - message key for error message
		 **/
		res.bang.payloadTooLarge = (message = "Payload Too Large") => {
			this.send(413).json({
				error: "Payload Too Large",
				message: message,
				statusCode: 413,
			});
		};

		/**
		 * @param {string} [message="URI Too Long"] - message key for error message
		 **/
		res.bang.uriTooLong = (message = "URI Too Long") => {
			this.send(414).json({
				error: "URI Too Long",
				message: message,
				statusCode: 414,
			});
		};

		/**
		 * @param {string} [message="Unsupported Media Type"] - message key for error message
		 **/
		res.bang.unsupportedMediaType = (message = "Unsupported Media Type") => {
			this.send(415).json({
				error: "Unsupported Media Type",
				message: message,
				statusCode: 415,
			});
		};

		/**
		 * @param {string} [message="Range Not Satisfiable"] - message key for error message
		 **/
		res.bang.rangeNotSatisfiable = (message = "Range Not Satisfiable") => {
			this.send(416).json({
				error: "Range Not Satisfiable",
				message: message,
				statusCode: 416,
			});
		};

		/**
		 * @param {string} [message="Expectation Failed"] - message key for error message
		 **/
		res.bang.expectationFailed = (message = "Expectation Failed") => {
			this.send(417).json({
				error: "Expectation Failed",
				message: message,
				statusCode: 417,
			});
		};

		/**
		 * @param {string} [message="I'm a Teapot"] - message key for error message
		 **/
		res.bang.teapot = (message = "I'm a Teapot") => {
			this.send(418).json({
				error: "I'm a Teapot",
				message: message,
				statusCode: 418,
			});
		};

		/**
		 * @param {string} [message="Misdirected Request"] - message key for error message
		 **/
		res.bang.misdirectedRequest = (message = "Misdirected Request") => {
			this.send(421).json({
				error: "Misdirected Request",
				message: message,
				statusCode: 421,
			});
		};

		/**
		 * @param {string} [message="Unprocessable Entity"] - message key for error message
		 **/
		res.bang.unprocessableEntity = (message = "Unprocessable Entity") => {
			this.send(422).json({
				error: "Unprocessable Entity",
				message: message,
				statusCode: 422,
			});
		};

		/**
		 * @param {string} [message="Locked"] - message key for error message
		 **/
		res.bang.locked = (message = "Locked") => {
			this.send(423).json({
				error: "Locked",
				message: message,
				statusCode: 423,
			});
		};

		/**
		 * @param {string} [message="Failed Dependency"] - message key for error message
		 **/
		res.bang.failedDependency = (message = "Failed Dependency") => {
			this.send(424).json({
				error: "Failed Dependency",
				message: message,
				statusCode: 424,
			});
		};

		/**
		 * @param {string} [message="Too Early"] - message key for error message
		 **/
		res.bang.tooEarly = (message = "Too Early") => {
			this.send(425).json({
				error: "Too Early",
				message: message,
				statusCode: 425,
			});
		};

		/**
		 * @param {string} [message="Upgrade Required"] - message key for error message
		 **/
		res.bang.upgradeRequired = (message = "Upgrade Required") => {
			this.send(426).json({
				error: "Upgrade Required",
				message: message,
				statusCode: 426,
			});
		};

		/**
		 * @param {string} [message="Precondition Required"] - message key for error message
		 **/
		res.bang.preconditionRequired = (message = "Precondition Required") => {
			this.send(428).json({
				error: "Precondition Required",
				message: message,
				statusCode: 428,
			});
		};

		/**
		 * @param {string} [message="Too Many Requests"] - message key for error message
		 **/
		res.bang.tooManyRequests = (message = "Too Many Requests") => {
			this.send(429).json({
				error: "Too Many Requests",
				message: message,
				statusCode: 429,
			});
		};

		/**
		 * @param {string} [message="Request Header Fields Too Large"] - message key for error message
		 **/
		res.bang.requestHeaderFieldsTooLarge = (
			message = "Request Header Fields Too Large",
		) => {
			this.send(431).json({
				error: "Request Header Fields Too Large",
				message: message,
				statusCode: 431,
			});
		};

		/**
		 * @param {string} [message="Unavailable For Legal Reasons"] - message key for error message
		 **/
		res.bang.unavailableForLegalReasons = (
			message = "Unavailable For Legal Reasons",
		) => {
			this.send(451).json({
				error: "Unavailable For Legal Reasons",
				message: message,
				statusCode: 451,
			});
		};

		/**
		 * @param {string} [message="Internal Server Error"] - message key for error message
		 **/
		res.bang.internalServerError = (message = "Internal Server Error") => {
			this.send(500).json({
				error: "Internal Server Error",
				message: message,
				statusCode: 500,
			});
		};

		/**
		 * @param {string} [message="Not Implemented"] - message key for error message
		 **/
		res.bang.notImplemented = (message = "Not Implemented") => {
			this.send(501).json({
				error: "Not Implemented",
				message: message,
				statusCode: 501,
			});
		};

		/**
		 * @param {string} [message="Bad Gateway"] - message key for error message
		 **/
		res.bang.badGateway = (message = "Bad Gateway") => {
			this.send(502).json({
				error: "Bad Gateway",
				message: message,
				statusCode: 502,
			});
		};

		/**
		 * @param {string} [message="Service Unavailable"] - message key for error message
		 **/
		res.bang.serviceUnavailable = (message = "Service Unavailable") => {
			this.send(503).json({
				error: "Service Unavailable",
				message: message,
				statusCode: 503,
			});
		};

		/**
		 * @param {string} [message="Gateway Timeout"] - message key for error message
		 **/
		res.bang.gatewayTimeout = (message = "Gateway Timeout") => {
			this.send(504).json({
				error: "Gateway Timeout",
				message: message,
				statusCode: 504,
			});
		};

		/**
		 * @param {string} [message="HTTP Version Not Supported"] - message key for error message
		 **/
		res.bang.httpVersionNotSupported = (message = "HTTP Version Not Supported") => {
			this.send(505).json({
				error: "HTTP Version Not Supported",
				message: message,
				statusCode: 505,
			});
		};

		/**
		 * @param {string} [message="Variant Also Negotiates"] - message key for error message
		 **/
		res.bang.variantAlsoNegotiates = (message = "Variant Also Negotiates") => {
			this.send(506).json({
				error: "Variant Also Negotiates",
				message: message,
				statusCode: 506,
			});
		};

		/**
		 * @param {string} [message="Insufficient Storage"] - message key for error message
		 **/
		res.bang.insufficientStorage = (message = "Insufficient Storage") => {
			this.send(507).json({
				error: "Insufficient Storage",
				message: message,
				statusCode: 507,
			});
		};

		/**
		 * @param {string} [message="Loop Detected"] - message key for error message
		 **/
		res.bang.loopDetected = (message = "Loop Detected") => {
			this.send(508).json({
				error: "Loop Detected",
				message: message,
				statusCode: 508,
			});
		};

		/**
		 * @param {string} [message="Bandwidth Limit Exceeded"] - message key for error message
		 **/
		res.bang.bandwidthLimitExceeded = (message = "Bandwidth Limit Exceeded") => {
			this.send(509).json({
				error: "Bandwidth Limit Exceeded",
				message: message,
				statusCode: 509,
			});
		};

		/**
		 * @param {string} [message="Not Extended"] - message key for error message
		 **/
		res.bang.notExtended = (message = "Not Extended") => {
			this.send(510).json({
				error: "Not Extended",
				message: message,
				statusCode: 510,
			});
		};

		/**
		 * @param {string} [message="Network Authentication Required"] - message key for error message
		 **/
		res.bang.networkAuthenticationRequired = (
			message = "Network Authentication Required",
		) => {
			this.send(511).json({
				error: "Network Authentication Required",
				message: message,
				statusCode: 511,
			});
		};

		next();
	};
}
