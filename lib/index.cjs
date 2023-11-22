function expressBang() {
	return function (_, res, next) {
		res.bang = {};

		/**
		 * @param {string} [message="Bad Request"] - message key for error message
		 **/
		res.bang.badRequest = (message = "Bad Request") => {
			res.status(400).json({
				error: "Bad Request",
				message: message,
				statusCode: 400,
			});
		};

		/**
		 * @param {string} [message="Unauthorized"] - message key for error message
		 **/
		res.bang.unauthorized = (message = "Unauthorized") => {
			res.status(401).json({
				error: "Unauthorized",
				message: message,
				statusCode: 401,
			});
		};

		/**
		 * @param {string} [message="Payment Required"] - message key for error message
		 **/
		res.bang.paymentRequired = (message = "Payment Required") => {
			res.status(402).json({
				error: "Payment Required",
				message: message,
				statusCode: 402,
			});
		};

		/**
		 * @param {string} [message="Forbidden"] - message key for error message
		 **/
		res.bang.forbidden = (message = "Forbidden") => {
			res.status(403).json({
				error: "Forbidden",
				message: message,
				statusCode: 403,
			});
		};

		/**
		 * @param {string} [message="Not Found"] - message key for error message
		 **/
		res.bang.notFound = (message = "Not Found") => {
			res.status(404).json({
				error: "Not Found",
				message: message,
				statusCode: 404,
			});
		};

		/**
		 * @param {string} [message="Method Not Allowed"] - message key for error message
		 **/
		res.bang.methodNotAllowed = (message = "Method Not Allowed") => {
			res.status(405).json({
				error: "Method Not Allowed",
				message: message,
				statusCode: 405,
			});
		};

		/**
		 * @param {string} [message="Not Acceptable"] - message key for error message
		 **/
		res.bang.notAcceptable = (message = "Not Acceptable") => {
			res.status(406).json({
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
			res.status(407).json({
				error: "Proxy Authentication Required",
				message: message,
				statusCode: 407,
			});
		};

		/**
		 * @param {string} [message="Request Timeout"] - message key for error message
		 **/
		res.bang.requestTimeout = (message = "Request Timeout") => {
			res.status(408).json({
				error: "Request Timeout",
				message: message,
				statusCode: 408,
			});
		};

		/**
		 * @param {string} [message="Conflict"] - message key for error message
		 **/
		res.bang.conflict = (message = "Conflict") => {
			res.status(409).json({
				error: "Conflict",
				message: message,
				statusCode: 409,
			});
		};

		/**
		 * @param {string} [message="Gone"] - message key for error message
		 **/
		res.bang.gone = (message = "Gone") => {
			res.status(410).json({
				error: "Gone",
				message: message,
				statusCode: 410,
			});
		};

		/**
		 * @param {string} [message="Length Required"] - message key for error message
		 **/
		res.bang.lengthRequired = (message = "Length Required") => {
			res.status(411).json({
				error: "Length Required",
				message: message,
				statusCode: 411,
			});
		};

		/**
		 * @param {string} [message="Precondition Failed"] - message key for error message
		 **/
		res.bang.preconditionFailed = (message = "Precondition Failed") => {
			res.status(412).json({
				error: "Precondition Failed",
				message: message,
				statusCode: 412,
			});
		};

		/**
		 * @param {string} [message="Payload Too Large"] - message key for error message
		 **/
		res.bang.payloadTooLarge = (message = "Payload Too Large") => {
			res.status(413).json({
				error: "Payload Too Large",
				message: message,
				statusCode: 413,
			});
		};

		/**
		 * @param {string} [message="URI Too Long"] - message key for error message
		 **/
		res.bang.uriTooLong = (message = "URI Too Long") => {
			res.status(414).json({
				error: "URI Too Long",
				message: message,
				statusCode: 414,
			});
		};

		/**
		 * @param {string} [message="Unsupported Media Type"] - message key for error message
		 **/
		res.bang.unsupportedMediaType = (message = "Unsupported Media Type") => {
			res.status(415).json({
				error: "Unsupported Media Type",
				message: message,
				statusCode: 415,
			});
		};

		/**
		 * @param {string} [message="Range Not Satisfiable"] - message key for error message
		 **/
		res.bang.rangeNotSatisfiable = (message = "Range Not Satisfiable") => {
			res.status(416).json({
				error: "Range Not Satisfiable",
				message: message,
				statusCode: 416,
			});
		};

		/**
		 * @param {string} [message="Expectation Failed"] - message key for error message
		 **/
		res.bang.expectationFailed = (message = "Expectation Failed") => {
			res.status(417).json({
				error: "Expectation Failed",
				message: message,
				statusCode: 417,
			});
		};

		/**
		 * @param {string} [message="I'm a Teapot"] - message key for error message
		 **/
		res.bang.teapot = (message = "I'm a Teapot") => {
			res.status(418).json({
				error: "I'm a Teapot",
				message: message,
				statusCode: 418,
			});
		};

		/**
		 * @param {string} [message="Misdirected Request"] - message key for error message
		 **/
		res.bang.misdirectedRequest = (message = "Misdirected Request") => {
			res.status(421).json({
				error: "Misdirected Request",
				message: message,
				statusCode: 421,
			});
		};

		/**
		 * @param {string} [message="Unprocessable Entity"] - message key for error message
		 **/
		res.bang.unprocessableEntity = (message = "Unprocessable Entity") => {
			res.status(422).json({
				error: "Unprocessable Entity",
				message: message,
				statusCode: 422,
			});
		};

		/**
		 * @param {string} [message="Locked"] - message key for error message
		 **/
		res.bang.locked = (message = "Locked") => {
			res.status(423).json({
				error: "Locked",
				message: message,
				statusCode: 423,
			});
		};

		/**
		 * @param {string} [message="Failed Dependency"] - message key for error message
		 **/
		res.bang.failedDependency = (message = "Failed Dependency") => {
			res.status(424).json({
				error: "Failed Dependency",
				message: message,
				statusCode: 424,
			});
		};

		/**
		 * @param {string} [message="Too Early"] - message key for error message
		 **/
		res.bang.tooEarly = (message = "Too Early") => {
			res.status(425).json({
				error: "Too Early",
				message: message,
				statusCode: 425,
			});
		};

		/**
		 * @param {string} [message="Upgrade Required"] - message key for error message
		 **/
		res.bang.upgradeRequired = (message = "Upgrade Required") => {
			res.status(426).json({
				error: "Upgrade Required",
				message: message,
				statusCode: 426,
			});
		};

		/**
		 * @param {string} [message="Precondition Required"] - message key for error message
		 **/
		res.bang.preconditionRequired = (message = "Precondition Required") => {
			res.status(428).json({
				error: "Precondition Required",
				message: message,
				statusCode: 428,
			});
		};

		/**
		 * @param {string} [message="Too Many Requests"] - message key for error message
		 **/
		res.bang.tooManyRequests = (message = "Too Many Requests") => {
			res.status(429).json({
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
			res.status(431).json({
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
			res.status(451).json({
				error: "Unavailable For Legal Reasons",
				message: message,
				statusCode: 451,
			});
		};

		/**
		 * @param {string} [message="Internal Server Error"] - message key for error message
		 **/
		res.bang.internalServerError = (message = "Internal Server Error") => {
			res.status(500).json({
				error: "Internal Server Error",
				message: message,
				statusCode: 500,
			});
		};

		/**
		 * @param {string} [message="Not Implemented"] - message key for error message
		 **/
		res.bang.notImplemented = (message = "Not Implemented") => {
			res.status(501).json({
				error: "Not Implemented",
				message: message,
				statusCode: 501,
			});
		};

		/**
		 * @param {string} [message="Bad Gateway"] - message key for error message
		 **/
		res.bang.badGateway = (message = "Bad Gateway") => {
			res.status(502).json({
				error: "Bad Gateway",
				message: message,
				statusCode: 502,
			});
		};

		/**
		 * @param {string} [message="Service Unavailable"] - message key for error message
		 **/
		res.bang.serviceUnavailable = (message = "Service Unavailable") => {
			res.status(503).json({
				error: "Service Unavailable",
				message: message,
				statusCode: 503,
			});
		};

		/**
		 * @param {string} [message="Gateway Timeout"] - message key for error message
		 **/
		res.bang.gatewayTimeout = (message = "Gateway Timeout") => {
			res.status(504).json({
				error: "Gateway Timeout",
				message: message,
				statusCode: 504,
			});
		};

		/**
		 * @param {string} [message="HTTP Version Not Supported"] - message key for error message
		 **/
		res.bang.httpVersionNotSupported = (message = "HTTP Version Not Supported") => {
			res.status(505).json({
				error: "HTTP Version Not Supported",
				message: message,
				statusCode: 505,
			});
		};

		/**
		 * @param {string} [message="Variant Also Negotiates"] - message key for error message
		 **/
		res.bang.variantAlsoNegotiates = (message = "Variant Also Negotiates") => {
			res.status(506).json({
				error: "Variant Also Negotiates",
				message: message,
				statusCode: 506,
			});
		};

		/**
		 * @param {string} [message="Insufficient Storage"] - message key for error message
		 **/
		res.bang.insufficientStorage = (message = "Insufficient Storage") => {
			res.status(507).json({
				error: "Insufficient Storage",
				message: message,
				statusCode: 507,
			});
		};

		/**
		 * @param {string} [message="Loop Detected"] - message key for error message
		 **/
		res.bang.loopDetected = (message = "Loop Detected") => {
			res.status(508).json({
				error: "Loop Detected",
				message: message,
				statusCode: 508,
			});
		};

		/**
		 * @param {string} [message="Bandwidth Limit Exceeded"] - message key for error message
		 **/
		res.bang.bandwidthLimitExceeded = (message = "Bandwidth Limit Exceeded") => {
			res.status(509).json({
				error: "Bandwidth Limit Exceeded",
				message: message,
				statusCode: 509,
			});
		};

		/**
		 * @param {string} [message="Not Extended"] - message key for error message
		 **/
		res.bang.notExtended = (message = "Not Extended") => {
			res.status(510).json({
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
			res.status(511).json({
				error: "Network Authentication Required",
				message: message,
				statusCode: 511,
			});
		};

		next();
	};
};

module.exports = expressBang;
