export const codeQuestions_3 =
    [
        //
        // LEVEL 3
        //
        {
            level: 3,
            question: `Írjon egy "int oszthato(int*, int)" nevű függvényt, amely átvesz egy n elemű 
                       tömböt és méretét majd visszaadja hány darab 3-mal osztható van benne.`,
            testCode: `
            #include <stdio.h>
            main() {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%d", oszthato(v, 10));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy atlag() nevű függvényt, amely a paraméterében megadott két ' +
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
            level: 3,
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
            level: 3,
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
            level: 3,
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legkisebb elemének értékét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%d", min(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy min() nevű függvényt, amely egy 10 elemű int vektor legkisebb elemének indexét adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,-50,6,7,8,9,10};
                printf("%d", min(v));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy max() nevű függvényt, amely egy 10 elemű int vektor legnagyobb elemének indexét adja vissza.',
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
            level: 3,
            question: 'Írjon egy fordit() nevű függvényt, amely egy 5 elemű int vektor elemeit megfordítja.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v[] = {1,2,3,4,5};
                fordit(v);
                for(int i = 0; i < 5; i++)
                {
                    printf("%d", v[i]);
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '54321', 'exitCode': 0 },
            time: 3 * 60
        },
    ];

