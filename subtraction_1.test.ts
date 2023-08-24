import React from "react";

describe('Subtraction properties', () => {
    it('Associativity: (a - b) - c is not always equal to a - (b - c)', () => {
        const a = 10;
        const b = 3;
        const c = 2;

        const result1 = (a - b) - c;
        const result2 = a - (b - c);

        expect(result1).not.toEqual(result2);
    });

    it('Commutativity: a - b is not always equal to b - a', () => {
        const a = 10;
        const b = 3;

        const result1 = a - b;
        const result2 = b - a;

        expect(result1).not.toEqual(result2);
    });

    it('Neutral Element: a - 0 is equal to a', () => {
        const a = 10;

        const result = a - 0;

        expect(result).toEqual(a);
    });

    it('Closure: subtraction between operands of the same type always returns a value of that type', () => {
        const a = 10;
        const b = 3;

        const result = a - b;

        expect(typeof result).toEqual(typeof a);
        expect(typeof result).toEqual(typeof b);
    });

    it('Opposite Element: a - a is equal to 0', () => {
        const a = 10;

        const result = a - a;

        expect(result).toEqual(0);
    });
});