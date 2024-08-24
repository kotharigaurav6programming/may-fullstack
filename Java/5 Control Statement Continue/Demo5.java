// program showing the concept of for loop

class Demo5{
    public static void main(String args[]){
        /*
        System.out.println("Statement 1");
        System.out.println("Statement 2");
        System.out.println("Statement 3");
        System.out.println("Statement 4");
        System.out.println("Statement 5");
        System.out.println("Statement 6");
        System.out.println("Statement 7");
        System.out.println("Statement 8");
        System.out.println("Statement 9");
        System.out.println("Statement 10");
        */

       /*
       for(int i=1;i<=1000;i++){
        System.out.println("statement "+i);
       }
       */

      /*
      int i=1;
       for(;;){
        System.out.print("\tstatement "+i);
       }
       */

       /*
       int i;
       for(i=1;i<=10;i++);
       System.out.print("\tstatement "+i);
       */
      
      /*
      for(int i=1,j=1 ; i<=10 ; i++,j=j+5)
       System.out.println("i : "+i+" j : "+j);
       */

      /*
       for(int i=1;i<=10;i++){
           if(i!=5)
            System.out.println("i : "+i);
       }
        */
      for(int i=1;i<=10;i++){
           if(i!=3 && i!=6)
            System.out.println("i : "+i);
       }

    }
}