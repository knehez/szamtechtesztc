export const codeQuestions_2 =
    [
        //
        // LEVEL 2 - egyszerű algoritmusok - bevitel és tömb
        //
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas 5 egész számot egy tömbbe és kiíratja a legnagyobb elemének az értéket.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            solution: `
            #include <stdio.h>
            main()
            {
                int tomb[5];
                
                for(int i = 0; i<5; i++)
                {
                    scanf("%d", &tomb[i]);
                }
                
                int legnagyobb = tomb[0];
                for(int i = 1; i<5; i++)
                {
                    if(legnagyobb < tomb[i])
                    {
                        legnagyobb = tomb[i];
                    }
                }
                printf("%d", legnagyobb);
            }`,
            stdin: '10\n1\n70\n9\n3\n',
            result: { 'stderr': '', 'stdout': '70', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas 10 egész számot és kiíratja azokat a beolvasással ellentétes sorrendben (minden szám új sorba kerüljön).',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n',
            result: { 'stderr': '', 'stdout': '9\n8\n7\n6\n5\n4\n3\n2\n1\n0\n', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy "N" számot és NxN méretű négyzetet rajzol csillagokból a konzolba.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '3',
            result: { 'stderr': '', 'stdout': '***\n***\n***\n', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy egész számot, majd összeadja a számokat 1-től n-ig és kiírja az eredményt.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            
            int main()
            {

            }
            `,
            solution: `
            #include <stdio.h>

            int main()
            {
                int n;
                scanf("%d", &n);
                
                int sum = 0;
                for(int i = 1; i <= n; i++)
                {
                    sum += i;
                }
                printf("%d", sum);
            }
            `,
            stdin: '9',
            result: { 'stderr': '', 'stdout': '45', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 5
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
            time: 4 * 60
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
            time: 4 * 60
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
            time: 4 * 60
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
            time: 4 * 60
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
            time: 4 * 60
        },
        { // 10
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy számot és ha az egész akkor "int" szöveget, ha tört akkor "float" szöveget ír ki.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '3.4',
            soluton: `
            #include <stdio.h>
            main()
            {
                float a;
                int b;
                scanf("%f", &a);
                b = a;
                if((float)b == a) printf("int");
                else printf("float");
            }
            `,
            result: { 'stderr': '', 'stdout': 'float', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely bekér egy karaktert és ha kisbetűs akkor "kicsi", ha nagybetűs akkor "nagy" szöveget ír ki.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: 'k',
            result: { 'stderr': '', 'stdout': 'kicsi', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely elvégzi az összeadás és kivonás műveletet. A felhasználó ilyen bemenetet adhat: 4 - 2',
            testCode: '',
            solution: `
            #include <stdio.h>
            int main()
            {
                int a, c, res;
                char b;
                scanf("%d %c %d", &a, &b, &c);
                if (b == '-')
                {
                    res = a - c;
                }
                if (b == '+')
                {
                    res = a + c;
                }
                printf("%d", res);
                return 0;
            }
            `,
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '9 - 1',
            result: { 'stderr': '', 'stdout': '8', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely beolvas egy számot és kiírja a számjegyeit fordított sorrendben.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '2486',
            result: { 'stderr': '', 'stdout': '6842', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 2,
            question: 'Írjon egy C programot, amely egy bekért N értékig kiírja a páros számokat külön sorba.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            main()
            {

            }
            `,
            stdin: '7',
            result: { 'stderr': '', 'stdout': '2\n4\n6\n', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 15
            level: 2,
            question: 'Írjon egy C programot, amely 0-tól egy bekért N értékig kiírja a páratlan számokat egymás után szóközök nélkül.',
            testCode: '',
            initialCode: `
            #include <stdio.h>
            int main()
            {

            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': '135', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 16
            level: 2,
            question: 'Irjon egy C programot, amely beolvas egy egész számot és kiirja a számjegyeinek összegét.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int n;
                if (scanf("%d", &n) != 1) {
                    return 0;
                }
                if (n < 0) {
                    n = -n;
                }
                int sum = 0;
                while (n > 0) {
                    sum += n % 10;
                    n /= 10;
                }
                printf("%d", sum);
                return 0;
            }
            `,
            stdin: '572',
            result: { 'stderr': '', 'stdout': '14', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 17
            level: 2,
            question: 'Irjon egy C programot, amely első sorban beolvas egy N értéket, majd N darab egész számot és megszámolja, hány pozitív volt közülük.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int n;
                if (scanf("%d", &n) != 1) {
                    return 0;
                }
                int count = 0;
                for (int i = 0; i < n; ++i) {
                    int value;
                    if (scanf("%d", &value) != 1) {
                        value = 0;
                    }
                    if (value > 0) {
                        count++;
                    }
                }
                printf("%d", count);
                return 0;
            }
            `,
            stdin: '5 -2 3 0 7 -1',
            result: { 'stderr': '', 'stdout': '2', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 18
            level: 2,
            question: 'Irjon egy C programot, amely Celsius fokrol Fahrenheit fokra vált és két tizedes pontossággal kiirja az eredmenyt.</br>Fahrenheit = Celsius * 9/5 + 32',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                float celsius;
                if (scanf("%f", &celsius) != 1) {
                    return 0;
                }
                float fahrenheit = celsius * 9.0f / 5.0f + 32.0f;
                printf("%.2f", fahrenheit);
                return 0;
            }
            `,
            stdin: '26.5',
            result: { 'stderr': '', 'stdout': '79.70', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 19
            level: 2,
            question: 'Irjon egy C programot, amely beolvas egy szó hosszú karakterláncot és megszámolja benne a magánhangzók számát (a, e, i, o, u, kis- és nagybetű).',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                char word[201];
                if (scanf("%200s", word) != 1) {
                    return 0;
                }
                int count = 0;
                for (int i = 0; word[i] != NULL; ++i) {
                    char c = word[i];
                    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
                        c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                        count++;
                    }
                }
                printf("%d", count);
                return 0;
            }
            `,
            stdin: 'programozas',
            result: { 'stderr': '', 'stdout': '4', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 20
            level: 2,
            question: 'Irjon egy C programot, amely két egész számot olvas be és kiirja az összes egész számot a két érték között, beleértve a határokat is.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int a, b;
                if (scanf("%d %d", &a, &b) != 2) {
                    return 0;
                }
                for (int i = a; i <= b; ++i) {
                    printf("%d ", i);
                }
                return 0;
            }
            `,
            stdin: '3 7',
            result: { 'stderr': '', 'stdout': '3 4 5 6 7 ', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 21
            level: 2,
            question: 'Irjon egy C programot, amely kiszámolja egy beolvasott N szám faktoriálisát.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int n;
                if (scanf("%d", &n) != 1) {
                    return 0;
                }
                unsigned long long fact = 1;
                for (int i = 2; i <= n; ++i) {
                    fact *= i;
                }
                printf("%llu", fact);
                return 0;
            }
            `,
            stdin: '6',
            result: { 'stderr': '', 'stdout': '720', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 22
            level: 2,
            question: 'Irjon egy C programot, amely első sorban beolvas egy N értéket, majd N darab valós számot és kiirja az összegüket két tizedesjeggyel.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int n;
                if (scanf("%d", &n) != 1) {
                    return 0;
                }
                double sum = 0.0;
                for (int i = 0; i < n; ++i) {
                    double value;
                    if (scanf("%lf", &value) != 1) {
                        value = 0.0;
                    }
                    sum += value;
                }
                printf("%.2f", sum);
                return 0;
            }
            `,
            stdin: '3 1.5 2.5 3.0',
            result: { 'stderr': '', 'stdout': '7.00', 'exitCode': 0 },
            time: 4 * 60
        },
        { // 24
            level: 2,
            question: 'Irjon egy C programot, amely egy beolvasott számhoz elkészíti a szorzótábláját 1-től 10-ig, minden eredményt külön sorba írva.',
            testCode: '',
            initialCode: `
            #include <stdio.h>

            int main(void) {
                // TODO: write your solution here
                return 0;
            }
            `,
            solution: `
            #include <stdio.h>

            int main(void)
            {
                int n;
                if (scanf("%d", &n) != 1) {
                    return 0;
                }
                for (int i = 1; i <= 10; ++i) {
                    printf("%d*%d=%d\n", n, i, n * i);
                }
                return 0;
            }
            `,
            stdin: '4',
            result: { 'stderr': '', 'stdout': '4*1=4\n4*2=8\n4*3=12\n4*4=16\n4*5=20\n4*6=24\n4*7=28\n4*8=32\n4*9=36\n4*10=40\n', 'exitCode': 0 },
            time: 4 * 60
        }
    ];

