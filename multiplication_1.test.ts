import React from "react";

describe('Multiplication properties', () => {
    it('Associativity: (a * b) * c is equal to a * (b * c)', () => {
        const a = 2;
        const b = 3;
        const c = 4;

        const result1 = (a * b) * c;
        const result2 = a * (b * c);

        expect(result1).toEqual(result2);
    });

    it('Commutativity: a * b is equal to b * a', () => {
        const a = 2;
        const b = 3;

        const result1 = a * b;
        const result2 = b * a;

        expect(result1).toEqual(result2);
    });

    it('Neutral Element: a * 1 is equal to a', () => {
        const a = 2;

        const result = a * 1;

        expect(result).toEqual(a);
    });

    it('Closure: multiplication between operands of the same type always returns a value of that type', () => {
        const a = 2;
        const b = 3;

        const result = a * b;

        expect(typeof result).toEqual(typeof a);
        expect(typeof result).toEqual(typeof b);
    });

    it('Opposite Element: a * 1/a is equal to 1', () => {
        const a = 2;

        const result = a * (1/a);

        expect(result).toEqual(1);
    });
});




