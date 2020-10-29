export const removeDuplicate = (unfilteredArray: any[]) => unfilteredArray.reduce((acc: any, current: any) => {
    const x = acc.find((item: any) => item.value === current.value);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
}, []);