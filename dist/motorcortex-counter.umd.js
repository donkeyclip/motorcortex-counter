!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["@donkeyclip/motorcortex-counter"]=t(e.MotorCortex)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);class i extends n.default.Effect{getScratchValue(){return 0}onGetContext(){this.element.innerHTML=this.initialValue}onProgress(e){let t=this.initialValue+(this.targetValue-this.initialValue)*this.getFraction(e);t=this.attrs.decimals?t.toFixed(this.attrs.decimals):Math.trunc(t),this.element.innerHTML=t}}return{npm_name:"@donkeyclip/motorcortex-counter",version:"2.0.0",incidents:[{exportable:i,name:"Counter",attributesValidationRules:{animatedAttrs:{type:"object",props:{count:{type:"number"}}},decimals:{type:"number",optional:!0,min:0,max:20,integer:!0}}}]}}));
