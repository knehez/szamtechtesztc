export const codeQuestions_2 =
    [
        //
        // LEVEL 2 - egyszerű algoritmusok - bevitel és tömb
        //
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas 5 egész számot egy tömbbe és kiíratja a legnagyobb elemének az értéket.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '10\n1\n70\n9\n3\n',
            result: { 'stderr': '', 'stdout': '70', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas 10 egész számot és kiíratja azokat a beolvasással ellentétes sorrendben.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n',
            result: { 'stderr': '', 'stdout': '9\n8\n7\n6\n5\n4\n3\n2\n1\n0', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy "N" számot és NxN méretű négyzetet rajzol csillagokból.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '3',
            result: { 'stderr': '', 'stdout': '***\n***\n***', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely összeadja a számokat n-ig és kiírja az eredményt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '9',
            result: { 'stderr': '', 'stdout': '45', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 5
            level: 2,
            question: 'Írjon egy C programot, amely kiírja kettő hatványait 2048-al bezárólag.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '2 4 8 16 32 64 128 256 512 1024 2048 ', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám összegét írja ki a kimenetre.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '-5\n8',
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám különbségét írja ki a kimenetre.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '10\n5',
            result: { 'stderr': '', 'stdout': '5', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két egész szám szorzatát írja ki a kimenetre.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '5\n8',
            result: { 'stderr': '', 'stdout': '40', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely a billentyűzetről bekért két lebegőpontos szám hányadosát írja ki a kimenetre.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '5.9\n8.3',
            result: { 'stderr': '', 'stdout': '0.710843', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 10
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy számot és ha az egész akkor "int" szöveget, ha tört akkor "float" szöveget ír ki.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '3.4',
            soluton: `
            #include <stdio.h>
            main()
            {
                float a;
                int b;
                scanf("%f", &a);
                b = a;
                if((float)b == a) printf("int");
                else printf("float");
            }
            `,
            result: { 'stderr': '', 'stdout': 'float', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy karaktert és ha kisbetűs akkor "kicsi", ha nagybetűs akkor "nagy" szöveget ír ki.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: 'k',
            result: { 'stderr': '', 'stdout': 'kicsi', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely elvégzi az összeadás és kivonás műveletet. Mintabemenet: 4 - 2',
            testCode: '',
            solution: `
            #include <stdio.h>
            int main()
            {
                int a, c, res;
                char b;
                scanf("%d %c %d", &a, &b, &c);
                if (b == '-')
                {
                    res = a - c;
                }
                if (b == '+')
                {
                    res = a + c;
                }
                printf("%d", res);
                return 0;
            }
            `,
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '9 - 1',
            result: { 'stderr': '', 'stdout': '8', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas egy számot és kiírja a számjegyeit fordított sorrendben.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '2486',
            result: { 'stderr': '', 'stdout': '6842', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely egy bekért N értékig kiírja a páros számokat külön sorba.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '7',
            result: { 'stderr': '', 'stdout': '2\n4\n6\n', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 15
            level: 2,
            question: 'Írjon egy C programot, amely 0-tól egy bekért N értékig kiírja a páratlan számokat egymás után szóközök nélkül.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main()
            {

            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': '135', 'exitCode': 0 },
            time: 2 * 60
        },
    ];
