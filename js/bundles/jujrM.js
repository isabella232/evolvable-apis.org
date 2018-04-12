var pageComponent=webpackJsonppageComponent([5],{272:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),d=r(a),l=o(2),c=r(l);o(8),o(10),o(11),o(12),o(13),o(14),o(15),o(16),o(17),o(18),o(19),o(20),o(21),o(22),o(23);var u=o(273),p=r(u),h=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(d.default);c.default.register(h,p.default),t.default=h},273:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.jujrM=void 0;var a,d=o(1),l=r(d),c=o(2),u=r(c);goog.loadModule(function(e){function t(e,t,r){var a=function(){n("article",null,null,"id","1"),n("h2"),d("HTTP Methods"),i("h2"),n("p"),d("Evolvable REST APIs "),n("code"),d("MUST"),i("code"),d(" use the HTTP methods strictly according to the semantics are defined by "),n("a",null,null,"href","https://www.w3.org/Protocols/rfc2616/rfc2616.html"),d("RFC 2616"),i("a"),d("."),i("p"),n("h3"),d("Use HTTP Methods Strictly"),i("h3"),n("p"),d("The following table provides a summary of the key characteristics of the most frequently used HTTP methods:"),i("p"),n("table"),n("thead"),n("tr"),n("th"),d("Method"),i("th"),n("th"),d("Safe"),i("th"),n("th"),d("Idempotent"),i("th"),n("th"),d("Body"),i("th"),n("th"),d("Common usage"),i("th"),i("tr"),i("thead"),n("tbody"),n("tr"),n("td"),d("GET"),i("td"),n("td"),d("X"),i("td"),n("td"),d("X"),i("td"),s("td"),n("td"),d("Get the representation of a resource."),i("td"),i("tr"),n("tr"),n("td"),d("POST"),i("td"),s("td"),s("td"),n("td"),d("X"),i("td"),n("td"),d("Create a resource / Start an operation."),i("td"),i("tr"),n("tr"),n("td"),d("PUT"),i("td"),s("td"),n("td"),d("X"),i("td"),n("td"),d("X"),i("td"),n("td"),d("Full update of a resource. Can also be used to create a resource when the client defines the identifier (URI)."),i("td"),i("tr"),n("tr"),n("td"),d("DELETE"),i("td"),s("td"),n("td"),d("X"),i("td"),s("td"),n("td"),d("Delete a resource."),i("td"),i("tr"),n("tr"),n("td"),d("PATCH"),i("td"),s("td"),s("td"),n("td"),d("X"),i("td"),n("td"),d("Partial update of a resource."),i("td"),i("tr"),n("tr"),n("td"),d("OPTIONS"),i("td"),n("td"),d("X"),i("td"),n("td"),d("X"),i("td"),s("td"),n("td"),d("Get the methods supported by a resource, through the “Allow” HTTP Header in the response, and optionally more detailed information in the body."),i("td"),i("tr"),n("tr"),n("td"),d("HEAD"),i("td"),n("td"),d("X"),i("td"),n("td"),d("X"),i("td"),s("td"),n("td"),d("Obtain the same behavior as GET but the without the response body. Often used to save bandwidth when the consumer is unsure whether the body will be needed."),i("td"),i("tr"),i("tbody"),i("table"),n("h3"),d("Leverage Idempotency"),i("h3"),n("p"),d("GET, PUT, HEAD, OPTIONS "),n("code"),d("MUST"),i("code"),d(" be treated as idempotent actions."),i("p"),n("p"),d("API consumers "),n("code"),d("SHOULD"),i("code"),d(" leverage idempotency, retrying failed requests using these methods, instead of directly escalating an error."),i("p"),i("article"),n("article",null,null,"id","2"),n("h2"),d("Resource Design"),i("h2"),n("h3"),d("Use URIs a resource identifiers"),i("h3"),n("p"),d("Each resource returned by the Evolvable REST API "),n("code"),d("MUST"),i("code"),d(" be identified by a unique URI. Some identifiers "),n("code"),d("MAY"),i("code"),d(" be also reachable in the form of HTTP URLs, but  not all of them. These identifiers will be included in the response following the rules of the specific format used (e.g. @id attribute in HAL)"),i("p"),n("h3"),d("Consumers must not interpret the URI format"),i("h3"),n("p"),d("Evolvable REST APIs treat URIs as opaque resource identifiers. Because of that the design of the URL format is irrelevant. API developers should not spend time designing URL format and instead follow simple and consistent patterns that are easy to implement."),i("p"),n("p"),d("URL Templates can be provided to inform the consumers of how to construct URLs for specific purposes."),i("p"),n("p"),d("Consumer developers should never try to infer the structure of a URL or build URLs via code unless it’s guided by a URL template provided in an API response."),i("p"),n("p"),d("API designers "),n("code"),d("MAY"),i("code"),d(" design URLs taking into consideration guidelines for search engine optimization (SEO). This may be particularly useful when the API is used to build Web Applications and there is a desire for the application and its content to be indexed by search engines."),i("p"),n("h3"),d("Stable URLs");i("h3"),n("p"),d("Evolvable REST APIs "),n("code"),d("SHOULD"),i("code"),d(" not change URLs that is used as an identifier of a resource. In cases when the URL changes, the old URL "),n("code"),d("MUST"),i("code"),d(" still work and respond to a GET operation with a permanent redirect (response code 301) to the new URL."),i("p"),n("p"),d("URLs used to perform searches, filters, or in general operations that can be repeated using the provided affordances "),n("code"),d("MAY"),i("code"),d(" be changed."),i("p"),n("h3"),d("Limit the length of URIs"),i("h3"),n("p"),d("The HTTP protocol does not place any a priori limit on the length of a URI, however the software that process them do sometimes have limits. In particular some proxies, search engines and browsers are known to be able to handle URI up to a certain number of characters."),i("p"),n("p"),d("To correctly render in all scenarios, URIs "),n("code"),d("SHOULD"),i("code"),d(" be shorter than 2,083 characters."),i("p"),n("h3"),d("Leverage common resource patterns"),i("h3"),n("p"),d("Evolvable REST APIs are resource oriented, based on defining named resources that can be manipulated using a limited set of predefined methods. In HTTP the resources are identified by unique URIs. Access to resources "),n("code"),d("MUST"),i("code"),d(" always be done in a stateless way."),i("p"),n("p"),d("The following subsections define the most common type of resource patterns and the guidelines that API developers must follow for each of them."),i("p"),n("h4"),d("Collection resources"),i("h4"),n("p"),d("A common pattern in resource oriented design is a set of resources that represent a collection and the elements within the collection. Some operations are common in this kind of resources, such as Pagination or Filtering, so all Collection Resources "),n("code"),d("MUST"),i("code"),d(" support the same set of operations."),i("p"),n("p"),d("Collections Resources "),n("code"),d("MUST"),i("code"),d(" be named with a plural noun."),i("p"),n("h4"),d("Single resources"),i("h4"),n("p"),d("Single resources represent an entity exposed by the API, including relationships to other resources. Single resources "),n("code"),d("MAY"),i("code"),d(" support all CRUD operations or just some of them."),i("p"),n("p"),d("Single resources "),n("code"),d("MUST"),i("code"),d(" be named with a singular noun."),i("p"),n("h4"),d("Operation resources"),i("h4"),n("p"),d("Operation Resources are resources whose only purpose is to provide the ability for a consumer to perform an operation. This type of resources only response to one HTTP method: POST."),i("p"),n("p"),d("API developers "),n("code"),d("SHOULD"),i("code"),d(" only use Operation Resources as a last resort, for cases when the other types of resources do not apply. In particular, whenever idempotent behavior is possible, using PUT is preferred to allow consumers (or intermediaries) to retry in those cases when the response is not received."),i("p"),n("h4"),d("Long running operations"),i("h4"),n("p"),d("One specific case of Operation Resources are those operations that are run in an asynchronous way. In this operations, the initial POST requests signals the beginning of the task (or the enqueue) and the API will return"),i("p"),n("ul"),n("li"),n("code"),d("202 Accepted"),i("code"),d(" if the operation could be enqueued successfully. The operation identifier URL will be included in the payload"),i("li"),n("li"),n("code"),d("302 See other"),i("code"),d(" if the operation is already enqueued. The operation identifier URL will be included in the Location header."),i("li"),n("li"),n("code"),d("409 Conflict"),i("code"),d(" if the operation couldn’t be enqueued. The payload will include error details in a standard format (such as problem+json)"),i("li"),i("ul"),i("article"),n("article",null,null,"id","3"),n("h2"),d("Security"),i("h2"),n("h3"),d("Require Secure Connections"),i("h3"),n("p"),d("Access to APIs "),n("code"),d("SHOULD"),i("code"),d(" be provided via TLS/SSL exclusively. Any non-SSL request must be ignored or, when not possible, responded with the "),n("code"),d("403 Forbidden"),i("code"),d("."),i("p"),n("h3"),d("Support Cross Origin Resources"),i("h3"),n("p"),d("Evolvable REST API’s "),n("code"),d("SHOULD"),i("code"),d(" support Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. APIs supporting CORS "),n("code"),d("MUST"),i("code"),d(" follow the "),n("a",null,null,"href","http://www.w3.org/TR/cors/"),d("CORS W3C Recommendation"),i("a"),d(". The "),n("a",null,null,"href","https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki"),d("Guide to Secure Implementation of HTML5's Cross Origin Requests"),i("a"),d(" is a recommended resource for API developers and consumer developers new to CORS."),i("p"),n("h3"),d("Authentication and Authorization"),i("h3"),n("p"),d("Evolvable REST APIs "),n("code"),d("MAY"),i("code"),d(" have resources protected by authentication and authorization mechanisms. Requests that require authentication MAY return "),n("code"),d("404 Not Found"),i("code"),d(", instead of "),n("code"),d("403 Forbidden"),i("code"),d(" for security reasons."),i("p"),i("article"),n("article",null,null,"id","4"),n("h2"),d("Versioning"),i("h2"),n("p"),d("Evolvable REST APIs are designed from the ground up for evolvability, avoiding the need for backwards incompatible changes in most scenarios. Introducing a backwards incompatible change could still happen and needs to be accounted for. However, because it won’t happen often APIs "),n("code"),d("MUST"),i("code"),d(" not use versioning in any way that complicates development of the consumer. Specifically, Evolvable REST APIs "),n("code"),d("MUST"),i("code"),d(" never introduce version numbers or any other version identifier in URLs."),i("p"),n("p"),d("Evolvable REST API implementations can specify the implementation version as an HTTP header to be used for debugging purposes."),i("p"),n("h3"),d("Don't break the API contract"),i("h3"),n("h3");d("Don't include version information in URIs"),i("h3"),n("p"),d("Evolvable REST APIs "),n("code"),d("MUST NOT"),i("code"),d(" include version information in the URIs. Doing so would go against using URIs as resource identifiers."),i("p"),n("p"),d("Evolvable REST APIs "),n("code"),d("MAY"),i("code"),d(" provide version information in some other ways, such as HTTP Headers or in the body of the responses for informative or debugging purposes. Evolvable REST API Consumers "),n("code"),d("SHOULD NOT"),i("code"),d(" use version information automatically to change its behavior."),i("p"),i("article"),n("article",null,null,"id","5"),n("h2"),d("API Profile"),i("h2"),n("p"),d("Evolvable REST APIs "),n("code"),d("MUST"),i("code"),d(" provide an API profile that describes the following elements of the API:"),i("p"),n("ul"),n("li"),n("p"),d("Types that might be included in API responses. Each type "),n("code"),d("MUST"),i("code"),d(" have:"),i("p"),n("ul"),n("li"),d("A human readable description of the type"),i("li"),n("li"),d("URL identifier of the type (e.g. http://schema.org/Person), which "),n("code"),d("MAY"),i("code"),d(" be resolvable to obtain a full description."),i("li"),n("li"),d("A list of attributes that describe the type. Evolvable REST API developers "),n("code"),d("MAY"),i("code"),d(" use attributes defined by schema.org. Each attribute "),n("code"),d("MUST"),i("code"),d(" have:"),n("ul"),n("li"),d("A human readable description of the attribute"),i("li"),n("li"),d("URL identifier of the attribute (e.g. http://schema.org/givenName), which "),n("code"),d("MAY"),i("code"),d(" be resolvable to obtain a full description."),i("li"),i("ul"),i("li"),i("ul"),i("li"),n("li"),n("p"),d("Hypermedia controls that might be included in API responses. APIs "),n("code"),d("SHOULD"),i("code"),d(" use standard link relation names as defined by IANA Link Relations. APIs "),n("code"),d("MAY"),i("code"),d(" use custom link relation names for needs not covered by existing standards."),i("p"),n("ul"),n("li"),d("Hypermedia controls can be of two types:"),n("ul"),n("li"),d("Links: Using URLs as defined by RFC3986"),i("li"),n("li"),d("URI Templates as defined by RFC6570"),i("li"),i("ul"),i("li"),n("li"),d("The profile "),n("code"),d("SHOULD"),i("code"),d(" specify, for each Hypermedia control, whether it represents a “safe” (e.g. GET, HEAD), an “idempotent” (e.g. PUT, DELETE) or an “unsafe” (e.g. POST) operation."),i("li"),i("ul"),i("li"),i("ul"),n("p"),d("The API Profile "),n("code"),d("SHOULD"),i("code"),d(" be published using the Application-Level Profile Semantics (ALPS) format. Additional API profile formats "),n("code"),d("MAY"),i("code"),d(" also be used."),i("p"),n("p"),d("A link to the profile must be provided in the response to the root endpoint using the “profile” link relation."),i("p"),n("p"),d("The API Profile "),n("code"),d("MUST"),i("code"),d(" act as a complete contract for the API. No additional documentation should be necessary to build consumers of the API."),i("p"),n("p"),l({section:e.page},null,r),i("p"),i("article"),n("input",null,null,"type","hidden","value",e.page.title),i("input"),n("input",null,null,"type","hidden","value",e.site.title),i("input")};c(o.$$assignDefaults({content:a},e),null,r)}goog.module("jujrM.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),n=r.elementOpen,i=r.elementClose,s=r.elementVoid,d=(r.elementOpenStart,r.elementOpenEnd,r.text),l=(r.attr,u.default.getTemplate("DocsList.incrementaldom","render")),c=u.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="jujrM.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var p=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(l.default);u.default.register(p,a),t.jujrM=p,t.templates=a,t.default=a}},[272]);