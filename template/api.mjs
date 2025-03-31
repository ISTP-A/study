import { readFile } from 'fs/promises'

export async function fetchVariants() {
    const response = await readFile(new URL('./variants.json', import.meta.url), 'utf-8')
    return JSON.parse(response)
}

export async function fetchUser() {
    const response = await readFile(new URL('./user.json', import.meta.url), 'utf-8')
    return JSON.parse(response)
}

export async function fetchPosition() {
    const response = await readFile(new URL('./position.json', import.meta.url), 'utf-8')
    return JSON.parse(response)
}
export async function fetchProcess() {
    const response = await readFile(new URL('./process.json', import.meta.url), 'utf-8')
    return JSON.parse(response)
}
