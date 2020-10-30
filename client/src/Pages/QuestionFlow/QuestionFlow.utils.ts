export const removeDuplicate = (unfilteredArray: any[]) => unfilteredArray.reduce((acc: any, current: any) => {
    const x = acc.find((item: any) => item.value === current.value);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
}, []);

export function cleanObject(object: any) {
    for (var propName in object) {
        if (object[propName] === null || object[propName] === undefined) {
            delete object[propName];
        }
    }
    return object
}