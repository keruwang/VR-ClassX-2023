import * as croquet from "../util/croquetlib.js";

export let initModel = () => {
    croquetModel.scene = "hi";
}

export let updateModel = e => {
}

export let drawCursor = actor => {
    // let avatar = window.avatars[actor.viewId];
    let avatarInfo = actor.avatarPos;
    if (avatarInfo.headset) {
        window.avatars[actor.viewId].headset.matrix = avatarInfo.headset;
       console.log(actor.viewId)
       console.log("avatar head", window.avatars[actor.viewId].headset.matrix)
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
    // let cube = model.add('cube');
    // model.move(0,1.5,0).scale(.3).animate(() => {
    //    cube.identity().scale(.5);
    // });
 }