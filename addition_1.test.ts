import React from "react";

describe('Addiction properties', () => {
    it('Associativity: the order of addiction does not affect the result', () => {
        const a = 5;
        const b = 10;
        const c = 15;

        const result1 = a + (b + c);
        const result2 = (a + b) + c;

        expect(result1).toEqual(result2);
    });

    it('Commutativity: changing the order of the operands does not affect the result', () => {
        const a = 5;
        const b = 10;

        const result1 = a + b;
        const result2 = b + a;

        expect(result1).toEqual(result2);
    });

    it('Neutral Element: adding zero does not change the value of the operand', () => {
        const a = 5;
        const neutralElement = 0;

        const result = a + neutralElement;

        expect(result).toEqual(a);
    });

    it('Closure: addiction between operands of the same type always returns a value of that type', () => {
        const a = 5;
        const b = 10;

        const result = a + b;

        expect(typeof result).toEqual(typeof a);
        expect(typeof result).toEqual(typeof b);
    });

    it('Opposite Element: adding an element and its opposite results in the neutral element', () => {
        const a = 5;
        const oppositeElement = -a;

        const result = a + oppositeElement;

        expect(result).toEqual(0);
    });
});