import express from "express";
import expressBang from "../lib/index";

const app = express();

app.use(expressBang());

app.get("/BadRequest", (_, res) => {
  return res.bang.badRequest();
});

app.get("/BadRequest/message", (_, res) => {
  return res.bang.badRequest("message");
});

app.get("/Unauthorized", (_, res) => {
  return res.bang.unauthorized();
});

app.get("/Unauthorized/message", (_, res) => {
  return res.bang.unauthorized("message");
});

app.get("/PaymentRequired", (_, res) => {
  return res.bang.paymentRequired();
});

app.get("/PaymentRequired/message", (_, res) => {
  return res.bang.paymentRequired("message");
});

app.get("/Forbidden", (_, res) => {
  return res.bang.forbidden();
});

app.get("/Forbidden/message", (_, res) => {
  return res.bang.forbidden("message");
});

app.get("/NotFound", (_, res) => {
  return res.bang.notFound();
});

app.get("/NotFound/message", (_, res) => {
  return res.bang.notFound("message");
});

app.get("/MethodNotAllowed", (_, res) => {
  return res.bang.methodNotAllowed();
});

app.get("/MethodNotAllowed/message", (_, res) => {
  return res.bang.methodNotAllowed("message");
});

app.get("/NotAcceptable", (_, res) => {
  return res.bang.notAcceptable();
});

app.get("/NotAcceptable/message", (_, res) => {
  return res.bang.notAcceptable("message");
});

app.get("/ProxyAuthenticationRequired", (_, res) => {
  return res.bang.proxyAuthenticationRequired();
});

app.get("/ProxyAuthenticationRequired/message", (_, res) => {
  return res.bang.proxyAuthenticationRequired("message");
});

app.get("/RequestTimeout", (_, res) => {
  return res.bang.requestTimeout();
});

app.get("/RequestTimeout/message", (_, res) => {
  return res.bang.requestTimeout("message");
});

app.get("/Conflict", (_, res) => {
  return res.bang.conflict();
});

app.get("/Conflict/message", (_, res) => {
  return res.bang.conflict("message");
});

app.get("/Gone", (_, res) => {
  return res.bang.gone();
});

app.get("/Gone/message", (_, res) => {
  return res.bang.gone("message");
});

app.get("/LengthRequired", (_, res) => {
  return res.bang.lengthRequired();
});

app.get("/LengthRequired/message", (_, res) => {
  return res.bang.lengthRequired("message");
});

app.get("/PreconditionFailed", (_, res) => {
  return res.bang.preconditionFailed();
});

app.get("/PreconditionFailed/message", (_, res) => {
  return res.bang.preconditionFailed("message");
});

app.get("/PayloadTooLarge", (_, res) => {
  return res.bang.payloadTooLarge();
});

app.get("/PayloadTooLarge/message", (_, res) => {
  return res.bang.payloadTooLarge("message");
});

app.get("/URITooLong", (_, res) => {
  return res.bang.uriTooLong();
});

app.get("/URITooLong/message", (_, res) => {
  return res.bang.uriTooLong("message");
});

app.get("/UnsupportedMediaType", (_, res) => {
  return res.bang.unsupportedMediaType();
});

app.get("/UnsupportedMediaType/message", (_, res) => {
  return res.bang.unsupportedMediaType("message");
});

app.get("/RangeNotSatisfiable", (_, res) => {
  return res.bang.rangeNotSatisfiable();
});

app.get("/RangeNotSatisfiable/message", (_, res) => {
  return res.bang.rangeNotSatisfiable("message");
});

app.get("/ExpectationFailed", (_, res) => {
  return res.bang.expectationFailed();
});

app.get("/ExpectationFailed/message", (_, res) => {
  return res.bang.expectationFailed("message");
});

app.get("/teapot", (_, res) => {
  return res.bang.teapot();
});

app.get("/teapot/message", (_, res) => {
  return res.bang.teapot("message");
});

app.get("/MisdirectedRequest", (_, res) => {
  return res.bang.misdirectedRequest();
});

app.get("/MisdirectedRequest/message", (_, res) => {
  return res.bang.misdirectedRequest("message");
});

app.get("/UnprocessableEntity", (_, res) => {
  return res.bang.unprocessableEntity();
});

app.get("/UnprocessableEntity/message", (_, res) => {
  return res.bang.unprocessableEntity("message");
});

