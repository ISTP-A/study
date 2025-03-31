import { fetchPosition, fetchProcess, fetchUser, fetchVariants } from "./api.mjs"
import { convertVariantToValue, findUsedVariantList, validateVariants } from "./functions.mjs"

async function variantChanger(content) {
    const variants = await fetchVariants()
    const process = await fetchProcess()
    const position = await fetchPosition()
    const user = await fetchUser()

    const prefix = '{{'
    const suffix = '}}'
    const usedVariants = findUsedVariantList(content, prefix, suffix)
    const validatedVariants = validateVariants(variants, usedVariants)
    const result = convertVariantToValue({ process, position, user }, validatedVariants, content)
    return result
}

async function main() {
    const content = "Hello {{user.name}}, your order {{position.title}} is confirmed. {{process.name}}, thanks for shopping! ".repeat(10000)
    const result = await variantChanger(content)

    console.log('content length is... ', content.length)
    console.log("result: ", result)
}

main()