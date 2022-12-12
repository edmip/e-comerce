import {exportar} from './index.js'

//console.log(exportar);

const divTodos = document.querySelector("[todos-div]");
exportar.serverCall("consolas", divTodos);
exportar.serverCall("starWard", divTodos);
exportar.serverCall("diversos", divTodos);