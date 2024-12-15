function t(e){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=e.color,this.duration=Cesium.defaultValue(e.duration,1e3),this.count=Cesium.defaultValue(e.count,2),this.count<=0&&(this.count=1),this.gradient=Cesium.defaultValue(e.gradient,.1),this.gradient===0&&(this.gradient=0),this.gradient>1&&(this.gradient=1),this._time=new Date().getTime()}Object.defineProperties(t.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),duration:Cesium.createPropertyDescriptor("duration"),count:Cesium.createPropertyDescriptor("count")});t.prototype.getType=function(){return Cesium.Material.CircleWaveMaterialType};t.prototype.getValue=function(e,i){return Cesium.defined(i)||(i={}),i.color=Cesium.Property.getValueOrClonedDefault(this._color,e,Cesium.Color.WHITE,i.color),i.time=(new Date().getTime()-this._time)%this.duration/this.duration,i.count=this.count,i.gradient=1+10*(1-this.gradient),i};t.prototype.equals=function(e){return this===e||e instanceof t&&Cesium.Property.equals(this._color,e._color)};Cesium.Material.CircleWaveMaterialProperty=t;Cesium.Material.CircleWaveMaterialType="CircleWaveMaterial";Cesium.Material.CircleWaveSource=`
                                  czm_material czm_getMaterial(czm_materialInput materialInput) {
                                    czm_material material = czm_getDefaultMaterial(materialInput);
                                    material.diffuse = 1.5 * color.rgb;
                                    vec2 st = materialInput.st;
                                    vec3 str = materialInput.str;
                                    float dis = distance(st, vec2(0.5, 0.5));
                                    float per = fract(time);
                                    if (abs(str.z) > 0.001) {
                                      discard;
                                    }
                                    if (dis > 0.5) {
                                      discard;
                                    } else {
                                      float perDis = 0.5 / count;
                                      float disNum;
                                      float bl = .0;
                                      for (int i = 0; i <= 9; i++) {
                                        if (float(i) <= count) {
                                          disNum = perDis *float(i) - dis + per / count;
                                          if (disNum > 0.0) {
                                            if (disNum < perDis) {
                                              bl = 1.0 - disNum / perDis;
                                            } else if(disNum - perDis < perDis) {
                                              bl = 1.0 - abs(1.0 - disNum / perDis);
                                            }
                                            material.alpha = pow(bl, gradient);
                                          }
                                        }
                                      }
                                    }
                                    return material;
                                  }
                                  `;Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleWaveMaterialType,{fabric:{type:Cesium.Material.CircleWaveMaterialType,uniforms:{color:new Cesium.Color(1,0,0,1),time:1,count:1,gradient:.1},source:Cesium.Material.CircleWaveSource},translucent:function(){return!0}});export{t as C};
