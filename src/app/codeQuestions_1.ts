export const codeQuestions_1 =
    [
        //
        // LEVEL 1 - szintaktika gyakorlása
        //
        {
            level: 1,
            question: `Az alábbi program kiírná, hogy a beolvasott karakter kicsi vagy nagybetű vagy számjegy, 
                        de nem működik. Javítsa ki, mert több elírás is történt.`,
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
					printf("mas karakter");
				}
			}
            `,
            stdin: 'F',
            result: { 'stderr': '', 'stdout': 'karakter:nagy betu', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná, hogy a beolvasott szám páros vagy páratlan,
                        de nem működik. Javítsa ki, mert több elírás is történt.`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main()
            {
                int szam;
				scanf("&f", szam);
				if(szam % 2 = 0) printf("paros");
				else printf("paratlan");
            }
            `,
            stdin: '9',
            result: { 'stderr': '', 'stdout': 'paratlan', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná **0-9**-ig szóközökkel a számokat,
                        de nem működik.

                        Javítsa ki, több elírás is történt és a **működése is hibás**.`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                for(int i = 0; o < 10; i++) {
                    printf("%d", i++)
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0 1 2 3 4 5 6 7 8 9 ', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná **0-9**-ig szóközök nélkül a számokat,
                        de nem működik. Javítsa ki, több elírás is történt és a **működése sem jó**.`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                for(int i = 0; o < 10; i+) {
                    printf("%d", i+1)
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0123456789', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 5
            level: 1,
            question: 'Az alábbi program 10-et írna képernyőre, de nem fordul le. Javítsa ki, mert több elírás is történt.',
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
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program beolvas 5 számot, majd meghatározza a legnagyobbat és kiírjatja, hogy hanyadikként olvastuk be. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include "stdio"
            main()
            {
                int szamok[5], maxindex=0;
                for(int i=0; i<5; i+){
				    scanf("%d",&szamok[i])
                    if (i!=0)
                    {
					    maxindex = szamok[maxindex] > szamok[i] ? maxindex : i;
					}
				}
				printf("%d/n", maxindex);
			}
            `,
            stdin: '0\n1\n2\n3\n4\n',
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program táblázatos formában íratna ki 3 sort, soronként tabulátor karakterrel elválasztva, de nem fordul le. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include "stdio"
            main()
            {
                printf("Januar Februar    Marcius");
                printf("2005\"2003\"2001\"");
                printf("1999\t2001\r1989");
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': 'Januar\tFebruar\tMarcius\n2005\t2003\t2001\n1999\t2001\t1989\n', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program egy bekért egész szám, 3-al való osztásának egész részét írná ki, de nem működik. Javítsa ki, mert több elírás is történhetett.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int x;
                scanf("%f", x);
                printf("%i", x/3);
            }
            `,
            stdin: '11',
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program egy bekért egész szám 3-al való osztási maradékát írná ki, lefordul de nem működik. Javítsa ki, mert több elírás is történhetett.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int x;
                scanf("%i", x);
                printf("%d", x%3);
            }
            `,
            stdin: '7',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 10
            level: 1,
            question: 'Az alábbi program bekér két lebegőpontos számot, majd kiírja a hányadosukat két tizedes pontossággal, de nem működik. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                float a, b;
                ered1 = 0;
                scanf("%d %d", &a, &b);
                printf("%f", a/b);
            }
            `,
            solution: `
            #include <stdio.h>
            int main()
            {
                float a, b;

                scanf("%f %f", &a, &b);
                printf("%.2f", a/b);
            }
            `,
            stdin: '3.4 1.2',
            result: { 'stderr': '', 'stdout': '2.83', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program kiírja a páratlan számokat egymás alá, egy bekért egész N értékig. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int i, n;
                scanf("%d" &n);
                for(i = 1; i < n; i+=2) {
                    printf("%d\\n", &i)
                }
            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': '1\n3\n5\n', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program beolvas 10 számot és kiírja a pozitívak darabszámát. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int i; db = 0; szam;
                for(i = 0, i < 10, i++) {
                    scanf("%d",&szam);
                    if (szam>0) db++;
                }
                printf("%d",db);
            }
            `,
            stdin: '-3 -4 -5 -6 -7 -8 1 2 -2 -10',
            result: { 'stderr': '', 'stdout': '2', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program beolvas egy számot és kiírja az összes osztóját. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main()
            {
                int n,o = 2;
                scanf("%d", &n);
                while (o < n)
                {
                    if (n % o === 0) printf("%d\\n", o)
                    o++;
                }
            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': '2\n3\n', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program beolvas egy számot és eldönti, hogy prím-e. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <math.h>
            main()
            {
                int n, i = 2;
                scanf("%d", n);
                while(i <= (int)sqrt(n) && n % i != 0) {
                    i++
                }
                if(n % i == 0) printf("Nem prim");
                else printf("Prim");
            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': 'Nem prim', 'exitCode': 0 },
            time: 2 * 60
        },
        { // 15
            level: 1,
            question: 'Az alábbi program két szám legkisebb közös többszörösét írná ki. Javítsa ki, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <math.h>
            main()
            {
                int n1, n2, k
                scanf("%d",&n1);
                scanf("%d",&n2);
                if (n1>n2) {
                    k = n1;
                } else {
                    k = n2;
                }

                while (k <= n1 * n2) {
                    if (k % n1 == 0) {
                        if (k % n2 = 0)
                        {
                            printf("%d", k);
                            break
                        }
                    }
                    k=k+1;
                }
            }
            `,
            stdin: '12 8',
            result: { 'stderr': '', 'stdout': '24', 'exitCode': 0 },
            time: 2 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program bekér a felhasználótól egy N számot, majd bekér N darab számot és kiírja az összegét. Javítsa ki a kódot, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio>
            main()
			{
				int n, osszeg = 0;
				scanf("%i",&N);

				for(i=0; i<N; ++i)
				{
					int buffer;
					scanf("%d",&buffer)
					osszeg += buffer
				}
				printf("%d", );
			}
            `,
            stdin: '3\n12\n13\n5\n',
            result: { 'stderr': '', 'stdout': '30', 'exitCode': 0 },
            time: 2 * 60
        },

        {
            level: 1,
            question: 'Az alábbi program beolvas 3 számot, majd meghatározza a legnagyobbat és kiírjatja. Javítsa ki a kódot, mert több elírás is történt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main()
			{
				int a, b, c, legnagyobb;
				scanf("%d%d%d", a, b, c)
				legnagyobb = ((a>b && a>c) ? a : (( b>a && b>c)? b ? c))
				printf("%d" legnagyobb);
			}
            `,
            stdin: '5\n6\n4\n',
            result: { 'stderr': '', 'stdout': '6', 'exitCode': 0 },
            time: 2 * 60
        },


    ];
