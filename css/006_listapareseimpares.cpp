#include <stdio.h>

int main()
{

  int cont,n,num,somapar,somaimpar;
  somapar=0;
  somaimpar=0;

    printf ("Digite a quantidade de números da lista: ");
    scanf("%d",&n);

      for (cont=1;cont<=n;cont++)
        {
          printf ("Digite um número: ");
          scanf("%d",&num);

          if (num%2==0)
          somapar=somapar+num;
            else
              somaimpar=somaimpar+num;
        }
    printf ("A soma dos números pares = %d\n",somapar);
    printf ("A soma dos números ímpares = %d\n",somaimpar);
    return 0;
}
