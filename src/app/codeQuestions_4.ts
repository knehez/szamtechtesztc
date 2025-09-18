export const codeQuestions_4 =
    [
        //
        // LEVEL 4 - sztringkezelés
        //
        {
            level: 4,
            question: `Írjon egy **megfordit(char* input, int len)** nevű függvényt,
                       amely az input vektorban megadott len-karakter hosszúságú szöveget megfordítja.`,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {
                char v[] = "abcdef";
                megfordit(v, 6);
                printf("%s", v);
            }
            `,
            stdin: '',
            solution: `
            megfordit(char* input, int len)
            {
                for(int i = 0; i < len/2; i++)
                {
                    char temp = input[i];
                    input[i] = input[len-1-i];
                    input[len-1-i] = temp;
                }
            }
            `,
            result: { 'stderr': '', 'stdout': 'fedcba', 'exitCode': 0 },
            time: 3 * 60
        },
        {
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
        {
            level: 4,
            question: `Írjon egy **char* kiegeszit(char* input, int len)** nevű függvényt,
                       ami az input vektorban megadott **len**-karakter hosszúságú szöveg minden karaktere után egy _szóközt_ szúr be.

                       Ha a **bemenet**: HELLO, akkor a **függvény visszatérési értéke**: H E L L O legyen.
                       * hozzon létre egy megfelelő méretű új karaktervektort a függvényben dinamikusan
                       * másolja bele az input karaktertömb értékeit és a szóközöket
                       * az új karaktervektor utolsó karakterét nullázza le.
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            char* kiegeszit(char* input, int len);
            main()
            {
                char v[] = "abcdef";
                printf("%s", kiegeszit(v, 6));
            }
            `,
            stdin: '',
            solution: `
            char* kiegeszit(char* input, int len)
            {
                // egyel kisebb mint a kétszerese lesz az új char*
                char *res = (char*)malloc(len + len - 1);
                for(int i = 0; i < len*2-1; i++)
                {
                    if(i % 2 == 0)
                    {
                        res[i] = input[i/2];
                    }
                    else
                    {
                        res[i] = ' ';
                    }
                }
                // a legutolsó karakter 0 kell legyen, a lezárás miatt
                res[len*2-1] = '\0';
                return res;
            }
            `,
            result: { 'stderr': '', 'stdout': 'a b c d e f', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 4,
            question: `Írjon egy **int wordCounter(char* input, int len)** nevű függvényt,
                       ami az input vektorban megadott **len**-karakter hosszúságú szöveget megvizsgálja és visszaadja, hogy hány szó van benne.

                       Ha a **bemenet**: "Hello world here", akkor a **függvény visszatérési értéke**: 3.

                       (megjegyzés: a szavak között csak 1 szóköz lehet a bemenetekben)
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>
            int wordCounter(char* input, int len);
            main()
            {
                char v[] = "ez ez asdasdas ass ss";
                printf("%d", wordCounter(v, 21));
            }
            `,
            stdin: '',
            solution: `
            int wordCounter(char* input, int len)
            {
                // számoljuk meg a szóközöket
                int space = 0;
                for(int i = 0; i < len; i++)
                {
                    if(input[i] == ' ')
                    {
                        space++;
                    }
                }
                return space + 1;
            }
            `,
            result: { 'stderr': '', 'stdout': '5', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 5
            level: 4,
            question: `Írjon egy **char leggyakoribb(char* input, int len)** nevű függvényt,
                       ami az input vektorban megadott **len**-karakter hosszúságú szöveget megvizsgálja és visszaadja, hogy melyik betű fordul elő benne a legtöbbször.

                       Ha a **bemenet**: "Hello here", akkor a **függvény visszatérési értéke**: e.

                       (megjegyzés: a legtöbbször előfordulóból mindig 1 lesz)

                       * készítsünk egy tömböt, ami az egyes előfordulásokat fogja tartalmazni, 0-val inicializáljuk az elemeit
                       * karakterenként menjünk végig az input vektoron és a számlálótömb megfelelő elemét növeljük
                       * válaszzuk ki melyik elem fordul elő a tömbben legtöbbször és adjuk vissza az indexét
                       `,
            testCode: `
            #include <stdio.h>
            #include <stdlib.h>

            char leggyakoribb(char* input, int len);

            main()
            {
                char v[] = "ez ss asdasdas ass ss";
                printf("%c", leggyakoribb(v, 21));
            }
            `,
            stdin: '',
            solution: `
            char leggyakoribb(char* input, int len)
            {
                char gyakorisag[255];
                for(int i=0; i<255; i++)
                {
                    gyakorisag[i] = 0;
                }

                for(int i=0; i<len; i++)
                {
                    gyakorisag[(int)input[i]]+=1;
                }

                int max = gyakorisag[0];
                char gyakori;
                for(int i=0; i<255; i++)
                {
                    if(max < gyakorisag[i])
                    {
                        max = gyakorisag[i];
                        gyakori = i;
                    }
                }
                return gyakori;
            }
            `,
            result: { 'stderr': '', 'stdout': 's', 'exitCode': 0 },
            time: 5 * 60
        },
        { // 6
            level: 4,
            question: `Írjon egy C függvényt, folytatva a megkezdettet, amely kap egy sztringet, majd megvizsgálja, hogy a sztring palindróm-e (azaz ugyanaz, ha visszafelé olvassuk)`,
            initialCode: `
            int palindrom(const char* input)
            {
                int length = strlen(input);



            }
            `,
            testCode: `
            #include <string.h>
            #include <stdio.h>
            int palindrom(const char* input);
            int main()
            {
                if(palindrom("radar") && !palindrom("radir"))
                {
                    return 0;
                }
                return 1;
            }
            `,
            stdin: '',
            solution: `
            int palindrom(const char* input)
            {
                int palindrom = 1;
                for (int i = 0, j = strlen(input) - 1; i < j; i++, j--) {
                    if (input[i] != input[j]) {
                        palindrom = 0;
                        break;
                    }
                }
                return palindrom;
            }
            `,
            result: { 'stderr': '', 'stdout': '', 'exitCode': 0 },
            time: 5 * 60
        },
        { // 7
            level: 4,
            question: `Írjon egy C szamol() függvényt, amely megkap egy sztringet paraméterként, majd kiírja a sztringben található számjegyek összegét.`,
            initialCode: `
            int szamjegyekOsszege(const char *sztring) {
                int i, sum;
            
                sum = 0;
            





                return sum;
            }
            `,
            testCode: `
            #include <stdio.h>

            int szamjegyekOsszege(const char *sztring);

            int main() {
                char sztring[100];

                fgets(sztring, sizeof(sztring), stdin);

                int osszeg = szamjegyekOsszege(sztring);

                printf("%d", osszeg);

                return 0;
            }
            `,
            stdin: 'asdasdas1scsdf5ssdf8',
            solution: `
            `,
            result: { 'stderr': '', 'stdout': '14', 'exitCode': 0 },
            time: 5 * 60
        },

        { // 8
            level: 4,
            question: 'Írjon egy "int maganhangzo_szamlal(const char*)" nevű függvényt, amely visszaadja, hány magánhangzó található a kapott szövegben (a, e, i, o, u betűk kis- és nagybetűs változata).',
            testCode: `
            #include <stdio.h>
            int maganhangzo_szamlal(const char* szoveg);
            int main(void)
            {
                printf("%d", maganhangzo_szamlal("Programozas"));
                return 0;
            }
            `,
            stdin: '',
            solution: `
            int maganhangzo_szamlal(const char *szoveg)
            {
                int darab = 0;
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    char c = szoveg[i];
                    if (c == 'a' || c == 'A' || c == 'e' || c == 'E' ||
                        c == 'i' || c == 'I' || c == 'o' || c == 'O' ||
                        c == 'u' || c == 'U') {
                        ++darab;
                    }
                }
                return darab;
            }
            `,
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 9
            level: 4,
            question: 'Írjon egy "void kisbetusit(char*)" nevű függvényt, amely minden karaktert kisbetűssé alakít a kapott szövegben.',
            testCode: `
            #include <stdio.h>
            #include <ctype.h>
            void kisbetusit(char* szoveg);
            int main(void)
            {
                char szoveg[] = "Szia Vilag!";
                kisbetusit(szoveg);
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            #include <ctype.h>
            void kisbetusit(char *szoveg)
            {
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    szoveg[i] = (char)tolower((unsigned char)szoveg[i]);
                }
            }
            `,
            result: { 'stderr': '', 'stdout': 'szia vilag!', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 10
            level: 4,
            question: 'Írjon egy "void eltavolit_karakter(char*, char)" nevű függvényt, amely eltávolítja a megadott karakter minden előfordulását a szövegből.',
            testCode: `
            #include <stdio.h>
            void eltavolit_karakter(char* szoveg, char c);
            int main(void)
            {
                char szoveg[] = "banan";
                eltavolit_karakter(szoveg, 'a');
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            void eltavolit_karakter(char *szoveg, char c)
            {
                int j = 0;
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    if (szoveg[i] != c) {
                        szoveg[j++] = szoveg[i];
                    }
                }
                szoveg[j] = '\0';
            }
            `,
            result: { 'stderr': '', 'stdout': 'bnn', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 11
            level: 4,
            question: 'Írjon egy "int suffixel(const char*, const char*)" nevű függvényt, amely 1-et ad vissza, ha az első szöveg utolsó karakterei megegyeznek a másodikkal, különben 0-t.',
            testCode: `
            #include <stdio.h>
            int suffixel(const char* szoveg, const char* suf);
            int main(void)
            {
                printf("%d", suffixel("programozas", "zas"));
                return 0;
            }
            `,
            stdin: '',
            solution: `
            int suffixel(const char *szoveg, const char *suf)
            {
                int n = 0;
                while (szoveg[n] != '\0') {
                    ++n;
                }
                int m = 0;
                while (suf[m] != '\0') {
                    ++m;
                }
                if (m > n) {
                    return 0;
                }
                for (int i = 0; i < m; ++i) {
                    if (szoveg[n - m + i] != suf[i]) {
                        return 0;
                    }
                }
                return 1;
            }
            `,
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 12
            level: 4,
            question: 'Írjon egy "void rovidit(char*, int)" nevű függvényt, amely a megadott hosszra csonkolja a szöveget (és lezárja nullával).',
            testCode: `
            #include <stdio.h>
            void rovidit(char* szoveg, int hossz);
            int main(void)
            {
                char szoveg[] = "program";
                rovidit(szoveg, 4);
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            void rovidit(char *szoveg, int hossz)
            {
                if (hossz < 0) {
                    hossz = 0;
                }
                szoveg[hossz] = '\0';
            }
            `,
            result: { 'stderr': '', 'stdout': 'prog', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 13
            level: 4,
            question: 'Írjon egy "int csak_alphanumerikus(const char*)" nevű függvényt, amely 1-et ad vissza, ha a szöveg minden karaktere betű vagy szám, különben 0-t.',
            testCode: `
            #include <stdio.h>
            #include <ctype.h>
            int csak_alphanumerikus(const char* szoveg);
            int main(void)
            {
                printf("%d", csak_alphanumerikus("abc123"));
                return 0;
            }
            `,
            stdin: '',
            solution: `
            int csak_alphanumerikus(const char *szoveg)
            {
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    if (!isalnum((unsigned char)szoveg[i])) {
                        return 0;
                    }
                }
                return 1;
            }
            `,
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 14
            level: 4,
            question: 'Írjon egy "void szokozok_torol(char*)" nevű függvényt, amely eltávolítja a szövegből az összes szóközt.',
            testCode: `
            #include <stdio.h>
            void szokozok_torol(char* szoveg);
            int main(void)
            {
                char szoveg[] = "a b  c";
                szokozok_torol(szoveg);
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            void szokozok_torol(char *szoveg)
            {
                int j = 0;
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    if (szoveg[i] != ' ') {
                        szoveg[j++] = szoveg[i];
                    }
                }
                szoveg[j] = '\0';
            }
            `,
            result: { 'stderr': '', 'stdout': 'abc', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 15
            level: 4,
            question: 'Írjon egy "int leghosszabb_szo(const char*)" nevű függvényt, amely visszaadja a leghosszabb szó hosszát a szóközökkel elválasztott szövegben.',
            testCode: `
            #include <stdio.h>
            int leghosszabb_szo(const char* szoveg);
            int main(void)
            {
                printf("%d", leghosszabb_szo("ez egy feladat"));
                return 0;
            }
            `,
            stdin: '',
            solution: `
            int leghosszabb_szo(const char *szoveg)
            {
                int max = 0;
                int akt = 0;
                for (int i = 0;; ++i) {
                    char c = szoveg[i];
                    if (c != '\0' && c != ' ') {
                        ++akt;
                    } else {
                        if (akt > max) {
                            max = akt;
                        }
                        if (c == '\0') {
                            break;
                        }
                        akt = 0;
                    }
                }
                return max;
            }
            `,
            result: { 'stderr': '', 'stdout': '7', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 16
            level: 4,
            question: 'Írjon egy "void karakter_csere(char*, char, char)" nevű függvényt, amely a régi karaktert az újra cseréli a szövegben.',
            testCode: `
            #include <stdio.h>
            void karakter_csere(char* szoveg, char regi, char uj);
            int main(void)
            {
                char szoveg[] = "cica";
                karakter_csere(szoveg, 'c', 'k');
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            void karakter_csere(char *szoveg, char regi, char uj)
            {
                for (int i = 0; szoveg[i] != '\0'; ++i) {
                    if (szoveg[i] == regi) {
                        szoveg[i] = uj;
                    }
                }
            }
            `,
            result: { 'stderr': '', 'stdout': 'kika', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 17
            level: 4,
            question: 'Írjon egy "void fordit_masol(const char*, char*)" nevű függvényt, amely a forrás szöveget megfordítva másolja a cél tömbbe.',
            testCode: `
            #include <stdio.h>
            #include <string.h>
            void fordit_masol(const char* forras, char* cel);
            int main(void)
            {
                char cel[20];
                fordit_masol("korte", cel);
                printf("%s", cel);
                return 0;
            }
            `,
            stdin: '',
            solution: `
            #include <string.h>
            void fordit_masol(const char *forras, char *cel)
            {
                int hosszn = (int)strlen(forras);
                for (int i = 0; i < hosszn; ++i) {
                    cel[i] = forras[hosszn - 1 - i];
                }
                cel[hosszn] = '\0';
            }
            `,
            result: { 'stderr': '', 'stdout': 'etrok', 'exitCode': 0 },
            time: 3 * 60
        }

    ];
