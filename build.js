import {
    init,
    sync,
    compileWithZ88DK,
    compileWithZXBC,
    compileWithZXBASM,
    compileTape,
    download,
    runEmulator,
} from "../retro_build/rb_frontend/retrobuild.mjs";

const name = "portals";
const org = 50000;
const original = false;

const vars = {
    paths: {
        bas: `./src/updated/${name}.bas`,
        asm: `./src/updated/${name}.asm`,
        bin: `./src/updated/${name}.bin`,
        tap: `./package/${name}.tap`,
    },
};

/* Init */
init(name, {
    org: org,
});

/* Sync */
sync(name, ["./src", "./resources", "./package", "../zxlib"]);

compileWithZXBC(name, vars.paths.bas, vars.paths.asm);
compileWithZXBASM(name, vars.paths.asm, vars.paths.bin);

/* Download & Run */
download(name, "./dist", [vars.paths.asm]);
console.log("Done :)");
//runEmulator("fuse", `./dist/${name}.tap`);