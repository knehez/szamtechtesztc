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
    ];
