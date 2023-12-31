"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/events/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./app/lib/mongodb.js
// mongodb.js

const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Add Mongo URI to .env.local");
}
if (false) {} else {
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./app/lib/modules/User.js

const getAllUsers = async ()=>{
    const client = await mongodb;
    const db = await client.db("NextJSDB");
    let users = await db.collection("users").find().toArray();
    return users;
};
const addUser = async (user)=>{
    const client = await mongodb;
    const db = client.db("NextJSDB");
    let addedUser = await db.collection("users").insertOne(user);
    return addedUser;
};


;// CONCATENATED MODULE: ./app/api/events/route.js




const GET = async ()=>{
    let users = await getAllUsers();
    return next_response/* default */.Z.json({
        users: users
    });
};
const POST = async (request)=>{
    const contentType = (0,headers.headers)(request).get("Content-Type");
    let requestBody = await request.json();
    if (contentType && contentType === "application/json") {
        if (!requestBody.userName) return next_response/* default */.Z.json({
            message: "username missing!"
        });
        if (!requestBody.password) return next_response/* default */.Z.json({
            message: "password missing!"
        });
        if (!requestBody.email) return next_response/* default */.Z.json({
            message: "email missing!"
        });
        const response = await addUser(requestBody);
        if (response) return next_response/* default */.Z.json({
            message: "success",
            user: response.ops[0]
        });
        return next_response/* default */.Z.json({
            message: "error, create new user fail",
            user: response.ops[0]
        });
    } else {
        return next_response/* default */.Z.json("Unsupported Content-Type");
    }
};


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fevents%2Froute&name=app%2Fapi%2Fevents%2Froute&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.js&appDir=C%3A%5CUsers%5CWALEED%5Ctesting%5Capp&appPaths=%2Fapi%2Fevents%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/events/route",
        pathname: "/api/events",
        filename: "route",
        bundlePath: "app/api/events/route"
    },
    resolvedPagePath: "C:\\Users\\WALEED\\testing\\app\\api\\events\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/events/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,49], () => (__webpack_exec__(4720)));
module.exports = __webpack_exports__;

})();