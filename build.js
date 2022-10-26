import {
    init,
    sync,
    compileWithZ88DK,
    compileTape,
    download,
} from "../retro_build/rb_frontend/retrobuild.mjs";

const name = "portals";
const org = 50000;

init(name, {
    org: org,
});
sync(name, ["./src", "./resources", "./package", "../zxlib"]);
compileWithZ88DK(name, "./src/portals.c");
compileTape(
    name,
    "./src/portals.bas",
    "./resources/config/tape.blocks.json",
    `./package/${name}.tap`
);
download(name, "./dist", [`./package/${name}.tap`]);
console.log("Done :)");