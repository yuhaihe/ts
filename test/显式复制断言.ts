let str = 'lison';
// str = undefined;

let strNull: string | null = 'lison';
strNull = null;
// strNull = undefined

const sum = (x: number, y?: number) => {
    return x + (y || 0);
}

sum(1, undefined);

const num = (n: number | undefined): string => {
    return n!.toFixed().toString()
}

console.log(num(undefined))

function getValue2(index: number) {
    if (index > 1 || index < 0) {
        return index;
    }
}