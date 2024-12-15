function t(i,e){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=i,this.duration=e,this._time=new Date().getTime()}Object.defineProperties(t.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color")});t.prototype.getType=function(){return"EllipsoidFade"};t.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,i,Cesium.Color.WHITE,e.color),e.time=(new Date().getTime()-this._time)%this.duration/this.duration,e};t.prototype.equals=function(i){return this===i||i instanceof t&&Cesium.Property.equals(this._color,i._color)};Cesium.Material.EllipsoidFadeMaterialProperty=t;Cesium.Material.EllipsoidFadeType="EllipsoidFade";Cesium.Material.EllipsoidFadeSource=`
  czm_material czm_getMaterial(czm_materialInput materialInput) {
      czm_material material = czm_getDefaultMaterial(materialInput);
    
      material.diffuse = 1.5 * color.rgb;
      vec2 st = materialInput.st;
      float dis = distance(st, vec2(0.5, 0.5));
    float bl = .0;
    float offset = 0.42;
    if( dis > 0.5) {
          material.alpha = 0.0;
          discard;
      }
    if( dis > offset) {
      bl = color.a * 1.0 / (0.5 - offset) * (dis - offset);
      material.alpha =  pow(bl, 3.0);
      } else {
      material.alpha = 0.0;
          discard;
    }
      return material;
  }
  `;Cesium.Material._materialCache.addMaterial(Cesium.Material.EllipsoidFadeType,{fabric:{type:Cesium.Material.EllipsoidFadeType,uniforms:{color:new Cesium.Color(1,0,0,.5),time:0},source:Cesium.Material.EllipsoidFadeSource},translucent:function(){return!0}});export{t as E};
