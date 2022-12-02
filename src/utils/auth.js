const themeKey = 'theme'
export function setTheme(data) {
    return sessionStorage.setItem(themeKey, data)
}