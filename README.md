# KsMf-Fastify
Plugin to add Fastify support for KsMf.

## Fastify
 **[Fastify](https://fastify.dev/)** is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town. These are the main features and principles on which Fastify has been built:
- Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30 thousand requests per second.
- Extensible: Fastify is fully extensible via its hooks, plugins and decorators.
- Schema based: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function.
- Logging: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
- Developer friendly: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security.
- TypeScript ready: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community.


## KsMf
**[KsMf](https://www.npmjs.com/package/ksmf)** stands as a modular microframework tailored for crafting minimalist web, CLI applications, or REST APIs. Leveraging the robust capabilities of  [KsDp](https://github.com/ameksike/ksdp/wiki), it extends support across a spectrum of web servers or frameworks like [Express Js](https://expressjs.com), [Fastify](https://fastify.dev), etc. For further information see our [wiki](https://github.com/ameksike/ksmf/wiki).

This library belong to the **Ksike** ecosystem:
- [KsMf](https://www.npmjs.com/package/ksmf) - Microframework (WEB, REST API, CLI, Proxy, etc)
- [Ksdp](https://www.npmjs.com/package/ksdp) - Design Patterns Library (GoF, GRASP, IoC, DI, etc)
- [KsCryp](https://www.npmjs.com/package/kscryp) - Cryptographic Library (RSA, JWT, x509, HEX, Base64, Hash, etc) 
- [KsHook](https://www.npmjs.com/package/kshook) - Event Driven Library
- [KsEval](https://www.npmjs.com/package/kseval) - Expression Evaluator Library 
- [KsWC](https://www.npmjs.com/package/kswc) - Web API deployment Library
- [KsTpl](https://www.npmjs.com/package/kstpl) - Template Engine
- [KsDocs](https://www.npmjs.com/package/ksdocs) - Document Engine


