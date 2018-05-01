/**
 * Created by flp on 2018/4/12.
 */
import path from "path";
const CONFIG = new Map();

CONFIG.set("port", 3000);
CONFIG.set("staticDir", path.join(__dirname, ".."));
CONFIG.set("viewsDir", path.join(__dirname, "..", "views"));

export default CONFIG;
