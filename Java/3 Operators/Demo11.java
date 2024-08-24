/*
 program showing the concept of logical operator
*/

class Demo11{
    public static void main(String args[]){
        int a=200,b=50;
        String res = (a>100 && b<50) ? "Statement 1" : "Statement 2";
        System.out.println(res);

        String res1 = (a>100 || b<50) ? "Statement 1" : "Statement 2";
        System.out.println(res1);

        System.out.println("!true : "+!true);
        System.out.println("!false : "+!false);
    }
}