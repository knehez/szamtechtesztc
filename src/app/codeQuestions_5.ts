export const codeQuestions_5 =
    [
        //
        // LEVEL 5 - algoritmusok
        //
        {
            level: 5,
            question: `Írjon egy **int megfordit(int num)** függvényt,
                       amely az input vektorban megadott num (max 10 számjegy) számjegyeit megfordítja.
                       
                       Példa: Ha a **bemenet:** 47323 **kimenet:** 32374
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", megfordit(456123));
            }
            `,
            stdin: '',
            solution: `
            int megfordit(int num)
            {
                int res = 0;
                while (num != 0) {
                    int n = num % 10;
                    res = res * 10 + n;
                    num /= 10;
                }
                return res;
            }
            `,
            result: { 'stderr': '', 'stdout': '321654', 'exitCode': 0 },
            time: 3 * 60
        },
    ];
