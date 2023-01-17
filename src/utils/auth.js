const themeKey = 'theme'
export function setTheme(data) {
    return sessionStorage.setItem(themeKey, data)
}

export function setTablecol(key,data) {
    return sessionStorage.setItem(key, data)
}