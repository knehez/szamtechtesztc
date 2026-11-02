export const codeQuestions_3 =
    [
        //
        // LEVEL 3 - egyszerű függvények vektor argumentummal
        //
        {
            level: 3,
            question: `Írjon egy "int oszthato(int*, int)" nevű függvényt, amely átvesz egy n elemű 
                       tömböt és méretét majd visszaadja hány darab 3-mal osztható van benne.`,
            testCode: `
            #include <stdio.h>
            main() {
                int v[] = {1,2,3,4,5,6,7,8,9,10};
                printf("%d", oszthato(v, 10));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '3', 'exitCode': 0 },
            time: 3 * 60
        },
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
        { // 5
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
                {
                    printf("%d", v[i]);
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '54321', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int* osszead(int*, int*, int)" nevű függvényt, amely átvesz két azonos méretű vektort és a méretüket, majd visszaadja a két vektor összegét tartalmazó vektort.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int v1[] = {1,2,3,4,5};
                int v2[] = {5,4,3,2,1};
                int *v3 = osszead(v1, v2, 5);
                for(int i = 0; i < 5; i++)
                {
                    printf("%d", *(v3+i));
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '66666', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 10
            level: 3,
            question: 'Írjon egy "int negyzetszam(int)" nevű függvényt, amely átvesz egy számot és ha az négyzetszám akkor 1-et ad vissza, egyébként 0-t.',
            testCode: `
            #include <stdio.h>
            main()
            {
                printf("%d", negyzetszam(16));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "void csere(int*, int*)" nevű függvényt, amely átvesz két számot és megcseréli az értéküket.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int a = 6, b = 2;
                csere(&a, &b);
                printf("%d %d", a, b);

            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '2 6', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int szorzat(int*, int)" nevű függvényt, amely átvesz egy vektort és a méretét, majd az elemeinek szorzatát adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int tomb[] = {2, 3, 4, 1, 2};
                printf("%d", szorzat(tomb, 5));

            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '48', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int* negyzet(int*, int)" nevű függvényt, amely átvesz egy vektort és a méretét, majd az elemeinek négyzetét tartalmazó vektort adja vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int tomb[] = {2, 3, 4};
                int * negyzet = (int *)calloc(3, sizeof(int));
                negyzet = negyzet(tomb, 3);
                for(int i = 0; i < 3; i++) {
                    printf("%d\n", *(negyzet+i));
                }
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '4\n9\n16\n', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int csak_paros(int*, int)" nevű függvényt, amely átvesz egy vektort és a méretét. Ha csak páros számokat tartalmaz a vektor, akkor 1-et, egyébként 0-t ad vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int tomb[] = {2, 6, 4};
                printf("%d", csak_paros(tomb, 3));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        { // 15
            level: 3,
            question: 'Írjon egy "int csak_paratlan(int*, int)" nevű függvényt, amely átvesz egy vektort és a méretét. Ha csak páratlan számokat tartalmaz a vektor, akkor 1-et, egyébként 0-t ad vissza.',
            testCode: `
            #include <stdio.h>
            main()
            {
                int tomb[] = {1, 5, 3};
                printf("%d", csak_paratlan(tomb, 3));
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int osszeg_paratlan(int*, int)" nevű függvényt, amely visszaadja a paraméterként kapott tömb páratlan elemeinek összegét.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {2, 5, 7, 4, 11};
                printf("%d", osszeg_paratlan(tomb, 5));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '23', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int elso_negativ_index(int*, int)" nevű függvényt, amely visszaadja az első negatív elem indexét, ha nincs ilyen, akkor -1-et.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {4, -2, 3, -1};
                printf("%d", elso_negativ_index(tomb, 4));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "void feltolt_szammal(int*, int, int)" nevű függvényt, amely a paraméterként kapott tömb minden elemét ugyanarra az értékre állítja.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[5];
                feltolt_szammal(tomb, 5, 9);
                for (int i = 0; i < 5; ++i) {
                    printf("%d ", tomb[i]);
                }
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '9 9 9 9 9 ', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "double paros_atlag(const int*, int)" nevű függvényt, amely visszaadja a tömb páros elemeinek átlagát (ha nincs páros elem, az átlag legyen 0).',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {2, 3, 8, 11, 14};
                printf("%.2f", paros_atlag(tomb, 5));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '8.00', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "void duplaz(int*, int)" nevű függvényt, amely a tömb minden elemét megduplázza.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {1, 3, 5};
                duplaz(tomb, 3);
                for (int i = 0; i < 3; ++i) {
                    printf("%d ", tomb[i]);
                }
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '2 6 10 ', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int monoton_novekvo(const int*, int)" nevű függvényt, amely 1-et ad vissza, ha a tömb szigorúan növekvő, egyébként 0-t.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {1, 2, 2, 4};
                printf("%d", monoton_novekvo(tomb, 4));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '0', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int legnagyobb_kulonbseg(const int*, int)" nevű függvényt, amely visszaadja a tömb legnagyobb és legkisebb eleme közötti különbséget.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {5, 12, -3, 18};
                printf("%d", legnagyobb_kulonbseg(tomb, 4));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '21', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int tartalmaz(const int*, int, int)" nevű függvényt, amely 1-et ad vissza, ha a keresett érték megtalálható a tömbben, különben 0-t.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {2, 4, 6, 8};
                printf("%d", tartalmaz(tomb, 4, 6));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '1', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "void fordit_szoveg(char*)" nevű függvényt, amely megfordítja a paraméterként kapott szöveget.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                char szoveg[] = "hello";
                fordit_szoveg(szoveg);
                printf("%s", szoveg);
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': 'olleh', 'exitCode': 0 },
            time: 3 * 60
        },
        {
            level: 3,
            question: 'Írjon egy "int osszeg_tartomany(const int*, int n, int min, int max)" nevű függvényt, amely visszaadja a tömb azon elemeinek összegét, amelyek a megadott zárt intervallumba esnek.',
            testCode: `
            #include <stdio.h>
            int main(void)
            {
                int tomb[] = {1, 5, 9, 12, 15};
                printf("%d", osszeg_tartomany(tomb, 5, 5, 12));
                return 0;
            }
            `,
            stdin: '',
            result: { 'stderr': '', 'stdout': '26', 'exitCode': 0 },
            time: 3 * 60
        }   
    ];



