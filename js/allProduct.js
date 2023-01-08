import {exportar} from './index.js'


const divTodos = document.querySelector("[todos-div]");
exportar.serverCall("consolas", divTodos);
exportar.serverCall("starWard", divTodos);
exportar.serverCall("diversos", divTodos);