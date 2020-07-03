!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=class{constructor(e){this.name="",this.description="",this.dueDate="",this.priority="",this.isActive=!1,this.index=e}updateDetails(e,t,r,n){this.name=e,this.description=t,this.dueDate=r,this.priority=n,this.isActive=!0,this.index=c.currentProject.currentTask.index}setupFromJSON(e){this.name=e.name,this.description=e.description,this.dueDate=e.dueDate,this.priority=e.priority,this.isActive,e.isActive,this.index=e.index}};var i=class{constructor(e,t){this.name=e,this.tasks=[],this.currentTask=null,this.isActive=!1,this.index=t}addTask(e){this.tasks.push(e),this.setActiveTask(e.index)}setActiveTask(e){this.unactivateTasks(),this.currentTask=this.tasks[e],this.tasks[e].isActive=!0}unactivateTasks(){for(const e of this.tasks)e.isActive=!1}deleteTask(e){let t=this.tasks.findIndex(t=>t.name==e);-1!=t&&this.tasks.splice(t,1);for(let e=0;e<this.tasks.length;e++)this.tasks[e].index=e}setupFromJSON(e){this.name=e.name;for(const t of e.tasks){let e=new n(t.index);e.setupFromJSON(t),this.tasks.push(e)}if(null!=e.currentTask){let t=new n(e.currentTask.index);t.setupFromJSON(e.currentTask),this.currentTask=t}this.isActive=e.isActive,this.index=e.index}};let s=new class{constructor(){this.name="No projects",this.description=null,this.dueDate=null,this.priority=null,this.isProject=!1,this.isTask=!1,this.editing=!1}setProject(e=""){this.name=e,this.description=null,this.dueDate=null,this.priority=null,this.isProject=null,this.isTask=!1}setTask(e="",t="",r="",n=""){this.name=e,this.description=t,this.dueDate=r,this.priority=n,this.isProject=!1,this.isTask=!0}};let c=new class{constructor(){this.projects=[],this.currentDetail=s,this.currentProject=null}setActiveProject(e){for(const e of this.projects)e.isActive=!1;this.projects[e].isActive=!0,this.currentProject=this.projects[e],this.currentProject.unactivateTasks(),this.currentDetail.setProject(this.currentProject.name)}setActiveTask(e){this.currentProject.setActiveTask(e);let t=this.currentProject.tasks[e];this.currentDetail.setTask(t.name,t.description,t.dueDate,t.priority)}addProject(){let e=new i("",this.projects.length);this.projects.push(e),this.setActiveProject(this.projects.length-1)}addTask(){let e=new n(this.currentProject.tasks.length);this.currentProject.addTask(e),this.currentDetail.setTask()}deleteProject(e){let t=this.projects.findIndex(t=>t.name==e);-1!=t&&this.projects.splice(t,1);for(let e=0;e<this.projects.length;e++)this.projects[e].index=e}setupProjectManagerFromStorage(e){for(let t of e.projects){let e=new i(t.name,t.index);e.setupFromJSON(t),this.projects.push(e)}let t=e.currentDetail;if(t.isTask?this.currentDetail.setTask(t.name,t.description,t.dueDate,t.priority):this.currentDetail.setProject(t.name),null!=e.currentProject){let t=new i(e.currentProject.name,e.currentProject.index);t.setupFromJSON(e.currentProject),this.currentProject=t}}};function a(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}}function o(){!function(){let e=document.getElementById("project-container"),t=document.createElement("div");t.id="project-container";for(const e of c.projects){let r=document.createElement("button"),n=document.createAttribute("data-index");n.value=e.index,r.classList.add("project","project-list-item"),e.isActive&&r.classList.add("active-item"),r.textContent=e.name,r.setAttributeNode(n),h(r),t.append(r)}e.replaceWith(t)}(),l(),d(),function(){if(a){let e={projects:null,currentDetail:null,currentProject:null};e.projects=c.projects,e.currentDetail=c.currentDetail,e.currentProject=c.currentProject,localStorage.setItem("projectManager",JSON.stringify(e))}else console.log("Couldn't save to storage.")}()}function l(){let e=document.getElementById("task-container"),t=document.createElement("div");if(t.id="task-container",null!=c.currentProject)for(const e of c.currentProject.tasks){let r=document.createElement("button"),n=document.createAttribute("data-index");n.value=e.index,r.classList.add("task"),e.isActive&&r.classList.add("active-item"),r.textContent=e.name,r.setAttributeNode(n),m(r),t.append(r)}e.replaceWith(t)}function d(){let e=document.getElementById("information-container"),t=document.createElement("div");if(t.id="information-container",c.currentDetail.isTask){let e=u(),r=function(){let e=document.createElement("input");return e.id="details-date",e.classList.add("details"),e.type="date",e.value=c.currentDetail.dueDate,e.placeholder="You haven't set a date",e.readOnly=!0,e}(),n=function(){let e=document.createElement("textarea");return e.id="details-description",e.classList.add("details"),e.placeholder="You haven't set a description",e.value=c.currentDetail.description,e.readOnly=!0,e}(),i=function(){let e=document.createElement("select"),t=document.createElement("option"),r=document.createElement("option"),n=document.createElement("option");return e.id="details-select",e.classList.add("details","details-select"),e.disabled=!0,t.value="Low",t.textContent="Low",r.value="Medium",r.textContent="Medium",n.value="High",n.textContent="High",e.add(t),e.add(r),e.add(n),e.value=c.currentDetail.priority,e}(),s=p();t.append(e,r,n,i,s)}else{let e=u(),r=p();t.append(e,r)}e.replaceWith(t)}function u(){let e=document.createElement("input");return e.id="details-header",e.classList.add("details"),e.placeholder="You haven't set a name",e.type="text",e.value=c.currentDetail.name,e.readOnly=!0,e}function p(){let e=document.createElement("div"),t=document.createElement("button"),r=document.createElement("button"),n=document.createElement("i");n.classList.add("fas","fa-edit");let i=document.createElement("i");return i.classList.add("fas","fa-trash-alt"),e.id="details-buttons",t.id="details-update",t.append(n),t.addEventListener("click",()=>{if(c.currentDetail.editing){let e=function(){let e=document.getElementById("details-header"),t=document.getElementById("details-date"),r=document.getElementById("details-description"),n=document.getElementById("details-select"),i={header:e.value,date:null,description:null,priority:null};return c.currentDetail.isTask&&null!=t&&(i.date=t.value,i.description=r.value,i.priority=n.value),i}();c.currentDetail.isTask?(c.currentDetail.setTask(e.header,e.description,e.date,e.priority),c.currentProject.currentTask.updateDetails(e.header,e.description,e.date,e.priority)):(c.currentDetail.setProject(e.header),c.currentProject.name=e.header),o(),c.currentDetail.editing=!1}else!function(){let e=document.getElementById("details-update").getElementsByTagName("i")[0];e.classList.toggle("fa-edit"),e.classList.toggle("fa-check")}(),function(){let e=document.getElementById("details-header"),t=document.getElementById("details-date"),r=document.getElementById("details-description"),n=document.getElementById("details-select");null!=t&&null!=r&&null!=n?(e.readOnly=!1,t.readOnly=!1,r.readOnly=!1,n.disabled=!1):e.readOnly=!e.readOnly}(),c.currentDetail.editing=!0}),r.id="details-delete",r.append(i),function(e){e.addEventListener("click",()=>{if(c.currentDetail.isTask)if(c.currentProject.deleteTask(c.currentProject.currentTask.name),0!=c.currentProject.tasks.length){c.currentProject.setActiveTask(c.currentProject.tasks.length-1);let e=c.currentProject.currentTask;c.currentDetail.setTask(e.name,e.description,e.dueDate,e.priority)}else c.currentProject.currentTask=null,c.currentDetail.setProject(c.currentProject.name);else c.deleteProject(c.currentProject.name),0!=c.projects.length?(c.setActiveProject(c.projects.length-1),c.currentDetail.setProject(c.currentProject.name)):(c.currentProject=null,c.currentDetail.setProject("No projects left"));o()})}(r),e.append(t,r),e}function h(e){e.addEventListener("click",()=>{let t=parseInt(e.getAttribute("data-index"));(!c.projects[t].isActive||c.projects[t].isActive&&c.currentDetail.isTask)&&(c.setActiveProject(t),o())})}function m(e){e.addEventListener("click",()=>{let t=parseInt(e.getAttribute("data-index"));c.currentProject.tasks[t].isActive||(c.setActiveTask(t),l(),d())})}if(!function(){if(a()&&null===localStorage.getItem("projectManager")){let e={projects:null,currentDetail:null,currentProject:null};return localStorage.setItem("projectManager",JSON.stringify(e)),!0}return console.log("Couldn't initialize local storage,because of something blocking it or because it is already initialized"),!1}()){let e=JSON.parse(localStorage.getItem("projectManager"));c.setupProjectManagerFromStorage(e)}!function(){let e=document.getElementById("project-add-button"),t=document.getElementById("task-add-button");e.addEventListener("click",()=>{c.addProject(),o()}),t.addEventListener("click",()=>{c.addTask(),l(),d()})}(),o()}]);