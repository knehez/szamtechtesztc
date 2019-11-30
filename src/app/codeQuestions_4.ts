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
            level: -1,
            question: `Írjon egy **kiegeszit(char* input, int len)** nevű függvényt,
                       amely az input vektorban megadott len-karakter hosszúságú szöveg minden karaktere után egy szóközt szúr be.
                       ### Példa
                       ---
                       #### Bemenet
                       Hello

                       #### Kimenet
                       H e l l o

                       `,
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
    ];
