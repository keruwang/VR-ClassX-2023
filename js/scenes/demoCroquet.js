import * as croquet from "../util/croquetlib.js";

export let initModel = () => {
    if(!croquetModel.scene) croquetModel.scene =  window.clay.model.dataTree;
    // console.log("init model with", window.clay.model.dataTree)
    // croquetModel.scene =  window.clay.model.dataTree;
}

export let updateModel = e => {
    // console.log(e)
    if(e.what == "release")
    {
        window.clay.model.add("cube").move(Math.random(), Math.random(), Math.random()).color(Math.random(), Math.random(), Math.random()).scale(0.5);
        console.log("update model.dataTree", window.clay.model.dataTree)
        console.log("update croquetModel scene", croquetModel.scene)
    }
    // if(!croquetModel.scene) croquetModel.scene = model.dataTree;
    // croquetModel.scene.color = [Math.random(), Math.random(), Math.random()];
    // console.log(croquetModel.scene)
}

export let drawAvatar = actor => {
    // let avatar = window.avatars[actor.viewId];
    let avatarInfo = actor.avatarPos;
    if (avatarInfo.headset) {
        window.avatars[actor.viewId].headset.matrix = avatarInfo.headset;
    //    console.log(actor.viewId)
    //    console.log("avatar head", window.avatars[actor.viewId].headset.matrix)
    } 
        // not in the default pos
    if (avatarInfo.controllerMatrix) {
        window.avatars[actor.viewId].leftController.matrix = avatarInfo.controllerMatrix.left;
        window.avatars[actor.viewId].rightController.matrix = avatarInfo.controllerMatrix.right;
    }
}

export let drawView    = () => {
    
}

export const init = async model => {
    croquet.register('croquetDemo_1.0');
    let cube = model.add('cube').color(1,0,0).scale(0.5);
    console.log("init model.dataTree", model.dataTree);
    if(croquetModel) {
        console.log("init croquetModel.scene", croquetModel.scene)
    }
    model.move(0,1.5,0).scale(.3).animate(() => {
        // cube.color(1,0,0)
       if(croquetModel) {
        // cube.identity().scale(.5).color(...croquetModel.color);
        // console.log(croquetModel.scene)
       } 
    });
 }