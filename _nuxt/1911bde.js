(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{437:function(e,t,l){"use strict";l(344),l(10),l(15),l(18),l(31),l(108),l(16),l(22);var n={props:{value:{type:Number,default:null},maxValue:{type:Number,default:null},minValue:{type:Number,default:null},disabled:{type:Boolean,default:!1},inputClass:{type:String,default:""}},data:function(){return{isFocus:!1}},computed:{input:{set:function(e){return e},get:function(){if("number"!=typeof this.value)return null;if(/^[0-9]+$/.test(this.value)){var e=(this.value/1).toFixed(0).toString().replace(".",",");return e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return this.value.toString().replace(/\D/g,"")}}},mounted:function(){this.input=this.value||0===parseInt(this.value)?this.value:null},methods:{validate:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return this.minValue&&parseInt(this.minValue)>=0&&parseInt(this.value)<=this.minValue&&(e.preventDefault(),this.input=this.minValue),this.maxValue&&parseInt(this.maxValue)>=0&&parseInt(this.value)>=this.maxValue&&(e.preventDefault(),this.input=this.maxValue),!0;e.preventDefault()},updateValue:function(e){var t=e.split(".").join("");this.$emit("input",t||0===parseInt(t)?parseInt(t):null)},handleFocus:function(e,t){if(e)this.$emit("focus");else{this.$emit("blur");var l=t.split(".").join("");this.$emit("change",l||0===parseInt(l)?parseInt(l):null)}}}},r=l(25),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{class:"form-control "+e.inputClass,attrs:{disabled:e.disabled,autocomplete:"off",type:"text"},domProps:{value:e.input},on:{keypress:function(t){return e.validate(t)},input:function(t){return e.updateValue(t.target.value)},focus:function(t){return e.handleFocus(!0,t.target.value)},blur:function(t){return e.handleFocus(!1,t.target.value)}}})}),[],!1,null,null,null);t.a=component.exports},490:function(e){e.exports=JSON.parse('{"title":{"id":"Form Vertical","eng":"Vertical Forms"},"input":{"text":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input Text","eng":"Text Input"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"minLength","value":4,"message":{"id":"Kolom harus diisi minimal 4 karakter","eng":"Column must be filled in at least 4 characters"}},{"type":"alphaNumDot","value":"alphaNumDot","message":{"id":"Kolom harus diisi angka, huruf dan titik","eng":"Columns must be filled with numbers, letters and dots"}}]},"email":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input Email","eng":"Email Input"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"url","value":"url","message":{"id":"Format harus url","eng":"Format must be url"}}]},"number":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input Number (min 10, max 100)","eng":"Number Input (min 10, max 100)"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"numeric","value":"numeric","message":{"id":"Kolom harus angka","eng":"Column must be numeric"}},{"type":"minValue","value":10,"message":{"id":"Minimal harus nominal 10","eng":"Minimum must be nominal 10"}},{"type":"maxValue","value":100,"message":{"id":"Maksimal harus nominal 100","eng":"Maximum must be nominal 100"}}]},"orSellable":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input didalam","eng":"Input in"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"or","value":["unlimited","manual"],"message":{"id":"Hanya pilihan tidak terbatas atau manual harga","eng":"Only unlimited options or manual price"}}]},"toggle":{"label":{"id":"Input Toggle","eng":"Toggle Input"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}}]},"price":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input harga","eng":"Input price"},"validator":[{"type":"requiredIf","value":{"toggle":true},"message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"numeric","value":"numeric","message":{"id":"Kolom harus angka","eng":"Column must be numeric"}}]},"nominal":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"Input Email","eng":"Email Input"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"or","value":["nominal","percentage","manual"],"message":{"id":"Hanya pilihan nominal, persentase atau manual harga","eng":"Only nominal options, percentage or manual price"}},{"type":"not","value":"price","message":{"id":"Tidak boleh sama dengan harga","eng":"Can\'t be the same as the price"}}]},"original_price":{"placeholder":{"id":"Masukkan nilai","eng":"Enter some value"},"label":{"id":"original price","eng":"original price"},"validator":[{"type":"required","value":"required","message":{"id":"Kolom harus diisi","eng":"Column is required"}},{"type":"not","value":"price","message":{"id":"Tidak boleh sama dengan harga","eng":"Can\'t be the same as the price"}}]}}}')},528:function(e,t,l){"use strict";l.r(t);l(5),l(4),l(1),l(6),l(3),l(7);var n=l(0),r=l(54),o=l(437),m=l(446),c={components:{inputNumber:o.a},props:{errors:{default:function(){return{}},type:Object}},data:function(){return{labelComponent:l(490),lang:this.$store.getters["app/getLanguage"],multiselectOptions:l(435).multiselect,radioOptions:l(435).radio,input:{text:null,email:null,number:null,orSellable:null,toggle:!1,price:null,nominal:null,original_price:null},isValidate:!1,funcValidator:m.a}},validations:function(){return{input:this.funcValidator.functionValidatorInit(this.labelComponent.input,this.input)}},created:function(){console.log("check validator",this.validations),console.log("check $v",this.$v)},mounted:function(){console.log("check validations",this.validations)},methods:{handleSubmit:function(){console.log("submit!",this.$v),this.funcValidator.functionValidatorCheck(this.$v)?(this.isValidate=!0,console.log("yes error",this.input)):console.log("submit")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.input={text:null,email:null,number:null},this.$emit("reset")},setInput:function(input){input&&Object.keys(input).lenght>0&&(this.input=input)}}},d=l(25),v=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[e._v("\n      "+e._s(e.labelComponent.title[e.lang])+"\n    ")])]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label",attrs:{for:"validation-text"}},[e._v("test")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.input.text.$model,expression:"$v.input.text.$model"}],class:"form-control col-5 "+(e.$v.input.text.$error?"form-error":""),attrs:{type:"text",placeholder:e.labelComponent.input.text.placeholder[e.lang]},domProps:{value:e.$v.input.text.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.input.text,"$model",t.target.value)}}}),e._v(" "),e._l(e.labelComponent.input.text.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.text[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label",attrs:{for:"validation-text"}},[e._v("or")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.input.orSellable.$model,expression:"$v.input.orSellable.$model"}],class:"form-control col-5 "+(e.$v.input.orSellable.$error?"form-error":""),attrs:{type:"text",placeholder:e.labelComponent.input.orSellable.placeholder[e.lang]},domProps:{value:e.$v.input.orSellable.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.input.orSellable,"$model",t.target.value)}}}),e._v(" "),e._l(e.labelComponent.input.orSellable.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.orSellable[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label"},[e._v(e._s(e.labelComponent.input.email.label[e.lang]))])]),e._v(" "),l("div",{staticClass:"col-12 col-sm-8 col-md-5"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:e.labelComponent.input.email.placeholder[e.lang]},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}})])]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label"},[e._v(e._s(e.labelComponent.input.password.label[e.lang]))])]),e._v(" "),l("div",{staticClass:"col-12 col-sm-8 col-md-5"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.labelComponent.input.password.placeholder[e.lang]},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})])]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label"},[e._v(e._s(e.labelComponent.input.number.label[e.lang]))]),e._v(" "),l("inputNumber",{class:"col-5 "+(e.$v.input.number.$error?"form-error":""),attrs:{placeholder:e.labelComponent.input.number.placeholder[e.lang]},model:{value:e.input.number,callback:function(t){e.$set(e.input,"number",t)},expression:"input.number"}}),e._v(" "),e._l(e.labelComponent.input.number.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.number[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12 col-sm-3"},[l("label",{staticClass:"col-form-label"},[e._v(e._s(e.labelComponent.input.toggle.label[e.lang]))])]),e._v(" "),l("div",{staticClass:"col col-sm-8 col-md-5"},[l("b-form-checkbox",{attrs:{value:!0,switch:""},model:{value:e.$v.input.toggle.$model,callback:function(t){e.$set(e.$v.input.toggle,"$model",t)},expression:"$v.input.toggle.$model"}}),e._v(" "),e._l(e.labelComponent.input.toggle.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.toggle[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label",attrs:{for:"validation-text"}},[e._v(e._s(e.labelComponent.input.price.label[e.lang]))]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.input.price,expression:"input.price"}],class:"form-control col-5 "+(e.$v.input.price.$error?"form-error":""),attrs:{type:"text",placeholder:e.labelComponent.input.price.placeholder[e.lang]},domProps:{value:e.input.price},on:{input:function(t){t.target.composing||e.$set(e.input,"price",t.target.value)}}}),e._v(" "),e._l(e.labelComponent.input.price.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.price[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label",attrs:{for:"validation-text"}},[e._v(e._s(e.labelComponent.input.original_price.label[e.lang]))]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.input.original_price,expression:"input.original_price"}],class:"form-control col-5 "+(e.$v.input.original_price.$error?"form-error":""),attrs:{type:"text",placeholder:e.labelComponent.input.original_price.placeholder[e.lang]},domProps:{value:e.input.original_price},on:{input:function(t){t.target.composing||e.$set(e.input,"original_price",t.target.value)}}}),e._v(" "),e._l(e.labelComponent.input.original_price.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.original_price[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("label",{staticClass:"col-form-label",attrs:{for:"validation-text"}},[e._v("or beda")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.input.nominal,expression:"input.nominal"}],class:"form-control col-5 "+(e.$v.input.nominal.$error?"form-error":""),attrs:{type:"text",placeholder:e.labelComponent.input.nominal.placeholder[e.lang]},domProps:{value:e.input.nominal},on:{input:function(t){t.target.composing||e.$set(e.input,"nominal",t.target.value)}}}),e._v(" "),e._l(e.labelComponent.input.nominal.validator,(function(t,i){return l("div",{key:"text-"+t.type+i},[!e.$v.input.nominal[t.type]&&e.isValidate?l("div",{staticClass:"form-error-message"},[e._v("\n          "+e._s(t.message[e.lang])+"\n        ")]):e._e()])}))],2)]),e._v(" "),e._m(0),e._v(" "),e._t("action")],2)}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-12"},[l("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n        save\n      ")])])])}],!1,null,null,null).exports;function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{inputNumber:o.a,formVertical:v},beforeRouteLeave:function(e,t,l){l()},layout:"dashboard",data:function(){return{lang:this.$store.getters["app/getLanguage"],gvm:this,price:0}},watch:{price:function(e){console.log("newval",e)}},mounted:function(){this.init()},methods:h(h({},r.a),{},{init:function(){}})},C=Object(d.a)(_,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"row withpadding mx-0"},[e._v("\n  halo\n\n  "),l("inputNumber",{model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),e._v(" "),l("div",{staticClass:"col"},[l("formVertical",{ref:"form"})],1)],1)}),[],!1,null,"5c770f50",null);t.default=C.exports}}]);