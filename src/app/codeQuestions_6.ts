export const codeQuestions_6 =
    [
        //
        // LEVEL 6
        //
        {
            level: 6,
            question: `**Pont a síkon**. Definiáljon egy **Point** nevű struktúrát egy **x** és egy **y** egész típusú adattagokkal.<br>
                       Kérjen be a felhasználótól egy ilyen Pont-ot és tükrözze az x tengelyre és írassa ki a koordinátáit.`,
            testCode: `
            struct Point point = {10, 10};
            `,
            stdin: '100\n100\n',
            solution: `
            #include <stdio.h>
            struct Point
            {
                int x;
                int y;
            };

            int main()
            {
                struct Point p;
                scanf("%d", &p.x);
                scanf("%d", &p.y);
                printf("%d %d", p.x, -p.y);
            }
            `,
            result: { 'stderr': '', 'stdout': '100 -100', 'exitCode': 0 },
            time: 4 * 60
        },
        {
            level: 6,
            question: `**Láncolt lista**. Definiáljon egy **Node** nevű struktúrát egy **num** egész és egy **nextNode**, a **Node** struktúrára 
                       mutató pointer adattagokkal.<br>
                       Kérjen be a felhasználótól három egész számot, készítesen láncolt listát belőlük és írassa ki a három érték összegét a
                       **void printNodes(struct node *n)** már megírt függvény felhasználásával.`,
            initialCode: `
            #include <stdio.h>
            #include <stdio.h>
            #include <stdlib.h>
            main()
            {

            }
            `,
            testCode: `
            void printNodes(struct node *n)
            {
                int sum = 0;
                while(n != NULL)
                {
                    sum += n->num;
                    n = n->nextNode;
                }
                printf("%d", sum);
            }
            `,
            solution: `
            #include <stdio.h>
            #include <stdio.h>
            #include <stdlib.h>

            struct node
            {
                int num;
                struct node *nextNode;
            };

            int main()
            {
                struct node *n1, *n2, *n3;
                n1 = (struct node *) malloc(sizeof(struct node));
                n2 = (struct node *) malloc(sizeof(struct node));
                n3 = (struct node *) malloc(sizeof(struct node));
                n1->nextNode = n2;
                n2->nextNode = n3;
                n3->nextNode = NULL;
                scanf("%d %d %d", &n1->num, &n2->num, &n3->num );
                printNodes(n1);
                return 0;
            }
            `,
            stdin: '10 20 30',
            result: { 'stderr': '', 'stdout': '60', 'exitCode': 0 },
            time: 5 * 60
        }
    ];
