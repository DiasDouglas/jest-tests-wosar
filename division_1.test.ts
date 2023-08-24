import React from "react";

describe('Division properties', () => {
    it('Is not Associative: (a / b) / c is not equal to a / (b / c)', () => {
        const a = 10;
        const b = 2;
        const c = 5;

        const result1 = (a / b) / c;
        const result2 = a / (b / c);

        expect(result1).not.toEqual(result2);
    });

    it('Is not Commutative: a / b is not equal to b / a', () => {
        const a = 10;
        const b = 2;

        const result1 = a / b;
        const result2 = b / a;

        expect(result1).not.toEqual(result2);
    });

    it('Neutral Element: a / 1 is equal to a', () => {
        const a = 10;

        const result = a / 1;

        expect(result).toEqual(a);
    });

    it('Closure: division between operands of the same type always returns a value of that type', () => {
        const a = 10;
        const b = 2;

        const result = a / b;

        expect(typeof result).toEqual(typeof a);
        expect(typeof result).toEqual(typeof b);
    });

    it('a / a is equal to 1', () => {
        const a = 10;

        const result = a / a;

        expect(result).toEqual(1);
    });

    it('the division quotient is the same for multiples of the dividend and the divisor', () => {
        const a = 10;
        const b = 20;

        expect(a / b).toEqual((a * 2) / (b * 2));
    });
});