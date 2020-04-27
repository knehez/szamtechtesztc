export const codeQuestions_6 =
    [
        //
        // LEVEL 6
        //
        {
            level: 6,
            question: `**Pont a síkon**. Definiáljon egy **Point** nevű struktúrát egy **x** és egy **y** egész típusú adattagokkal.<br>
                       Kérjen be a felhasználótól egy ilyen Pont-ot és tükrözze az x tengelyre és írassa ki a koordinátáit.`,
            testCode: `
            struct Point point = {10, 10};
            `,
            stdin: '100\n100\n',
            solution: `
            #include <stdio.h>
            struct Point
            {
                int x;
                int y;
            };

            int main()
            {
                struct Point p;
                scanf("%d", &p.x);
                scanf("%d", &p.y);
                printf("%d %d", p.x, -p.y);
            }
            `,
            result: { 'stderr': '', 'stdout': '100 -100', 'exitCode': 0 },
            time: 4 * 60
        }
    ];
