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
            question: 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
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
            question: 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
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
            question: 'Mi kerülhet a kérdőjel helyére, hogy helyes legyen a kód?',
            code: `
            int a = 1;
            int *b;
            b = ?a;
            `,
            wrong: ['*', '#', '(int *)', '(float *)'],
            good: '&',
        },
        {
            question: 'Mit ír ki az alábbi C program?',
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
            question: 'Mit ír ki az alábbi C program?',
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
            question: 'Mi kerül a ???-ek helyére a helyes futtatáshoz?',
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
            question: 'Mi kerül a ???-ek helyére a helyes futtatáshoz?',
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
            question: 'Mi kerül a ???-ek helyére a helyes struktúra definiáláshoz?',
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
            question: 'Mi kerül a ??? helyére a helyes struktúra definiáláshoz?',
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
            question: 'Mi kerül a ??? helyére a helyes struktúra definiáláshoz?',
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
            question: 'Melyek a helyes C adattípusok?',
            code: `
            `,
            wrong: ['int, double, char, boolean', 'int, bool, string', 'int, float, double, char', 'int, float, string, char'],
            good: 'int, float, double, char',
        },
        {
            question: 'Mit írna az ___ -ok helyére hogy szintaktikailag helyes kódot kapjunk?',
            code: `
                ___ num;
                num __ 42;
            `,
            wrong: ['= int', 'float float', 'int int', '= int', '* &', 'int &='],
            good: 'int =',
        },
        {
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Hányszor fut le a ciklus?',
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
            question: 'Hányszor fut le a ciklus?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
            code: `
            #include <stdio.h>
            main() {
                auto double a;
                register r;
                static char s;
                extern e;
                printf("%d",sizeof a);
                printf("%d",sizeof r);
                printf("%d",sizeof s);
                printf("%d",sizeof e);
                return 0;
            }
            `,
            wrong: ['4 2 4 4', '8 4 1 2', '8 1 1 4'],
            good: '8 4 1 4',
        },
        {
            question: 'Mi a program kimenete?',
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
            question: 'Mi a program kimenete?',
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
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                char str[20] = "Hello";
                char *const p=str;
                *p='M';
                *(p+6) = 'A';
                printf("%s", str);
                return 0;
            }
            `,
            wrong: ['HMello A', 'HMello', 'Hello A', 'HMello A', 'Mello A'],
            good: 'Mello',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                char *str;
                str = "%s";
                printf(str, "K");
                return 0;
            }
            `,
            wrong: ['%s', 'Hibás kód', 'Nem ír ki semmit'],
            good: 'K',
        },
        {
            question: 'Mi a program kimenete, ha a pointer 4 byteos?',
            code: `
            #include<stdio.h>

            int main()
            {
                printf("%d, %d", sizeof(NULL), sizeof(""));
                return 0;
            }
            `,
            wrong: ['4, 4', '0, 4', '1, 4', '4, 2'],
            good: '4, 1',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                char str[] = "peace";
                char *s = str;
                printf("%s", s++ +3);
                return 0;
            }
            `,
            wrong: ['eace', 'ace', 'peace', 'e'],
            good: 'ce',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                char str[] = "peace";
                char *s = str;
                printf("%s", s++ +3);
                return 0;
            }
            `,
            wrong: ['eace', 'ace', 'peace', 'e'],
            good: 'ce',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            void fun(int*, int*);
            int main()
            {
                int i=5, j=2;
                fun(&i, &j);
                printf("%d, %d", i, j);
                return 0;
            }
            void fun(int *i, int *j)
            {
                *i = *i**i;
                *j = *j**j;
            }
            `,
            wrong: ['5, 2', '10, 4', '2, 5'],
            good: '25, 4',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            int reverse(int);

            int main()
            {
                int no=5;
                reverse(no);
                return 0;
            }
            int reverse(int no)
            {
                if(no == 0)
                    return 0;
                else
                    printf("%d,", no);
                reverse (no--);
            }
            `,
            wrong: ['5,4,3,2,1,', '5,4,3,2,1,0,', '1,2,3,4,5,'],
            good: 'végtelen ciklus',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            int reverse(int);

            int main()
            {
                int no=5;
                reverse(no);
                return 0;
            }
            int reverse(int no)
            {
                if(no == 0)
                    return 0;
                else
                    printf("%d,", no);
                reverse (--no);
            }
            `,
            wrong: ['5,4,3,2,1,0,', 'végtelen ciklus', '1,2,3,4,5,', '5,4,3,2,1'],
            good: '5,4,3,2,1,',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            int reverse(int);

            int main()
            {
                int no=5;
                reverse(no);
                return 0;
            }
            int reverse(int no)
            {
                if(no == 0)
                    return 0;
                else
                    printf("%d,", no);
                reverse (--no);
            }
            `,
            wrong: ['5,4,3,2,1,', 'végtelen ciklus', '1,2,3,4,5,', '5,4,3,2,1'],
            good: '5,4,3,2,1,',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            int foo(int);
            int main()
            {
                printf("%d", foo(123));
                return 0;
            }
            int foo(int n)
            {
                int s, d;
                if(n!=0)
                {
                    d = n % 10;
                    n = n / 10;
                    s = d + foo(n);
                }
                else
                    return 0;
                return s;
            }
            `,
            wrong: ['3', '12', '5', '10'],
            good: '6',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int check (int, int);

            int main()
            {
                int c;
                c = check(10, 20);
                printf("%d", c);
                return 0;
            }

            int check(int i, int j)
            {
                int *p, *q;
                p=&i;
                q=&j;
                i>=45 ? return(*p): return(*q);
            }
            `,
            wrong: ['10', '20', '1020', '2010'],
            good: 'compiler error',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int fun(int, int);

            typedef int (*pf) (int, int);

            int proc(pf, int, int);

            int main()
            {
                printf("%d", proc(fun, 6, 6));
            }

            int fun(int a, int b)
            {
               return (a==b);
            }

            int proc(pf p, int a, int b)
            {
               return ((*p)(a, b));
            }
            `,
            wrong: ['0', '-1', '6', 'hibás'],
            good: '1',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            #include<stdlib.h>

            int main()
            {
                int *p;
                p = (int *)malloc(20); /* feltételezzük, hogy p memóriacíme 1314 */
                free(p);
                printf("%u", p);
                return 0;
            }
            `,
            wrong: ['0', '-1', 'memória szemét', 'véletlen cím'],
            good: '1314',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            #include<stdlib.h>

            int main()
            {
                int *p;
                p = (int *)malloc(20);
                printf("%d", sizeof(p));
                free(p);
                return 0;
            }
            `,
            wrong: ['20', '80', '2'],
            good: '4',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            #include<string.h>

            int main()
            {
                char *s;
                char *fun();
                s = fun();
                printf("%s", s);
                return 0;
            }

            char *fun()
            {
                char buffer[30];
                strcpy(buffer, "RAM");
                return (buffer);
            }
            `,
            wrong: ['RAM', '0xffff', '0x0000'],
            good: 'memória szemét',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>
            #include<string.h>

            int main()
            {
                char *s;
                char *fun();
                s = fun();
                printf("%s", s);
                return 0;
            }

            char *fun()
            {
                char buffer[30];
                strcpy(buffer, "RAM");
                return (buffer);
            }
            `,
            wrong: ['RAM', '0xffff', '0x0000'],
            good: 'memória szemét',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                enum days {MON=-1, TUE, WED=6, THU, FRI, SAT};
                printf("%d, %d, %d, %d, %d, %d", MON, TUE, WED, THU, FRI, SAT);
            }
            `,
            wrong: ['-1, 0, 1, 2, 3, 4', '-1, 2, 6, 3, 4, 5', '-1, 0, 6, 2, 3, 4'],
            good: '-1, 0, 6, 7, 8, 9',
        },
        {
            question: 'Mi a program kimenete?',
            code: `
            #include<stdio.h>

            int main()
            {
                enum days {MON=-1, TUE, WED=6, THU, FRI, SAT};
                printf("%d, %d, %d, %d, %d, %d", MON, TUE, WED, THU, FRI, SAT);
            }
            `,
            wrong: ['-1, 0, 1, 2, 3, 4', '-1, 2, 6, 3, 4, 5', '-1, 0, 6, 2, 3, 4'],
            good: '-1, 0, 6, 7, 8, 9',
        },
    ];


