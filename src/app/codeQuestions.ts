export const codeQuestions =
    [
        {
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám összegét írja ki a kimenetre.',
            testCode: '',
            stdin: '-5\n8',
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám különbségét írja ki a kimenetre.',
            testCode: '',
            stdin: '10\n5',
            result: { 'stderr': '', 'stdout': '5', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám szorzatát írja ki a kimenetre.',
            testCode: '',
            stdin: '5\n8',
            result: { 'stderr': '', 'stdout': '40', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            question: 'Írjon egy atlag() nevű függvényt, amely a paraméterében megadott két float érték átlagát adja vissza.',
            testCode: `
            #include <stdio.h>
            main() {
                printf("%f", atlag(10.2, 10.2));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10.200000', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy atlag() nevű függvényt, amely egy 10 elemű int vektor átlagát adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%f", atlag(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '5.000000', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy max() nevű függvényt, amely egy 10 elemű int vektor legnagyobb értékét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%f", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legkisebb értékét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%f", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 3 * 60
        },
    ];
