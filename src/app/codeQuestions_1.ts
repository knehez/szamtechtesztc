export const codeQuestions_1 =
    [
        //
        // LEVEL 1 - szintaktika gyakorlása
        //
        {
            level: 1,
            question: `Az alábbi program kiírná hogy a beolvasott karakter kicsi vagy nagybetű,
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
					printf("mas karakter\n");
				}
			}
            `,
            stdin: 'F',
            result: { 'stderr': '', 'stdout': 'karakter:nagy betu', 'exitCode': 0 },
            time: 1 * 60
        },
        {
            level: 1,
            question: `Az alábbi program kiírná hogy a beolvasott szám páros vagy páratlan,
                        de nem működik. Javítsa ki, mert több elírás is történt.`,
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {
                int szam;
				scanf("&f", szam);
				if(szam % 2 = 0) printf("paros");
				else printf("paratlan");
            }
            `,
            stdin: '9',
            result: { 'stderr': '', 'stdout': 'paratlan', 'exitCode': 0 },
            time: 1 * 60
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
            time: 1 * 60
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
            time: 1 * 60
        },
        {
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
            time: 1 * 60
        },
        {
            level: 1,
            question: 'Az alábbi program beolvas 5 számot, majd meghatározza a legnagyobbat és kiírjatja, hogy hanyadikként olvastuk be.',
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
            time: 1 * 60
        },
    ];
