(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(56)},39:function(e,t,n){},41:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),c=n(10),i=n(9),l=n(11),p=[{id:1,title:"Crossbody Capsule",description:"Standout shoulder bag",price:265,categoryIds:[1],colorIds:[1,2,3,4],images:{1:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/455/plp/SCOUT-Crossbody-PLP-v4.png?1498750831",2:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/878/plp/DOMINO-Crossbody-PLP-v4.png?1498750780",3:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/206/plp/guess_bck_3.png?1530129814",4:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/488/plp/BEBOP-Crossbody-PLP-v4.png?1498750763"}},{id:2,title:"Boxer",description:"Cosmetics, razors, odds and ends",price:140,categoryIds:[2],colorIds:[1,2,3,4,5],images:{1:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/351/plp/Scout-Boxer-PLP1.png?1522261970",2:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/888/plp/Domino-Boxer-PLP-2.png?1522259549",3:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/216/plp/BOXERFINAL.png?1530128648",4:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/577/plp/Bebop-Boxer-PLP-2.png?1539126653",5:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/001/480/plp/Cadet-Boxer-PLP.png?1522261787"}},{id:3,title:"Classic Match Kit",description:"Let\u2019s fly away",price:475,categoryIds:[1,3,4],colorIds:[1,2,3,4],images:{1:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/729/plp/Better_Together_Scout_760x500.png?1539791646",2:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/726/plp/Better_Together_Domino_760x500.png?1539791575",3:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/732/plp/Better_Together_Seafarer_760x500.png?1539791712",4:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/723/plp/Better_Together_Bebop_760x500.png?1540589164"}},{id:4,title:"Stowaway",description:"Collapses fully flat for storage",price:325,categoryIds:[3],colorIds:[1,2,3,4,6],images:{1:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/451/plp/20160925_Paravel_02_01.png?1494602466",2:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/872/plp/Domino_PLP.png?1497471954",3:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/002/199/plp/2_%283%29.png?1530123049",4:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/510/plp/Bebop-Stowaway-PLP.png?1505250953",6:"https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/000/509/plp/bluee.png?1479406690"}}],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOR":return e.map(function(e){return e.id===t.productId?Object(l.a)({},e,{selectedColor:t.colorId}):e});default:return e}},u=[{id:1,title:"Scout Tan",className:"scout_tan"},{id:2,title:"Domino Black",className:"domino_black"},{id:3,title:"Seafarer Navy",className:"seafarer_navy"},{id:4,title:"Bebop Red",className:"bebop_red"},{id:5,title:"Cadet Navy",className:"cadet_navy"},{id:6,title:"Jetty Blue",className:"jetty_blue"}],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},m=[{id:1,title:"Bags"},{id:2,title:"Accessories"},{id:3,title:"Luggage"},{id:4,title:"Kits"}],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;arguments.length>1&&arguments[1];return e},f={selectedColors:[],selectedCategories:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTERS":return Object(l.a)({},e,t.payload);default:return e}},v=Object(i.b)({products:d,colors:g,categories:h,filters:b}),O=function(){return Object(i.c)(v,{},window.devToolsExtension?window.devToolsExtension():function(e){return e})},C=n(3),y=n(4),_=n(6),j=n(5),E=n(7),P=n(12),N=(n(39),function(e){function t(){return Object(C.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,a=e.description,r=e.price,s=e.colors,c=e.images,i=e.changeColor,l=e.selectedColor,p=void 0===l?this.props.colors[0].id:l;return o.a.createElement("div",{className:"Product"},o.a.createElement("img",{src:c[p],alt:n}),o.a.createElement("h2",null,n),o.a.createElement("div",{className:"Product__description"},a),o.a.createElement("div",{className:"Product__price"},"$".concat(r)),o.a.createElement("div",{className:"Product__colors"},s.map(function(e){return o.a.createElement("span",{key:e.id,className:"Product__color ".concat(e.className," ").concat(e.id===p?"selected":""),onClick:function(){return i(e.id,t)}})})))}}]),t}(a.Component)),w=function(e){function t(){return Object(C.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colorIds,n=e.colors.filter(function(e){return t.includes(e.id)});return o.a.createElement(N,Object.assign({},this.props,{colors:n}))}}]),t}(a.Component),B=Object(c.b)(function(e){return{colors:e.colors}},{changeColor:function(e,t){return{type:"CHANGE_COLOR",colorId:e,productId:t}}})(w),I=n(29),z=(n(41),function(e){function t(){return Object(C.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selected,n=e.handleChange,a=e.options,r=e.name,s=e.label;return o.a.createElement("div",{className:"Filter"},o.a.createElement("div",null,s),o.a.createElement(I.a,{isMulti:!0,value:t,onChange:function(e){return n(e,r)},options:a}))}}]),t}(a.Component)),L=function(e,t){return e.filter(function(e){return-1!==t.indexOf(e)})},q=(n(52),function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){n.props.changeFilters(Object(P.a)({},t,e.map(function(e){return e.value})))},n.filter=function(e){var t=e.categoryIds,a=e.colorIds,o=n.props.filters,r=o.selectedCategories,s=o.selectedColors;return(0===r.length||0!==L(t,r).length)&&(0===s.length||0!==L(a,s).length)},n}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.products,a=t.colors,r=t.categories,s=a.map(function(e){return{value:e.id,label:e.title}}),c=r.map(function(e){return{value:e.id,label:e.title}});return o.a.createElement("div",{className:"ProductListingPage"},o.a.createElement("h1",null,"Product Listing Page"),o.a.createElement(z,{options:s,handleChange:this.handleChange,name:"selectedColors",label:"Colors"}),o.a.createElement(z,{options:c,handleChange:this.handleChange,name:"selectedCategories",label:"Categories"}),o.a.createElement("div",{className:"ProductsList"},n.filter(function(t){return e.filter(t)}).map(function(e){return o.a.createElement(B,Object.assign({key:e.id},e))})))}}]),t}(a.Component)),k=Object(c.b)(function(e){return{products:e.products,colors:e.colors,categories:e.categories,filters:e.filters}},{changeFilters:function(e){return{type:"CHANGE_FILTERS",payload:e}}})(q),x=function(e){function t(){return Object(C.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Header"}),o.a.createElement(k,null),o.a.createElement("div",{className:"Footer"}))}}]),t}(a.Component);n(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=O();s.a.render(o.a.createElement(c.a,{store:S},o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.9ddc4f9b.chunk.js.map