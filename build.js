import { sync, compileWithZ88DK } from '../retro_build/rb_frontend/retrobuild.mjs';

sync(["./src", "./resources", "../zxlib"]);
compileWithZ88DK("./src/portals.c");
console.log('Done :)')