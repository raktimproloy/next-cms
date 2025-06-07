let hostName = ""
let pathname = ""

const setHostName = () => {
    if (typeof window !== 'undefined') {
        hostName = window.location.host
        pathname = window.location.pathname
    }
}


export const getHostName = () => {
    setHostName()
  return hostName;
};

export const getPathName = () => {
    setHostName()
  return pathname;
};
