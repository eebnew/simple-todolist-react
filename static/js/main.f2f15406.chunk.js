(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(14),c(3)),d=(c(15),c(8)),r=function(t){var e=t.setFilter,c=t.inputText,n=t.setInputText,s=t.todos,a=t.setTodos;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:c,onChange:function(t){n(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),a([].concat(Object(d.a)(s),[{text:c,completed:!1,id:1e3*Math.random()}])),n("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){e(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.id,c=t.completed,n=t.text,s=t.setTodos,a=t.todos;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(c?"completed":""),children:n}),Object(o.jsx)("button",{onClick:function(){s(a.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){s(a.filter((function(t){return t.id!==e})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.setTodos,c=t.todos,n=t.todosFiltered;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(o.jsx)(j,{setTodos:e,id:t.id,completed:t.completed,todos:c,text:t.text},t.id)}))})})};var f=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(n.useState)("all"),f=Object(l.a)(j,2),m=f[0],O=f[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){g(),N()}),[d,m]);var g=function(){switch(m){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}},N=function(){localStorage.setItem("todos",JSON.stringify(d))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"My Todo List"})}),Object(o.jsx)(r,{setFilter:O,todos:d,setTodos:u,inputText:c,setInputText:s}),Object(o.jsx)(b,{todosFiltered:h,setTodos:u,todos:d})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.f2f15406.chunk.js.map