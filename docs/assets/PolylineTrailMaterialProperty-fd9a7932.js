import{p as s,c,v as n}from"./index-7326849b.js";function u(e){return Array.isArray(e)?o(e):e&&e.bbox?o(e.bbox):[m(),f()]}function p(e){e!=null&&(Array.isArray(e)?n(e):e.bbox!=null&&n(e.bbox))}function h(e,r={}){p(r.bbox),e==null&&(e=1);const i=[];for(let a=0;a<e;a++)i.push(s(u(r.bbox)));return c(i)}function l(){return Math.random()-.5}function m(){return l()*360}function f(){return l()*180}function o(e){return[Math.random()*(e[2]-e[0])+e[0],Math.random()*(e[3]-e[1])+e[1]]}function t(e){this._definitionChanged=new Cesium.Event,this.colorSubscription=void 0,this.speed=e.speed||6*Math.random(),this.color=e.color||Cesium.Color.RED,this.percent=e.percent||.1,this.gradient=e.gradient||.01}Object.defineProperties(t.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),speed:Cesium.createPropertyDescriptor("speed"),gradient:Cesium.createPropertyDescriptor("gradient"),percent:Cesium.createPropertyDescriptor("percent")});t.prototype.getType=function(){return"PolylineTrail"};t.prototype.getValue=function(e,r){return Cesium.defined(r)||(r={}),r.color=Cesium.Property.getValueOrClonedDefault(this.color,e,Cesium.Color.WHITE,r.color),r.speed=this.speed,r.gradient=this.gradient,r.percent=this.percent,r};t.prototype.equals=function(e){return this===e||e instanceof t&&this.speed===e.speed&&Cesium.Property.equals(this.color,e.color)};Cesium.Material.PolylineTrailMaterialProperty=t;Cesium.Material.PolylineTrailType="PolylineTrail";Cesium.Material.PolylineTrailSource=`
uniform vec4 color;
uniform float speed;
uniform float percent;
uniform float gradient;

czm_material czm_getMaterial(czm_materialInput materialInput){
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float t = fract(czm_frameNumber * speed / 1000.0);
  t *= (1.0 + percent);
  float alpha = smoothstep(t- percent, t, st.s) * step(-t, -st.s);
  alpha += gradient;
  material.diffuse = color.rgb;
  material.alpha = alpha;
  return material;
}
`;Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailType,{fabric:{type:Cesium.Material.PolylineTrailType,uniforms:{color:new Cesium.Color(1,0,0,.5),transparent:!0,speed:0,gradient:.01,percent:.1},source:Cesium.Material.PolylineTrailSource},translucent:function(){return!0}});export{t as P,h as r};