app.get("/Locked", (_, res) => {
  return res.bang.locked();
});

app.get("/Locked/message", (_, res) => {
  return res.bang.locked("message");
});

app.get("/FailedDependency", (_, res) => {
  return res.bang.failedDependency();
});

app.get("/FailedDependency/message", (_, res) => {
  return res.bang.failedDependency("message");
});

app.get("/TooEarly", (_, res) => {
  return res.bang.tooEarly();
});

app.get("/TooEarly/message", (_, res) => {
  return res.bang.tooEarly("message");
});

app.get("/UpgradeRequired", (_, res) => {
  return res.bang.upgradeRequired();
});

app.get("/UpgradeRequired/message", (_, res) => {
  return res.bang.upgradeRequired("message");
});

app.get("/PreconditionRequired", (_, res) => {
  return res.bang.preconditionRequired();
});

app.get("/PreconditionRequired/message", (_, res) => {
  return res.bang.preconditionRequired("message");
});

app.get("/TooManyRequests", (_, res) => {
  return res.bang.tooManyRequests();
});

app.get("/TooManyRequests/message", (_, res) => {
  return res.bang.tooManyRequests("message");
});

app.get("/RequestHeaderFieldsTooLarge", (_, res) => {
  return res.bang.requestHeaderFieldsTooLarge();
});

app.get("/RequestHeaderFieldsTooLarge/message", (_, res) => {
  return res.bang.requestHeaderFieldsTooLarge("message");
});

app.get("/UnavailableForLegalReasons", (_, res) => {
  return res.bang.unavailableForLegalReasons();
});

app.get("/UnavailableForLegalReasons/message", (_, res) => {
  return res.bang.unavailableForLegalReasons("message");
});

app.get("/InternalServerError", (_, res) => {
  return res.bang.internalServerError();
});

app.get("/InternalServerError/message", (_, res) => {
  return res.bang.internalServerError("message");
});

app.get("/NotImplemented", (_, res) => {
  return res.bang.notImplemented();
});

app.get("/NotImplemented/message", (_, res) => {
  return res.bang.notImplemented("message");
});

app.get("/BadGateway", (_, res) => {
  return res.bang.badGateway();
});

app.get("/BadGateway/message", (_, res) => {
  return res.bang.badGateway("message");
});

app.get("/ServiceUnavailable", (_, res) => {
  return res.bang.serviceUnavailable();
});

app.get("/ServiceUnavailable/message", (_, res) => {
  return res.bang.serviceUnavailable("message");
});

app.get("/GatewayTimeout", (_, res) => {
  return res.bang.gatewayTimeout();
});

app.get("/GatewayTimeout/message", (_, res) => {
  return res.bang.gatewayTimeout("message");
});

app.get("/HTTPVersionNotSupported", (_, res) => {
  return res.bang.httpVersionNotSupported();
});

app.get("/HTTPVersionNotSupported/message", (_, res) => {
  return res.bang.httpVersionNotSupported("message");
});

app.get("/VariantAlsoNegotiates", (_, res) => {
  return res.bang.variantAlsoNegotiates();
});

app.get("/VariantAlsoNegotiates/message", (_, res) => {
  return res.bang.variantAlsoNegotiates("message");
});

app.get("/InsufficientStorage", (_, res) => {
  return res.bang.insufficientStorage();
});

app.get("/InsufficientStorage/message", (_, res) => {
  return res.bang.insufficientStorage("message");
});

app.get("/LoopDetected", (_, res) => {
  return res.bang.loopDetected();
});

app.get("/LoopDetected/message", (_, res) => {
  return res.bang.loopDetected("message");
});

app.get("/BandwidthLimitExceeded", (_, res) => {
  return res.bang.bandwidthLimitExceeded();
});

app.get("/BandwidthLimitExceeded/message", (_, res) => {
  return res.bang.bandwidthLimitExceeded("message");
});

app.get("/NotExtended", (_, res) => {
  return res.bang.notExtended();
});

app.get("/NotExtended/message", (_, res) => {
  return res.bang.notExtended("message");
});

app.get("/NetworkAuthenticationRequired", (_, res) => {
  return res.bang.networkAuthenticationRequired();
});

app.get("/NetworkAuthenticationRequired/message", (_, res) => {
  return res.bang.networkAuthenticationRequired("message");
});

export default app;
