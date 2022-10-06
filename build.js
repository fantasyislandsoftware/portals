import { sync, compile } from '../retro_build/rb_frontend/retrobuild.mjs';


sync(["./src", "./resources", "../zxlib"]);
compile("./src/portals.c");