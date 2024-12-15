function t(e){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=e,this._time=new Date().getTime()}Object.defineProperties(t.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color")});t.prototype.getType=function(){return Cesium.Material.HexagonSpreadMaterialType};t.prototype.getValue=function(e,a){return Cesium.defined(a)||(a={}),a.color=Cesium.Property.getValueOrClonedDefault(this._color,e,Cesium.Color.WHITE,a.color),a.image=Cesium.Material.HexagonSpreadMaterialImage,a};t.prototype.equals=function(e){return this===e||e instanceof t&&Cesium.Property.equals(this._color,e._color)};Cesium.Material.HexagonSpreadMaterialProperty=t;Cesium.Material.HexagonSpreadMaterialType="HexagonSpreadMaterial";Cesium.Material.HexagonSpreadMaterialImage="https://mapv-data.oss-cn-hangzhou.aliyuncs.com/pic/hexagon.png";Cesium.Material.HexagonSpreadSource=`
czm_material czm_getMaterial(czm_materialInput materialInput)
{
     czm_material material = czm_getDefaultMaterial(materialInput);
     vec2 st = materialInput.st;
     vec4 colorImage = texture(image,  vec2(st));
     material.alpha = colorImage.a * color.a * 0.5;
     material.diffuse =  1.8 * color.rgb  ;
     return material;
 }
 `;Cesium.Material._materialCache.addMaterial(Cesium.Material.HexagonSpreadMaterialType,{fabric:{type:Cesium.Material.HexagonSpreadMaterialType,uniforms:{color:new Cesium.Color(1,0,0,.5),image:Cesium.Material.HexagonSpreadMaterialImage},source:Cesium.Material.HexagonSpreadSource},translucent:function(){return!0}});export{t as H};
