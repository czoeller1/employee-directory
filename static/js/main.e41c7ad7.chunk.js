(this.webpackJsonpwork=this.webpackJsonpwork||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(13),r=c.n(s),a=c(4),i=c(14),l=c.n(i),d={fetchUsers:function(){return l.a.get("https://randomuser.me/api/?results=20&inc=gender,name,dob,picture,email,id&nat=US,GB").then((function(e){var t=e.data.results,c=1;return t=t.map((function(e){return{first:e.name.first,last:e.name.last,gender:e.gender,email:e.email,age:e.dob.age,picture:e.picture.thumbnail,id:c++}}))}))}},o=c(0);var j=function(e){return e.employees?e.employees.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.id}),Object(o.jsx)("td",{children:e.first}),Object(o.jsx)("td",{children:e.last}),Object(o.jsx)("td",{children:e.gender}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{className:"img-thumbnail",src:e.picture,alt:"".concat(e.first," ").concat(e.last)})})]},e.id)})):Object(o.jsx)("tr",{})};var b=function(e){return Object(o.jsxs)("div",{className:" d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"filter","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Filter by Gender"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"filter",children:[Object(o.jsx)("button",{className:"dropdown-item",id:"male",onClick:e.filterDisplay,children:"Male"}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{className:"dropdown-item",id:"female",onClick:e.filterDisplay,children:"Female"})]})]}),Object(o.jsx)("button",{className:"btn btn-secondary",onClick:e.clearFilter,children:"Reset"}),Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Sort by Age"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"sort",children:[Object(o.jsx)("button",{className:"dropdown-item",id:"<",onClick:e.sortDisplay,children:"Ascending"}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{className:"dropdown-item",id:">",onClick:e.sortDisplay,children:"Descending"})]})]})]})};var u=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),i=Object(a.a)(r,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){d.fetchUsers().then((function(e){s(e),u(e)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"w-50 mx-auto",children:[Object(o.jsx)(b,{filterDisplay:function(e){u(c.filter((function(t){return t.gender===e.target.id})))},clearFilter:function(){u(c)},sortDisplay:function(e){var t=c.map((function(e){return e}));t.sort((function(t,c){return"<"===e.target.id?t.age-c.age:c.age-t.age})),u(t)}}),Object(o.jsxs)("table",{className:"table mt-5",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"First"}),Object(o.jsx)("th",{scope:"col",children:"Last"}),Object(o.jsx)("th",{scope:"col",children:"Gender"}),Object(o.jsx)("th",{scope:"col",children:"Age"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Picture"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsx)(j,{employees:l})})]})]})};var h=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(u,{})})})};c(38);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e41c7ad7.chunk.js.map