(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),s=n.n(o),d=n(1),r=n(2),l=n(4),c=n(3),p=n(5),u=(n(14),n(7),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return e=!0===this.props.completed?"completed":"incomplete",i.a.createElement("div",{id:e,className:"todo"},i.a.createElement("div",{className:e},i.a.createElement("a",{id:this.props.id,api_id:this.props.api_id},this.props.id),i.a.createElement("button",{id:this.props.id,className:"delete",api_id:this.props.api_id,onClick:this.props.handleDelete.bind(this,this.props.api_id)},"-"),i.a.createElement("button",{id:this.props.id,className:"checkBox",api_id:this.props.api_id,onClick:this.props.handleComplete.bind(this,this.props.api_id)})))}}]),t}(a.Component)),h=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return i.a.createElement(u,{key:t.id,id:t.text,api_id:t.id,completed:t.completed,handleDelete:e.props.handleDelete,handleComplete:e.props.handleComplete})})}}]),t}(a.Component),m=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row",id:this.props.div_id},i.a.createElement("input",{type:"text",className:"col",id:this.props.input_id,placeholder:"Enter an event"}),i.a.createElement("button",{className:"col",id:this.props.button_id,onClick:this.props.handleAddEvent.bind(this),onEnter:this.props.handleAddEvent.bind(this)},"+"))}}]),t}(a.Component),E="cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df",v="https://cse204.work/todos",b=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleComplete=function(e){n.setState({todos:n.state.todos.map(function(t){if(t.id===e){t.completed=!t.completed;var n=new XMLHttpRequest,a={completed:t.completed};n.onreadystatechange=function(){4===this.readyState&&this.status},n.open("PUT",v+"/"+e,!0),n.setRequestHeader("x-api-key",E),n.send(JSON.stringify(a))}return t})})},n.handleSort=function(e){var t=document.getElementsByClassName("incomplete");console.log(t)},n.handleAddEvent=function(e){if(null===document.getElementById("newTitle").value||""===document.getElementById("newTitle").value)alert("Please input an event");else{var t=new XMLHttpRequest,a={text:document.getElementById("newTitle").value};t.open("POST",v,!1),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key",E),t.send(JSON.stringify(a)),t.onreadystatechange=function(){4===this.readyState&&200===this.status||this.readyState},document.getElementById("newTitle").value="",n.renderToDo()}},n.handleDelete=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&this.status},t.open("DELETE",v+"/"+e,!1),t.setRequestHeader("x-api-key",E),t.send(),n.renderToDo()},n.state={todos:[]},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"todos"},i.a.createElement("h1",null,"ToDo List"),i.a.createElement(m,{input_id:"newTitle",button_id:"addBtn",handleAddEvent:this.handleAddEvent}),i.a.createElement("div",{id:"todo-sort-by"},i.a.createElement("a",null,"Sort by:",i.a.createElement("br",null)),i.a.createElement("select",{id:"todo-sort-select",onChange:this.handleSort.bind(this)},i.a.createElement("option",{id:"default"},"Default"),i.a.createElement("option",{id:"created"},"Created"),i.a.createElement("option",{id:"completed"},"Not Completed")))),i.a.createElement("div",{id:"todos"},i.a.createElement(h,{todos:this.state.todos,handleComplete:this.handleComplete,handleDelete:this.handleDelete})))}},{key:"componentWillMount",value:function(){this.renderToDo()}},{key:"renderToDo",value:function(){var e=new XMLHttpRequest,t=[];e.onreadystatechange=function(){4===this.readyState&&200===this.status&&(t=JSON.parse(this.responseText))},e.open("GET",v,!1),e.setRequestHeader("x-api-key",E),e.send(),console.log(t),this.setState({todos:t})}}]),t}(a.Component);s.a.render(i.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.047b108f.chunk.js.map