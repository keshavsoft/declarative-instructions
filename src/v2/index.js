import instructions from "./instructions.json" with { type: "json" };
import meta from "./meta.js";
import registerGlobal from "./register.js";

export { instructions, meta };
export default instructions;

registerGlobal(instructions);