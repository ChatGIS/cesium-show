function e(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if(r.type==="Feature"&&r.geometry!==null&&r.geometry.type==="Point")return[...r.geometry.coordinates];if(r.type==="Point")return[...r.coordinates]}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return[...r];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function t(r){return r.type==="Feature"?r.geometry:r}export{t as a,e as g};