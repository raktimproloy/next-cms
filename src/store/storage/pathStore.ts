
let path:string = ""

function pathStore(setpath?: string): string {
    // if (setpath && setpath[0] !== "upload" && (setpath.length === 1 || setpath.length === 3)) {
    if (setpath && setpath[0] !== "upload" && setpath && setpath[0] !== "_next" && setpath && setpath[0] !== "public") {

      path = setpath;
    }
    return path;
}

export default pathStore