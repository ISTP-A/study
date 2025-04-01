let isMobile = undefined

export function getIsMobile() {
    return isMobile
}

export function setIsMobile(req) {
    if (isMobile === undefined) {
        isMobile = req.headers['user-agent']
    }
}