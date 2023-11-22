import { describe, expect, it } from "bun:test";
import app from "./app";
import request from "supertest";

describe("bang", () => {
  describe("with implicit default parameter", () => {
    it("/BadRequest", async () => {
      const response = await request(app).get("/BadRequest");

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Bad Request");
      expect(response.body.message).toBe("Bad Request");
    });

    it("/Unauthorized", async () => {
      const response = await request(app).get("/Unauthorized");

      expect(response.status).toBe(401);
      expect(response.body.error).toBe("Unauthorized");
      expect(response.body.message).toBe("Unauthorized");
    });

    it("/PaymentRequired", async () => {
      const response = await request(app).get("/PaymentRequired");

      expect(response.status).toBe(402);
      expect(response.body.error).toBe("Payment Required");
      expect(response.body.message).toBe("Payment Required");
    });

    it("/Forbidden", async () => {
      const response = await request(app).get("/Forbidden");

      expect(response.status).toBe(403);
      expect(response.body.error).toBe("Forbidden");
      expect(response.body.message).toBe("Forbidden");
    });

    it("/NotFound", async () => {
      const response = await request(app).get("/NotFound");

      expect(response.status).toBe(404);
      expect(response.body.error).toBe("Not Found");
      expect(response.body.message).toBe("Not Found");
    });

    it("/MethodNotAllowed", async () => {
      const response = await request(app).get("/MethodNotAllowed");

      expect(response.status).toBe(405);
      expect(response.body.error).toBe("Method Not Allowed");
      expect(response.body.message).toBe("Method Not Allowed");
    });

    it("/NotAcceptable", async () => {
      const response = await request(app).get("/NotAcceptable");

      expect(response.status).toBe(406);
      expect(response.body.error).toBe("Not Acceptable");
      expect(response.body.message).toBe("Not Acceptable");
    });

    it("/ProxyAuthenticationRequired", async () => {
      const response = await request(app).get("/ProxyAuthenticationRequired");

      expect(response.status).toBe(407);
      expect(response.body.error).toBe("Proxy Authentication Required");
      expect(response.body.message).toBe("Proxy Authentication Required");
    });

    it("/RequestTimeout", async () => {
      const response = await request(app).get("/RequestTimeout");

      expect(response.status).toBe(408);
      expect(response.body.error).toBe("Request Timeout");
      expect(response.body.message).toBe("Request Timeout");
    });

    it("/Conflict", async () => {
      const response = await request(app).get("/Conflict");

      expect(response.status).toBe(409);
      expect(response.body.error).toBe("Conflict");
      expect(response.body.message).toBe("Conflict");
    });

    it("/Gone", async () => {
      const response = await request(app).get("/Gone");

      expect(response.status).toBe(410);
      expect(response.body.error).toBe("Gone");
      expect(response.body.message).toBe("Gone");
    });

    it("/LengthRequired", async () => {
      const response = await request(app).get("/LengthRequired");

      expect(response.status).toBe(411);
      expect(response.body.error).toBe("Length Required");
      expect(response.body.message).toBe("Length Required");
    });

    it("/PreconditionFailed", async () => {
      const response = await request(app).get("/PreconditionFailed");

      expect(response.status).toBe(412);
      expect(response.body.error).toBe("Precondition Failed");
      expect(response.body.message).toBe("Precondition Failed");
    });

    it("/PayloadTooLarge", async () => {
      const response = await request(app).get("/PayloadTooLarge");

      expect(response.status).toBe(413);
      expect(response.body.error).toBe("Payload Too Large");
      expect(response.body.message).toBe("Payload Too Large");
    });

    it("/URITooLong", async () => {
      const response = await request(app).get("/URITooLong");

      expect(response.status).toBe(414);
      expect(response.body.error).toBe("URI Too Long");
      expect(response.body.message).toBe("URI Too Long");
    });

    it("/UnsupportedMediaType", async () => {
      const response = await request(app).get("/UnsupportedMediaType");

      expect(response.status).toBe(415);
      expect(response.body.error).toBe("Unsupported Media Type");
      expect(response.body.message).toBe("Unsupported Media Type");
    });

    it("/RangeNotSatisfiable", async () => {
      const response = await request(app).get("/RangeNotSatisfiable");

      expect(response.status).toBe(416);
      expect(response.body.error).toBe("Range Not Satisfiable");
      expect(response.body.message).toBe("Range Not Satisfiable");
    });

    it("/ExpectationFailed", async () => {
      const response = await request(app).get("/ExpectationFailed");

      expect(response.status).toBe(417);
      expect(response.body.error).toBe("Expectation Failed");
      expect(response.body.message).toBe("Expectation Failed");
    });

    it("/teapot", async () => {
      const response = await request(app).get("/teapot");

      expect(response.status).toBe(418);
      expect(response.body.error).toBe("I'm a Teapot");
      expect(response.body.message).toBe("I'm a Teapot");
    });

    it("/MisdirectedRequest", async () => {
      const response = await request(app).get("/MisdirectedRequest");

      expect(response.status).toBe(421);
      expect(response.body.error).toBe("Misdirected Request");
      expect(response.body.message).toBe("Misdirected Request");
    });

    it("/UnprocessableEntity", async () => {
      const response = await request(app).get("/UnprocessableEntity");

      expect(response.status).toBe(422);
      expect(response.body.error).toBe("Unprocessable Entity");
      expect(response.body.message).toBe("Unprocessable Entity");
    });

    it("/Locked", async () => {
      const response = await request(app).get("/Locked");

      expect(response.status).toBe(423);
      expect(response.body.error).toBe("Locked");
      expect(response.body.message).toBe("Locked");
    });

    it("/FailedDependency", async () => {
      const response = await request(app).get("/FailedDependency");

      expect(response.status).toBe(424);
      expect(response.body.error).toBe("Failed Dependency");
      expect(response.body.message).toBe("Failed Dependency");
    });

    it("/TooEarly", async () => {
      const response = await request(app).get("/TooEarly");

      expect(response.status).toBe(425);
      expect(response.body.error).toBe("Too Early");
      expect(response.body.message).toBe("Too Early");
    });

    it("/UpgradeRequired", async () => {
      const response = await request(app).get("/UpgradeRequired");

      expect(response.status).toBe(426);
      expect(response.body.error).toBe("Upgrade Required");
      expect(response.body.message).toBe("Upgrade Required");
    });

    it("/PreconditionRequired", async () => {
      const response = await request(app).get("/PreconditionRequired");

      expect(response.status).toBe(428);
      expect(response.body.error).toBe("Precondition Required");
      expect(response.body.message).toBe("Precondition Required");
    });

    it("/TooManyRequests", async () => {
      const response = await request(app).get("/TooManyRequests");

      expect(response.status).toBe(429);
      expect(response.body.error).toBe("Too Many Requests");
      expect(response.body.message).toBe("Too Many Requests");
    });

    it("/RequestHeaderFieldsTooLarge", async () => {
      const response = await request(app).get("/RequestHeaderFieldsTooLarge");

      expect(response.status).toBe(431);
      expect(response.body.error).toBe("Request Header Fields Too Large");
      expect(response.body.message).toBe("Request Header Fields Too Large");
    });

    it("/UnavailableForLegalReasons", async () => {
      const response = await request(app).get("/UnavailableForLegalReasons");

      expect(response.status).toBe(451);
      expect(response.body.error).toBe("Unavailable For Legal Reasons");
      expect(response.body.message).toBe("Unavailable For Legal Reasons");
    });

    it("/InternalServerError", async () => {
      const response = await request(app).get("/InternalServerError");

      expect(response.status).toBe(500);
      expect(response.body.error).toBe("Internal Server Error");
      expect(response.body.message).toBe("Internal Server Error");
    });

    it("/NotImplemented", async () => {
      const response = await request(app).get("/NotImplemented");

      expect(response.status).toBe(501);
      expect(response.body.error).toBe("Not Implemented");
      expect(response.body.message).toBe("Not Implemented");
    });

    it("/BadGateway", async () => {
      const response = await request(app).get("/BadGateway");

      expect(response.status).toBe(502);
      expect(response.body.error).toBe("Bad Gateway");
      expect(response.body.message).toBe("Bad Gateway");
    });

    it("/ServiceUnavailable", async () => {
      const response = await request(app).get("/ServiceUnavailable");

      expect(response.status).toBe(503);
      expect(response.body.error).toBe("Service Unavailable");
      expect(response.body.message).toBe("Service Unavailable");
    });

    it("/GatewayTimeout", async () => {
      const response = await request(app).get("/GatewayTimeout");

      expect(response.status).toBe(504);
      expect(response.body.error).toBe("Gateway Timeout");
      expect(response.body.message).toBe("Gateway Timeout");
    });

    it("/HTTPVersionNotSupported", async () => {
      const response = await request(app).get("/HTTPVersionNotSupported");

      expect(response.status).toBe(505);
      expect(response.body.error).toBe("HTTP Version Not Supported");
      expect(response.body.message).toBe("HTTP Version Not Supported");
    });

    it("/VariantAlsoNegotiates", async () => {
      const response = await request(app).get("/VariantAlsoNegotiates");

      expect(response.status).toBe(506);
      expect(response.body.error).toBe("Variant Also Negotiates");
      expect(response.body.message).toBe("Variant Also Negotiates");
    });

    it("/InsufficientStorage", async () => {
      const response = await request(app).get("/InsufficientStorage");

      expect(response.status).toBe(507);
      expect(response.body.error).toBe("Insufficient Storage");
      expect(response.body.message).toBe("Insufficient Storage");
    });

    it("/LoopDetected", async () => {
      const response = await request(app).get("/LoopDetected");

      expect(response.status).toBe(508);
      expect(response.body.error).toBe("Loop Detected");
      expect(response.body.message).toBe("Loop Detected");
    });

    it("/BandwidthLimitExceeded", async () => {
      const response = await request(app).get("/BandwidthLimitExceeded");

      expect(response.status).toBe(509);
      expect(response.body.error).toBe("Bandwidth Limit Exceeded");
      expect(response.body.message).toBe("Bandwidth Limit Exceeded");
    });

    it("/NotExtended", async () => {
      const response = await request(app).get("/NotExtended");

      expect(response.status).toBe(510);
      expect(response.body.error).toBe("Not Extended");
      expect(response.body.message).toBe("Not Extended");
    });

    it("/NetworkAuthenticationRequired", async () => {
      const response = await request(app).get("/NetworkAuthenticationRequired");

      expect(response.status).toBe(511);
      expect(response.body.error).toBe("Network Authentication Required");
      expect(response.body.message).toBe("Network Authentication Required");
    });
  });

  describe("with explicit parameter", () => {
    it("/BadRequest/message", async () => {
      const response = await request(app).get("/BadRequest/message");

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Bad Request");
      expect(response.body.message).toBe("message");
    });

    it("/Unauthorized/message", async () => {
      const response = await request(app).get("/Unauthorized/message");

      expect(response.status).toBe(401);
      expect(response.body.error).toBe("Unauthorized");
      expect(response.body.message).toBe("message");
    });

    it("/PaymentRequired/message", async () => {
      const response = await request(app).get("/PaymentRequired/message");

      expect(response.status).toBe(402);
      expect(response.body.error).toBe("Payment Required");
      expect(response.body.message).toBe("message");
    });

    it("/Forbidden/message", async () => {
      const response = await request(app).get("/Forbidden/message");

      expect(response.status).toBe(403);
      expect(response.body.error).toBe("Forbidden");
      expect(response.body.message).toBe("message");
    });

    it("/NotFound/message", async () => {
      const response = await request(app).get("/NotFound/message");

      expect(response.status).toBe(404);
      expect(response.body.error).toBe("Not Found");
      expect(response.body.message).toBe("message");
    });

    it("/MethodNotAllowed/message", async () => {
      const response = await request(app).get("/MethodNotAllowed/message");

      expect(response.status).toBe(405);
      expect(response.body.error).toBe("Method Not Allowed");
      expect(response.body.message).toBe("message");
    });

    it("/NotAcceptable/message", async () => {
      const response = await request(app).get("/NotAcceptable/message");

      expect(response.status).toBe(406);
      expect(response.body.error).toBe("Not Acceptable");
      expect(response.body.message).toBe("message");
    });

    it("/ProxyAuthenticationRequired/message", async () => {
      const response = await request(app).get(
        "/ProxyAuthenticationRequired/message",
      );

      expect(response.status).toBe(407);
      expect(response.body.error).toBe("Proxy Authentication Required");
      expect(response.body.message).toBe("message");
    });

    it("/RequestTimeout/message", async () => {
      const response = await request(app).get("/RequestTimeout/message");

      expect(response.status).toBe(408);
      expect(response.body.error).toBe("Request Timeout");
      expect(response.body.message).toBe("message");
    });

    it("/Conflict/message", async () => {
      const response = await request(app).get("/Conflict/message");

      expect(response.status).toBe(409);
      expect(response.body.error).toBe("Conflict");
      expect(response.body.message).toBe("message");
    });

    it("/Gone/message", async () => {
      const response = await request(app).get("/Gone/message");

      expect(response.status).toBe(410);
      expect(response.body.error).toBe("Gone");
      expect(response.body.message).toBe("message");
    });

    it("/LengthRequired/message", async () => {
      const response = await request(app).get("/LengthRequired/message");

      expect(response.status).toBe(411);
      expect(response.body.error).toBe("Length Required");
      expect(response.body.message).toBe("message");
    });

    it("/PreconditionFailed/message", async () => {
      const response = await request(app).get(
        "/PreconditionFailed/message",
      );

      expect(response.status).toBe(412);
      expect(response.body.error).toBe("Precondition Failed");
      expect(response.body.message).toBe("message");
    });

    it("/PayloadTooLarge/message", async () => {
      const response = await request(app).get("/PayloadTooLarge/message");

      expect(response.status).toBe(413);
      expect(response.body.error).toBe("Payload Too Large");
      expect(response.body.message).toBe("message");
    });

    it("/URITooLong/message", async () => {
      const response = await request(app).get("/URITooLong/message");

      expect(response.status).toBe(414);
      expect(response.body.error).toBe("URI Too Long");
      expect(response.body.message).toBe("message");
    });

    it("/UnsupportedMediaType/message", async () => {
      const response = await request(app).get(
        "/UnsupportedMediaType/message",
      );

      expect(response.status).toBe(415);
      expect(response.body.error).toBe("Unsupported Media Type");
      expect(response.body.message).toBe("message");
    });

    it("/RangeNotSatisfiable/message", async () => {
      const response = await request(app).get(
        "/RangeNotSatisfiable/message",
      );

      expect(response.status).toBe(416);
      expect(response.body.error).toBe("Range Not Satisfiable");
      expect(response.body.message).toBe("message");
    });

    it("/ExpectationFailed/message", async () => {
      const response = await request(app).get(
        "/ExpectationFailed/message",
      );

      expect(response.status).toBe(417);
      expect(response.body.error).toBe("Expectation Failed");
      expect(response.body.message).toBe("message");
    });

    it("/teapot/message", async () => {
      const response = await request(app).get("/teapot/message");

      expect(response.status).toBe(418);
      expect(response.body.error).toBe("I'm a Teapot");
      expect(response.body.message).toBe("message");
    });

    it("/MisdirectedRequest/message", async () => {
      const response = await request(app).get(
        "/MisdirectedRequest/message",
      );

      expect(response.status).toBe(421);
      expect(response.body.error).toBe("Misdirected Request");
      expect(response.body.message).toBe("message");
    });

    it("/UnprocessableEntity/message", async () => {
      const response = await request(app).get(
        "/UnprocessableEntity/message",
      );

      expect(response.status).toBe(422);
      expect(response.body.error).toBe("Unprocessable Entity");
      expect(response.body.message).toBe("message");
    });

    it("/Locked/message", async () => {
      const response = await request(app).get("/Locked/message");

      expect(response.status).toBe(423);
      expect(response.body.error).toBe("Locked");
      expect(response.body.message).toBe("message");
    });

    it("/FailedDependency/message", async () => {
      const response = await request(app).get("/FailedDependency/message");

      expect(response.status).toBe(424);
      expect(response.body.error).toBe("Failed Dependency");
      expect(response.body.message).toBe("message");
    });

    it("/TooEarly/message", async () => {
      const response = await request(app).get("/TooEarly/message");

      expect(response.status).toBe(425);
      expect(response.body.error).toBe("Too Early");
      expect(response.body.message).toBe("message");
    });

    it("/UpgradeRequired/message", async () => {
      const response = await request(app).get("/UpgradeRequired/message");

      expect(response.status).toBe(426);
      expect(response.body.error).toBe("Upgrade Required");
      expect(response.body.message).toBe("message");
    });

    it("/PreconditionRequired/message", async () => {
      const response = await request(app).get(
        "/PreconditionRequired/message",
      );

      expect(response.status).toBe(428);
      expect(response.body.error).toBe("Precondition Required");
      expect(response.body.message).toBe("message");
    });

    it("/TooManyRequests/message", async () => {
      const response = await request(app).get("/TooManyRequests/message");

      expect(response.status).toBe(429);
      expect(response.body.error).toBe("Too Many Requests");
      expect(response.body.message).toBe("message");
    });

    it("/RequestHeaderFieldsTooLarge/message", async () => {
      const response = await request(app).get(
        "/RequestHeaderFieldsTooLarge/message",
      );

      expect(response.status).toBe(431);
      expect(response.body.error).toBe("Request Header Fields Too Large");
      expect(response.body.message).toBe("message");
    });

    it("/UnavailableForLegalReasons/message", async () => {
      const response = await request(app).get(
        "/UnavailableForLegalReasons/message",
      );

      expect(response.status).toBe(451);
      expect(response.body.error).toBe("Unavailable For Legal Reasons");
      expect(response.body.message).toBe("message");
    });

    it("/InternalServerError/message", async () => {
      const response = await request(app).get(
        "/InternalServerError/message",
      );

      expect(response.status).toBe(500);
      expect(response.body.error).toBe("Internal Server Error");
      expect(response.body.message).toBe("message");
    });

    it("/NotImplemented/message", async () => {
      const response = await request(app).get("/NotImplemented/message");

      expect(response.status).toBe(501);
      expect(response.body.error).toBe("Not Implemented");
      expect(response.body.message).toBe("message");
    });

    it("/BadGateway/message", async () => {
      const response = await request(app).get("/BadGateway/message");

      expect(response.status).toBe(502);
      expect(response.body.error).toBe("Bad Gateway");
      expect(response.body.message).toBe("message");
    });

    it("/ServiceUnavailable/message", async () => {
      const response = await request(app).get(
        "/ServiceUnavailable/message",
      );

      expect(response.status).toBe(503);
      expect(response.body.error).toBe("Service Unavailable");
      expect(response.body.message).toBe("message");
    });

    it("/GatewayTimeout/message", async () => {
      const response = await request(app).get("/GatewayTimeout/message");

      expect(response.status).toBe(504);
      expect(response.body.error).toBe("Gateway Timeout");
      expect(response.body.message).toBe("message");
    });

    it("/HTTPVersionNotSupported/message", async () => {
      const response = await request(app).get(
        "/HTTPVersionNotSupported/message",
      );

      expect(response.status).toBe(505);
      expect(response.body.error).toBe("HTTP Version Not Supported");
      expect(response.body.message).toBe("message");
    });

    it("/VariantAlsoNegotiates/message", async () => {
      const response = await request(app).get(
        "/VariantAlsoNegotiates/message",
      );

      expect(response.status).toBe(506);
      expect(response.body.error).toBe("Variant Also Negotiates");
      expect(response.body.message).toBe("message");
    });

    it("/InsufficientStorage/message", async () => {
      const response = await request(app).get(
        "/InsufficientStorage/message",
      );

      expect(response.status).toBe(507);
      expect(response.body.error).toBe("Insufficient Storage");
      expect(response.body.message).toBe("message");
    });

    it("/LoopDetected/message", async () => {
      const response = await request(app).get("/LoopDetected/message");

      expect(response.status).toBe(508);
      expect(response.body.error).toBe("Loop Detected");
      expect(response.body.message).toBe("message");
    });

    it("/BandwidthLimitExceeded/message", async () => {
      const response = await request(app).get(
        "/BandwidthLimitExceeded/message",
      );

      expect(response.status).toBe(509);
      expect(response.body.error).toBe("Bandwidth Limit Exceeded");
      expect(response.body.message).toBe("message");
    });

    it("/NotExtended/message", async () => {
      const response = await request(app).get("/NotExtended/message");

      expect(response.status).toBe(510);
      expect(response.body.error).toBe("Not Extended");
      expect(response.body.message).toBe("message");
    });

    it("/NetworkAuthenticationRequired/message", async () => {
      const response = await request(app).get(
        "/NetworkAuthenticationRequired/message",
      );

      expect(response.status).toBe(511);
      expect(response.body.error).toBe("Network Authentication Required");
      expect(response.body.message).toBe("message");
    });
  });
});
