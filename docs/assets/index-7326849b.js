var n=63710088e-1,o={centimeters:n*100,centimetres:n*100,degrees:360/(2*Math.PI),feet:n*3.28084,inches:n*39.37,kilometers:n/1e3,kilometres:n/1e3,meters:n,metres:n,miles:n/1609.344,millimeters:n*1e3,millimetres:n*1e3,nauticalmiles:n/1852,radians:1,yards:n*1.0936};function s(r,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties=e||{},i.geometry=r,i}function u(r,e,t={}){if(!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(r.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!a(r[0])||!a(r[1]))throw new Error("coordinates must contain numbers");return s({type:"Point",coordinates:r},e,t)}function f(r,e,t={}){if(r.length<2)throw new Error("coordinates must be an array of two or more positions");return s({type:"LineString",coordinates:r},e,t)}function c(r,e={}){const t={type:"FeatureCollection"};return e.id&&(t.id=e.id),e.bbox&&(t.bbox=e.bbox),t.features=r,t}function l(r,e="kilometers"){const t=o[e];if(!t)throw new Error(e+" units is invalid");return r*t}function m(r,e="kilometers"){const t=o[e];if(!t)throw new Error(e+" units is invalid");return r/t}function d(r){return r%(2*Math.PI)*180/Math.PI}function h(r){return r%360*Math.PI/180}function a(r){return!isNaN(r)&&r!==null&&!Array.isArray(r)}function b(r){if(!r)throw new Error("bbox is required");if(!Array.isArray(r))throw new Error("bbox must be an Array");if(r.length!==4&&r.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");r.forEach(e=>{if(!a(e))throw new Error("bbox must only contain numbers")})}export{l as a,f as b,c,h as d,s as f,m as l,u as p,d as r,b as v};