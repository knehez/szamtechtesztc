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
            question: 'Írjon egy atlag() nevű függvényt, amely a paraméterében megadott két' +
                'float típusú paraméter értékének átlagát adja vissza.',
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
                printf("%d", atlag(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '5.000000', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy max() nevű függvényt, amely egy 10 elemű int vektor legnagyobb elemének értékét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%d", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legkisebb elemének értékét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%d", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legkisebb elemének indexét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,50,6,7,8,9,10};
                printf("%d", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legnagyobb elemének indexét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,50,6,7,8,9,10};
                printf("%d", max(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: 'Írjon egy fordit() nevű függvényt, amely egy 5 elemű int vektor elemeit megfordítja.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5};
                fordit(v);
                for(int i = 0; i < 5; i++)
                    printf("%d", v[i]);
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '54321', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            question: `Írjon egy kiszed(char* input, char *output) nevű függvényt, amely az input szövegből kiveszi
                        az 'a' és 'e' betűket és az outputba kerül az eredmény.`,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                char v[] = "almae";
                char *o = (char*)calloc(10, sizeof(char));
                kiszed(v, o);
                printf("%s", o);
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': 'lm', 'exitCode': 0 },
            time: 3 * 60
        },
    ];
