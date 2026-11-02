export const codeQuestions_0 =
    [
        {
            level: 0,
            question: 'Írja be a hiányzó sort, amely a ciklusban hozzáadja az aktuális értéket az összeghez.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int osszeg = 0;
                for (int i = 1; i <= 5; ++i) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", osszeg);
                return 0;
            }
            `,
            stdin: '',
            solution: `osszeg += i;`,
            result: { 'stderr': '', 'stdout': '15', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Egészítse ki a faktoriális számítást a megfelelő szorzással.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int fakt = 1;
                for (int i = 1; i <= 5; ++i) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", fakt);
                return 0;
            }
            `,
            stdin: '',
            solution: `fakt *= i;`,
            result: { 'stderr': '', 'stdout': '120', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Töltse fel a tömböt úgy, hogy az index kétszeresét tárolja.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int dupla[5];
                for (int i = 0; i < 5; ++i) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", dupla[3]);
                return 0;
            }
            `,
            stdin: '',
            solution: `dupla[i] = i * 2;`,
            result: { 'stderr': '', 'stdout': '6', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Egészítse ki a feltételes blokkot, hogy az páros számokat adjon az összeghez.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {3, 4, 7, 8, 2};
                int osszeg = 0;
                for (int i = 0; i < 5; ++i) {
                    if (tomb[i] % 2 == 0) {
                        // HIÁNYZÓ SOR
                    }
                }
                printf("%d", osszeg);
                return 0;
            }
            `,
            stdin: '',
            solution: `osszeg += tomb[i];`,
            result: { 'stderr': '', 'stdout': '14', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Mozgassa a karaktermutatót úgy, hogy a harmadik betűt írjuk ki.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                const char *p = "alma";
                // HIÁNYZÓ SOR
                printf("%c", *p);
                return 0;
            }
            `,
            stdin: '',
            solution: `p += 2;`,
            result: { 'stderr': '', 'stdout': 'm', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Határozza meg a szöveg hosszát a megfelelő standard függvénnyel.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <string.h>
            int main(void)
            {
                char szoveg[] = "korte";
                int hossz = 0;
                // HIÁNYZÓ SOR
                printf("%d", hossz);
                return 0;
            }
            `,
            stdin: '',
            solution: `hossz = strlen(szoveg);`,
            result: { 'stderr': '', 'stdout': '5', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Írja be a sort, amely elosztja az összeget az elemek számával.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {2, 4, 6, 8};
                double atlag = 0.0;
                for (int i = 0; i < 4; ++i) {
                    atlag += tomb[i];
                }
                // HIÁNYZÓ SOR
                printf("%.1f", atlag);
                return 0;
            }
            `,
            stdin: '',
            solution: `atlag /= 4.0;`,
            result: { 'stderr': '', 'stdout': '5.0', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Állítsa a jelzőt nullára, ha páros elemet találunk a tömbben.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {1, 3, 6, 7};
                int csakParatlan = 1;
                for (int i = 0; i < 4; ++i) {
                    if (tomb[i] % 2 == 0) {
                        // HIÁNYZÓ SOR
                    }
                }
                printf("%d", csakParatlan);
                return 0;
            }
            `,
            stdin: '',
            solution: `csakParatlan = 0;`,
            result: { 'stderr': '', 'stdout': '0', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Adja vissza a két szám közül a kisebbet a min változóban.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int a = 12;
                int b = 5;
                int min = a;
                if (b < min) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", min);
                return 0;
            }
            `,
            stdin: '',
            solution: `min = b;`,
            result: { 'stderr': '', 'stdout': '5', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Egészítse ki a karaktertömb lezárását, hogy helyes C-sztring legyen.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                char forras[] = "fa";
                char cel[10] = {'?', '?', '?', '\\0'};
                int i = 0;
                while (forras[i] != '\\0') {
                    cel[i] = forras[i];
                    i++;
                }
                // HIÁNYZÓ SOR
                printf("%s", cel);
                return 0;
            }
            `,
            stdin: '',
            solution: `cel[i] = '\\0';`,
            result: { 'stderr': '', 'stdout': 'fa', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Növelje a gyök változót a ciklusban, amíg a feltétel teljesül. Használja a ++ operátort.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int szam = 9;
                int gyok = 0;
                while (gyok * gyok < szam) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", gyok);
                return 0;
            }
            `,
            stdin: '',
            solution: `gyok++;`,
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Számolja meg, hány szóköz található a megadott szövegben. Használja a ++ operátort.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                char szoveg[] = "itt sok space van";
                int darab = 0;
                for (int i = 0; szoveg[i] != '\\0'; ++i) {
                    if (szoveg[i] == ' ') {
                        // HIÁNYZÓ SOR
                    }
                }
                printf("%d", darab);
                return 0;
            }
            `,
            stdin: '',
            solution: `darab++;`,
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Másolja át a "hello" konstans sztringet a dinamikusan foglalt területre.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <stdlib.h>
            #include <string.h>
            int main(void)
            {
                char *p = malloc(6);
                // HIÁNYZÓ SOR
                printf("%s", p);
                free(p);
                return 0;
            }
            `,
            stdin: '',
            solution: `strcpy(p, "hello");`,
            result: { 'stderr': '', 'stdout': 'hello', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Hívja meg a negyzet függvényt úgy, hogy az ertek változóban tárolódjon a függvényhívás eredmény.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int negyzet(int n)
            {
                return n * n;
            }
            int main(void)
            {
                int ertek = 5;
                // HIÁNYZÓ SOR
                printf("%d", ertek);
                return 0;
            }
            `,
            stdin: '',
            solution: `ertek = negyzet(ertek);`,
            result: { 'stderr': '', 'stdout': '25', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Adja hozzá a pointer által mutatott elemet az összeghez a ciklusban.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {1, 2, 3, 4};
                int osszeg = 0;
                int *ptr = tomb;
                for (int i = 0; i < 4; ++i) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", osszeg);
                return 0;
            }
            `,
            stdin: '',
            solution: `osszeg += *(ptr + i);`,
            result: { 'stderr': '', 'stdout': '10', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Alakítsa a betűt nagybetűvé a standard függvénnyel.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <ctype.h>
            int main(void)
            {
                char betu = 'q';
                // HIÁNYZÓ SOR
                printf("%c", betu);
                return 0;
            }
            `,
            stdin: '',
            solution: `betu = (char)toupper((unsigned char)betu);`,
            result: { 'stderr': '', 'stdout': 'Q', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Számítsa ki a maradékot 5-el osztás után a megfelelő operátorral, és tárolja a maradékot a maradek változóban.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int szam = 37;
                int maradek = 0;
                // HIÁNYZÓ SOR
                printf("%d", maradek);
                return 0;
            }
            `,
            stdin: '',
            solution: `maradek = szam % 5;`,
            result: { 'stderr': '', 'stdout': '2', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Cserélje fel a szöveg első és utolsó karakterét.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            #include <string.h>
            int main(void)
            {
                char s[] = "kapa";
                int n = (int)strlen(s);
                char tmp = s[0];
                s[0] = s[n - 1];
                // HIÁNYZÓ SOR
                printf("%s", s);
                return 0;
            }
            `,
            stdin: '',
            solution: `s[n - 1] = tmp;`,
            result: { 'stderr': '', 'stdout': 'aapk', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Vegye ki az utolsó számjegyet a számból a megfelelő operátorral.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                int szam = 1234;
                int utolso = 0;
                // HIÁNYZÓ SOR
                printf("%d", utolso);
                return 0;
            }
            `,
            stdin: '',
            solution: `utolso = szam % 10;`,
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 0,
            question: 'Számítsa ki a szöveg számjegyeinek szorzatát a ciklusban.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main(void)
            {
                char szoveg[] = "59";
                int szorzat = 1;
                for (int i = 0; szoveg[i] != '\\0'; ++i) {
                    // HIÁNYZÓ SOR
                }
                printf("%d", szorzat);
                return 0;
            }
            `,
            stdin: '',
            solution: `szorzat *= szoveg[i] - '0';`,
            result: { 'stderr': '', 'stdout': '45', 'exitCode': 0 },
            time: 3 * 60
        }
    ];