/*
 program showing the concept of conditional operator
 (condition ? exp1 : exp2)
*/

class Demo10{
    public static void main(String args[]){
        int a=2,b=5;
        String res = (a==b) ? "Both are equal" : (a>b ? a+" is greater" : b+" is greater");
        System.out.println(res);
    }
}