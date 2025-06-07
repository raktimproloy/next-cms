
let domain:string = ""

function domainStore(setDoamin?: string): string {
    if (setDoamin) {
        domain = setDoamin;
    }
    return domain;
}

export default domainStore