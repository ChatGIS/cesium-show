function t(a,e){this._definitionChanged=new Cesium.Event,this.color=a||Cesium.Color.YELLOW,this.speed=e||10}Object.defineProperties(t.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),speed:Cesium.createPropertyDescriptor("speed")});t.prototype.getType=function(){return Cesium.Material.ScanlineType};t.prototype.getValue=function(a,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,a,Cesium.Color.WHITE,e.color),e.speed=this.speed,e};t.prototype.equals=function(a){return this===a||a instanceof t&&Cesium.Property.equals(this.color,a.color)&&Cesium.Property.equals(this.speed,a.speed)};Cesium.Material.ScanlineMaterialProperty=t;Cesium.Material.ScanlineType="Scanline";Cesium.Material.ScanlineSource=`
uniform vec4 color;
uniform float speed;
float circle(vec2 uv, float r, float blur) {
  float d = length(uv) * 1.0; /* 2.0 */
  float c = smoothstep(r+blur, r, d);
  return c;
}
czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st - 0.5;
  material.diffuse = 2.8 * color.rgb;
  material.emission = vec3(0);
  float t = fract(czm_frameNumber * (11000.0 - speed) / 500000.0);
  float s = 0.3;
  float radius1 = smoothstep(.0, s, t) * 0.5;
  float alpha1 = circle(st, radius1, 0.01) * circle(st, radius1, -0.01);
  float alpha2 = circle(st, radius1, 0.01 - radius1) * circle(st, radius1, 0.01);
  float radius2 = 0.5 + smoothstep(s, 1.0, t) * 0.5;
  float alpha3 = circle(st, radius1, radius2 + 0.01 - radius1) * circle(st, radius1, -0.01);
  material.alpha = smoothstep(1.0, s, t) * (alpha1 + alpha2*0.1 + alpha3*0.1);
  material.alpha *= color.a ;
  return material;
}
`;Cesium.Material._materialCache.addMaterial(Cesium.Material.ScanlineType,{fabric:{type:Cesium.Material.ScanlineType,uniforms:{color:new Cesium.Color(1,0,0,.5),time:0,speed:10},source:Cesium.Material.ScanlineSource},translucent:function(){return!0}});export{t as S};
