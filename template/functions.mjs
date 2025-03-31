export function findUsedVariantList(content, prefix = '{{', suffix = '}}') {
    const map = new Map()
    let i = 0

    while (i < content.length) {
        let start = content.indexOf(prefix, i)
        if (start === -1) break
        start += prefix.length

        let end = content.indexOf(suffix, start)
        if (end === -1) break

        const key = content.substring(start, end).trim()
        map.set(key, (map.get(key) || 0) + 1)

        i = end + suffix.length
    }

    return Object.fromEntries(map)
}

export function validateVariants(variantsList, target) {
    const copy = structuredClone(target)

    Object.keys(copy).forEach(key => {
        const [parents, children] = key.split('.')
        if (variantsList[parents].fields[children] === undefined) {
            delete copy[key]
        }
    })

    return copy
}

// TODO: 문자열 탐색 알고리즘 개선이 필요할 수 있음
export function convertVariantToValue(data, variants, content) {
    let copy = content
    const variantKeys = Object.keys(variants)

    for (let i = 0; i < variantKeys.length; i++) {
        const [parents, child] = variantKeys[i].split('.')
        const value = data?.[parents]?.[child] ?? ''
        copy = copy.replaceAll(`{{${variantKeys[i]}}}`, value)
    }

    return copy
}