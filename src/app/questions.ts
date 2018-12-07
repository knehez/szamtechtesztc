export const testQuestions =
    [
        {
            question: 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
            code: `
            for (int i = 0; i < 10; i++)
            {
                printf("%?", i);
            }
            `,
            wrong: ['i', 'f', '#', '%'],
            good: 'd',
        },
        {
            'question': 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
            code: `
            for (int i = 0; i < 10; i++)
            {
                printf("sorszam:%d", ?);
            }
            `,
            wrong: ['float', 'l', 'const', 'struct'],
            good: 'i',
        },
        {
            'question': 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
            code: `
            for (int i = 0; i < 10; i?)
            {
                printf("sorszam:%d", i);
            }
            `,
            wrong: ['= 1', '!', ';', '[0]', '&'],
            good: '++',
        },
        {
            'question': 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
            code: `
            int a = 1;
            int *b;
            b = ?a;
            `,
            wrong: ['*', '#', '(int *)', '(float *)'],
            good: '&',
        },
        {
            'question': 'Mit ír ki az alábbi C program?',
            code: `
            void func()
            {
                int a = 2;
                int b = 5;
                b += ++a * --b;
                printf("Eredmeny:%d", b);
            }
            `,
            wrong: ['14', '18', '22', '12', '10'],
            good: '16',
        },
        {
            'question': 'Mit ír ki az alábbi C program?',
            code: `
            main()
            {
                int a = 3;
                int b = 6;
                b += ++a * b % a;
                printf("Eredmeny:%d", b);
            }
            `,
            wrong: ['4', '8', '2', '2', '0'],
            good: '6',
        },
        {
            'question': 'Mi kerül a ???-ek helyére a helyes futtatáshoz?',
            code: `
            main()
            {
                int szam;
                printf("Kerek egy szamot:")
                ???("%d", &szam);
                ???("%d, szam);
            }
            `,
            wrong: ['printf  scanf', 'print scan', 'fprint scanf', 'sprintf sscanf', 'float int'],
            good: 'scanf  printf',
        },
        {
            'question': 'Mi kerül a ???-ek helyére a helyes futtatáshoz?',
            code: `
            main()
            {
                int f = 10, b = f % 3;
                ???(;f < b % 2;)
                {
                    f++;
                }
            }
            `,
            wrong: ['foreach', 'while', 'do', 'switch', '(void *)'],
            good: 'for',
        },
        {
            'question': 'Mi kerül a ???-ek helyére a helyes struktúra definiáláshoz?',
            code: `
            main()
            {
                ??? ???
                {
                    float x;
                    float y;
                } ???;

                Point2D p1 = {1.0, 2.0};
            }            `,
            wrong: ['struct Point2D', 'typedef Point2D struct', 'void Point2D struct', 'typedef struct Point3D', 'new type struct'],
            good: 'typedef struct Point2D',
        },
        {
            'question': 'Mi kerül a ??? helyére a helyes struktúra definiáláshoz?',
            code: `
            main()
            {
                typedef struct
                {
                    ???
                } Point2D;

                Point2D p1 = {5.0, 2.0};
            }
            `,
            wrong: ['float x, y', 'int x, y;', 'float x,y,z;', 'int x, y'],
            good: 'float x, y;',
        },
        {
            'question': 'Mi kerül a ??? helyére a helyes struktúra definiáláshoz?',
            code: `
            main()
            {
                typedef struct
                {
                    ???
                } Point2D;

                Point2D p1 = {5.0, 2.0};
            }
            `,
            wrong: ['float x, y', 'float x, float y;', 'float x,y,z;', 'float x, y,', 'float x;y;'],
            good: 'float x, y;',
        },
        {
            'question': 'Melyek a helyes C adattípusok?',
            code: `
            `,
            wrong: ['int, double, char, boolean', 'int, bool, string', 'int, float, double, char', 'int, float, string, char'],
            good: 'int, float, double, char',
        },
        {
            'question': 'Mit írna az ___ -ok helyére hogy szintaktikailag helyes kódot kapjunk?',
            code: `
                ___ num;
                num __ 42;
            `,
            wrong: ['= int', 'float float', 'int int', '= int', '* &', 'int &='],
            good: 'int =',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            void main()
            {
                int a;
                a = 1;
                while(a == -1);
                while(a-->=0);
                printf("%d", a);
            }
            `,
            wrong: ['3', '-1', '0', '1', '-3'],
            good: 'hiba',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            void main()
            {
                int x;
                x = 1, 2, 3, 4;
                printf("%d", x);
            }
            `,
            wrong: ['1', '2', '3', '0', 'hiba'],
            good: '4',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>;
            int x;
            void main()
            {
                printf("%d", x);
            }
            `,
            wrong: ['memória szemét', '0', 'valami más'],
            good: 'hiba',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int v[3][4] = {1,2,3,4,5,6,7,8,9,10,11,12};
                printf("%d", v[2][3]);
            }
            `,
            wrong: ['7', '8', '9', '10', '11'],
            good: '12',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int a = 1;
                printf("%d", a << 15);
            }
            `,
            wrong: ['32769', '-32768', '32767', 'hiba', 'egyik sem'],
            good: '32768',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int a = 1;
                printf("%d", a >> 1);
            }
            `,
            wrong: ['1', '2', '-1', 'hiba', 'egyik sem'],
            good: '0',
        },
        {
            'question': 'Hányszor fut le a ciklus?',
            code: `
            #include <stdio.h>
            main()
            {
                int a = 1;
                while(a <= 100)
                {
                    printf("%d", a++);
                }
            }
            `,
            wrong: ['1', '0', 'végtelen', 'egyik sem'],
            good: '100',
        },
        {
            'question': 'Hányszor fut le a ciklus?',
            code: `
            #include <stdio.h>
            main()
            {
                int a = 1;
                while(a <= 100)
                {
                    printf("%d", a++);
                }
            }
            `,
            wrong: ['1', '0', 'végtelen', 'egyik sem'],
            good: '100',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int i;
                i = 1;
                i = i + 2*i++;
                printf("%d", i++);
            }
            `,
            wrong: ['3', '5', '6', 'egyik sem'],
            good: '4',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int a = 6, b = 6, c = 7;
                printf("%d", !((b+c)>(a+10)));
            }
            `,
            wrong: ['0', '2', '-1', 'true', 'false', 'egyik sem'],
            good: '1',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            void main(){
                int a;
                a=1;
                a++ * ++a;
                printf("%d",a);
            }
            `,
            wrong: ['0', '1', '2', '4', 'egyik sem'],
            good: '3',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            void main(){
                int i=10;
                printf("%d %d %d",++i, i++, ++i);
            }
            `,
            wrong: ['11 12 13', '11 10 11', '10 12 11', 'egyik sem'],
            good: '13 11 13',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            const enum Alpha{
                  X,
                  Y = 5,
                  Z
            } p = 10;
            int main(){
                enum Alpha a,b;
                a = X;
                b = Z;
                printf("%d", a + b - p);
                return 0;
            }
            `,
            wrong: ['-8', '-6', '4', '6', '-2'],
            good: '-4',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main()
            {
                int i, j, *ptr, *ptr1;
                i = 10;
                j = 10;
                ptr = &i;
                ptr1 = &j;
                if(ptr == ptr1)
                {
                    printf("True");
                }
                else
                {
                    printf("False");
                }
            }
            `,
            wrong: ['True', 'True False', 'semmi'],
            good: 'False',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>

            void f1(){
                int a=0;
                ++a;
                printf("%d ",a);
                }

            main(){
                int a=10;
                f1();
                f1();
                f1();
                printf("%d",a);
                return 0;
            }
            `,
            wrong: ['0 1 1 10', '10 0 1 10', '1 2 3 4', '1 2 3 10'],
            good: '1 1 1 10',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main() {
                auto a;
                register r;
                static s;
                extern e;
                printf("%d",sizeof a);
                printf("%d",sizeof r);
                printf("%d",sizeof s);
                printf("%d",sizeof e);
                return 0;
            }
            `,
            wrong: ['4 2 4 4', '2 4 4 2', '2 2 2 2'],
            good: '4 4 4 4',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>

            void main(){
                float a;
                a=3.7;
                if(a==3.7)
                printf("Egyenlo");
                else
                printf("Nem egyenlo");
            }
            `,
            wrong: ['egyenlo'],
            good: 'nem egyenlo',
        },
        {
            'question': 'Mi a program kimenete?',
            code: `
            #include <stdio.h>

            void main(){
                float a;
                a=3.7;
                if(a==3.7f)
                printf("Egyenlo");
                else
                printf("Nem egyenlo");
            }
            `,
            wrong: ['nem egyenlo'],
            good: 'egyenlo',
        },
    ];


