function i(t,e){this._definitionChanged=new Cesium.Event,this.duration=t,this.image=e,this._time=performance.now()}Object.defineProperties(i.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),duration:Cesium.createPropertyDescriptor("duration")});i.prototype.getType=function(){return"Spriteline1"};i.prototype.getValue=function(t,e){return Cesium.defined(e)||(e={}),e.image=this.image,e.time=(performance.now()-this._time)%this.duration/this.duration,e};i.prototype.equals=function(t){return this===t||t instanceof i&&this.duration===t.duration};Cesium.Material.Spriteline1MaterialProperty=i;Cesium.Material.Spriteline1Type="Spriteline1";Cesium.Material.Spriteline1Source=`
czm_material czm_getMaterial(czm_materialInput materialInput)
{
   czm_material material = czm_getDefaultMaterial(materialInput);
   vec2 st = materialInput.st;
   vec4 colorImage = texture(image, vec2(fract(st.s - time), st.t));
   material.alpha = colorImage.a;
   material.diffuse = colorImage.rgb * 1.5 ;
   return material;
}
`;Cesium.Material._materialCache.addMaterial(Cesium.Material.Spriteline1Type,{fabric:{type:Cesium.Material.Spriteline1Type,uniforms:{color:new Cesium.Color(1,0,0,.5),image:"",transparent:!0,time:20},source:Cesium.Material.Spriteline1Source},translucent:function(){return!0}});export{i as S};
