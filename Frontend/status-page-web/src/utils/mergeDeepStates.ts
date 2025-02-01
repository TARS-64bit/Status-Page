export const mergeDeepStates = <T extends Record<string, any>>(
    target: Partial<T>,
    source: Partial<T>
): Partial<T> => {
    const targetMutable = { ...target };
    for (const key in source) {
        if (
            source[key] &&
            typeof source[key] === 'object' &&
            !Array.isArray(source[key])
        ) {
            // Recursively merge nested objects
            targetMutable[key] = mergeDeepStates(
                targetMutable[key] || {},
                source[key] as Partial<T[Extract<keyof T, string>]>
            ) as T[Extract<keyof T, string>];
        } else {
            // Assign non-object values directly
            targetMutable[key] = source[key];
        }
    }
    return targetMutable;
};