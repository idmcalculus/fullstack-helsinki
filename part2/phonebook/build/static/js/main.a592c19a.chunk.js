(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){e.exports=t(42)},24:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),u=t.n(c),o=(t(24),t(6)),s=t.n(o),l=t(18),i=t(3),f=t(2),m=t.n(f),d=t(4),p=t(5),b=t.n(p),v="/api/persons",h={getPersons:function(){var e=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(v);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(d.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(v,n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(d.a)(m.a.mark((function e(n,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(v,"/").concat(n),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(v,"/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},w=function(e){var n=e.showPersons,t=e.deletePerson;return n.map((function(e){return a.a.createElement("div",{key:e.id,className:"person"},a.a.createElement("span",null,e.name)," \xa0",a.a.createElement("span",null,e.number)," \xa0",a.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))},E=function(e){var n=e.addName,t=e.newName,r=e.handleNewName,c=e.newNumber,u=e.handleNewNumber;return a.a.createElement("form",{onSubmit:n},a.a.createElement("div",{className:"personform"},"name: ",a.a.createElement("input",{value:t,onChange:r})),a.a.createElement("div",{className:"personform"},"number: ",a.a.createElement("input",{value:c,onChange:u})),a.a.createElement("div",{className:"personform"},a.a.createElement("button",{type:"submit"},"add")))},N=function(e){var n=e.filter,t=e.handlefilter;return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{value:n,onChange:t}))},k=function(e){var n=e.errorMessage,t=e.successMessage;return null===n&&null===t?null:a.a.createElement("div",{className:"".concat(null===n?"error2":"error1")},a.a.createElement("p",null,null===n?t:n))},j=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),o=Object(i.a)(u,2),f=o[0],m=o[1],d=Object(r.useState)(""),p=Object(i.a)(d,2),b=p[0],v=p[1],j=Object(r.useState)(""),O=Object(i.a)(j,2),x=O[0],g=O[1],P=Object(r.useState)(null),y=Object(i.a)(P,2),S=y[0],T=y[1],C=Object(r.useState)(null),M=Object(i.a)(C,2),A=M[0],D=M[1];Object(r.useEffect)((function(){h.getPersons().then((function(e){c(e)})).catch((function(e){T("There was an error retrieving the phonebook from server, please try again later"),setTimeout((function(){T(null)}),5e3)}))}),[]);var J=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,a,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={name:f,number:b},!(a=t.find((function(e){return e.name===f})))){e.next=19;break}if(!window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){e.next=17;break}return e.prev=5,e.next=8,h.updatePerson(a.id,r);case 8:(u=e.sent)&&(D("Updated ".concat(f)),setTimeout((function(){D(null)}),5e3),c(t.map((function(e){return e.name!==a.name?e:u})))),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),T("".concat(f," was already removed from server")),setTimeout((function(){T(null)}),5e3),c(t.filter((function(e){return e.id!==a.id})));case 17:e.next=30;break;case 19:return e.prev=19,e.next=22,h.createPerson(r);case 22:(o=e.sent)&&(D("Added ".concat(o.name)),setTimeout((function(){D(null)}),5e3),c(t.concat(o))),e.next=30;break;case 26:e.prev=26,e.t1=e.catch(19),T(e.t1.response.data.error),setTimeout((function(){T(null)}),5e3);case 30:m(""),v("");case 32:case"end":return e.stop()}}),e,null,[[5,12],[19,26]])})));return function(n){return e.apply(this,arguments)}}(),L=x?t.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})):t;return a.a.createElement("div",null,a.a.createElement("h1",null,"Phonebook"),a.a.createElement(k,{errorMessage:S,successMessage:A}),a.a.createElement(N,{filter:x,handlefilter:function(e){g(e.target.value)}}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(E,{addName:J,newName:f,newNumber:b,handleNewName:function(e){m(e.target.value)},handleNewNumber:function(e){v(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(w,{showPersons:L,deletePerson:function(e){var n=t.find((function(n){return e===n.id}));window.confirm("Delete ".concat(n.name,"?"))&&h.deletePerson(e).then((function(n){n&&c(t.filter((function(n){return e!==n.id})))})).catch((function(r){T("".concat(n.name," was already removed from server")),setTimeout((function(){T(null)}),5e3),c(t.filter((function(n){return n.id!==e})))}))}}))};u.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a592c19a.chunk.js.map