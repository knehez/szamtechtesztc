export const codeQuestions =
    [
        //
        // LEVEL 1 - szintaktika gyakorlása
        //
        {
            level: 1,
            question: `Az alábbi program kiírná hogy a beolvasott szám páros vagy páratlan,
                        de nem működik. Javítsa ki, mert több elírás is történt!`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            int main()
			{
				char c1;
				printf("karakter:");
				scanf("%c",&c1);
				fi( c1 >= 'a' & c1 <= 'z'){
					printf("kisbetu");
				} else if( c1 >= "A" && c1 <= "Z"){
					printf("nagy betu");
				} else if( c1 >= '0' && c1 <= '9') {
					printf('szamjegy');
				} else {
					printf("mas karakter\n");
				}
			}
            `,
            stdin: 'F',
            result: { 'stderr': '', 'stdout': 'nagy betu', 'exitCode': 0 },
            time: 1 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná hogy a beolvasott szám páros vagy páratlan,
                        de nem működik. Javítsa ki, mert több elírás is történt!`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int szam;
				scanf("&d", szam);
				if(szam %2 = 0) printf("paros");
				else printf("paratlan");
            }
            `,
            stdin: '9',
            result: { 'stderr': '', 'stdout': 'paratlan', 'exitCode': 0 },
            time: 1 * 60
        },
        {
            level: 1,
            question: `Új feladat. Az alábbi program kiírná 0 - 9-ig szóközök nélkül a számokat,
                        de nem működik. Javítsa ki, mert több elírás is történt!`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                for(int i = 0; o < 10; i++) {
                    printf("%d", i)
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0123456789', 'exitCode': 0 },
            time: 1 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná 0 - 9-ig szóközök nélkül a számokat,
                        de nem működik. Javítsa ki, mert több elírás is történt!`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                for(int i = 0; o < 10; i++) {
                    printf("%d", i)
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0123456789', 'exitCode': 0 },
            time: 1 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program 10-et írna képernyőre, de nem fordul le. Javítsa ki, mert több elírás is történt!',
            testCode: '',
            initialCode: `
            #include "stdio"
            main()
            {
                int a = 10;
                print("%d", a);
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 1 * 60
        },
        //
        // LEVEL 2
        //
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy "N" számot és NxN méretű négyzetet rajzol csillagokből.',
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
        {
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
        //
        // LEVEL 3
        //
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
                    printf("%d", v[i]);
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '54321', 'exitCode': 0 },
            time: 3 * 60
        },
        //
        // LEVEL 4
        //
        {
            // sztring kezelés
            level: 4,
            question: `Írjon egy kiszed(char* input, char *output) nevű függvényt,
                       amely az input vektorban megadott szövegből kiveszi
                       az 'a' és 'e' betűket és az output verktorba kerül az eredmény.`,
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
            solution: `
            kiszed(char* input, char *output)
            {
                while(*input != '\0')
                {
                    if(*input == 'a' || *input == 'e')
                    {
                        *output = *input;
                        output++;
                    }
                    input++;
                }
            }
            `,
            result: { 'stderr': '', 'stdout': 'aae', 'exitCode': 0 },
            time: 3 * 60
        },
    ];
