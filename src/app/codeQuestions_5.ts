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

        {
            level: 5,
            question: `Írjon egy **int megfordit(int num)** függvényt,
                       amely az input vektorban megadott num bitjeit megfordítja.`,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", megfordit(12));
            }
            `,
            stdin: '',
            solution: `
            int megfordit(int num)
            {
                return ~res;
            }
            `,
            result: { 'stderr': '', 'stdout': '-13', 'exitCode': 0 },
            time: 3 * 60
        },

        {
            level: 5,
            question: `Írjon egy **void binaris(short num)** függvényt,
                       amely a num számot bináris formában írja ki.
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                binaris(10);
            }
            `,
            stdin: '',
            solution: `
            void binaris(short num)
            {
                short pos;
				for (pos = (sizeof(short) * 8 -1) ; pos >= 0 ; pos--)
				{
				  (num & (1 << pos))? printf("1"): printf("0");
				}
            }
            `,
            result: { 'stderr': '', 'stdout': '0000000000001010', 'exitCode': 0 },
            time: 3 * 60
        },

        {
            level: 5,
            question: `Írjon egy **short atbillent(short num)** függvényt,
                       amely a num szám második bitjét az ellenkezőjére változtatja, majd visszaadja az így kapott számot.

                       Példa: Ha a **bemenet:** 1 **kimenet:** 3
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", atbillent(256));
            }
            `,
            stdin: '',
            solution: `
            short atbillent(short num)
            {
                return num ^ 0b10;
            }
            `,
            result: { 'stderr': '', 'stdout': '258', 'exitCode': 0 },
            time: 3 * 60
        },

        { // 5
            level: 5,
            question: `Írjon egy **short atbillent(short num)** függvényt,
                       amely a num szám második és negyedik bitjét az ellenkezőjére változtatja, majd visszaadja az így kapott számot.

                       Példa: Ha a **bemenet:** 1 **kimenet:** 3
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", atbillent(300));
            }
            `,
            stdin: '',
            solution: `
            short atbillent(short num)
            {
                return num ^ 0b1010;
            }
            `,
            result: { 'stderr': '', 'stdout': '294', 'exitCode': 0 },
            time: 3 * 60
        },

        {
            level: 5,
            question: `Írjon egy **int bitstatusz(int num)** függvényt,
                       amely a num szám harmadik bitjének státuszát adja vissza.

                       Példa: Ha a **bemenet:** 5 **kimenet:** 1
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", bitstatusz(295));
            }
            `,
            stdin: '',
            solution: `
            int bitstatusz(int num)
            {
                return (num >> 2) & 1;
            }
            `,
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },

        {
            level: 5,
            question: `Írjon egy **int bithossz(int num)** függvényt,
                       amely a num szám bináris értékének tényleges hosszát adja vissza.

                       Példa: Ha a **bemenet:** 5 (101) **kimenet:** 3
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", bithossz(133));
            }
            `,
            stdin: '',
            solution: `
            int bithossz(int num)
            {
                int count = 0, i;
				if(num == 0) return 0;
				for(i=0; i< 32; i++) {
					if((1 << i) & num) count = i;
				}
				return ++count;
            }
            `,
            result: { 'stderr': '', 'stdout': '8', 'exitCode': 0 },
            time: 3 * 60
        },

        {
            level: 5,
            question: `Írjon egy **int egyesbitek(int num)** függvényt,
                       amely a num szám 1-es bitjeit számolja meg, majd visszaadja ezt az értéket.

                       Példa: Ha a **bemenet:** 5 (101) **kimenet:** 2
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", egyesbitek(999));
            }
            `,
            stdin: '',
            solution: `
            int egyesbitek(int num) {
				int i, count=0;
				for(i=0; i< sizeof(int)*8; i++) {
					if( num & (1<< i) )
						count++;
				}
				return count;
			}
            `,
            result: { 'stderr': '', 'stdout': '8', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 5,
            question: `Írjon egy **float matrixatlag(int sor, int oszlop, int matrix[sor][oszlop])** függvényt,
                       amely átveszi egy mátrix méreteit és a mátrixot, majd visszaadja az átlagát.
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
				int mx[3][3] = {{3, 4, 5},{6, 2, 3},{1, 2, 4}};
                printf("%.2f", matrixatlag(3, 3, mx));
            }
            `,
            stdin: '',
            solution: `
            float matrixatlag(int sor, int oszlop, int matrix[sor][oszlop]) {
				long sum = 0;
				for(int i=0; i < sor; i++)
					for(int j=0; j < oszlop; j++)
						sum += matrix[i][j];
				return (float)sum/(sor*oszlop);
			}
            `,
            result: { 'stderr': '', 'stdout': '3.33', 'exitCode': 0 },
            time: 3 * 60
        },

        { // 10
            level: 5,
            question: `Írjon egy **int csere(int num)** függvényt,
                       amely a num szám számjegyei közül az összes 0-t 1-re cseréli.
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                printf("%d", csere(80150));
            }
            `,
            stdin: '',
            solution: `
            int csere(int num)
            {
                if (num == 0) return 0;
				int digit = num % 10;
				if (digit == 0)
					digit = 1;
				return csere(num/10) * 10 + digit;
            }
            `,
            result: { 'stderr': '', 'stdout': '81151', 'exitCode': 0 },
            time: 3 * 60
        },
    ];
