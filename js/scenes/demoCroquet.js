import * as croquet from "../util/croquetlib.js";

export let updateModel = e => {
    if(e.what == "controllerReleased") {
        window.clay.model.add("cube").color(Math.random(), Math.random(), Math.random()).setMatrix(e.where).scale(0.1);
    }
}

export const init = async model => {
    croquet.register('croquetDemo_1.0');
    model.animate(() => {
    });
 }