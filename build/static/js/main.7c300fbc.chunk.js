(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),o=(a(14),a(7)),s=a(4),m=a(1);var u=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],r=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.trim()&&(e.addTask(l),r(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:l,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var i=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",{className:"visually-hidden"},"Show "),c.a.createElement("span",null,e.name),c.a.createElement("span",{className:"visually-hidden"}," tasks"))};function d(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),u.trim()&&(e.editTask(e.id,u),i(""),r(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"todo-label",htmlFor:e.id},"New name for ",e.name),c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:u||e.name,onChange:function(e){i(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return r(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),E=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return r(!0)},ref:b},"Edit ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},"Delete ",c.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&l&&d.current.focus(),f&&!l&&b.current.focus()}),[f,l]),c.a.createElement("li",{className:"todo"},l?p:E)}var b=a(8);var f={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(f);var E=function(e){var t=Object(n.useState)(e.tasks),a=Object(m.a)(t,2),l=a[0],r=a[1],E=Object(n.useState)("All"),v=Object(m.a)(E,2),g=v[0],k=v[1];function N(e){var t=l.map((function(t){return e===t.id?Object(s.a)({},t,{completed:!t.completed}):t}));r(t)}function h(e){var t=l.filter((function(t){return e!==t.id}));r(t)}function j(e,t){var a=l.map((function(a){return e===a.id?Object(s.a)({},a,{name:t}):a}));r(a)}var O=l.filter(f[g]).map((function(e){return c.a.createElement(d,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:N,deleteTask:h,editTask:j})})),y=p.map((function(e){return c.a.createElement(i,{key:e,name:e,isPressed:e===g,setFilter:k})})),C=1!==O.length?"tasks":"task",_="".concat(O.length," ").concat(C," remaining"),S=Object(n.useRef)(null),x=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);return Object(n.useEffect)((function(){l.length-x===-1&&S.current.focus()}),[l.length,x]),c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement(u,{addTask:function(e){var t={id:"todo-"+Object(b.a)(),name:e,completed:!1};r([].concat(Object(o.a)(l),[t]))}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},y),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:S},_),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},O))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]})),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7c300fbc.chunk.js.map