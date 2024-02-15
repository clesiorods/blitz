
export default async function waitFor(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}
