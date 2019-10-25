export const codeQuestions_4 =
    [
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
