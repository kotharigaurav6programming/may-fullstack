// program showing the concept of increment decrement operator

class Demo5{
    public static void main(String args[]){
        int a=1,b=2,c=3,d=4;
        //        int exp = a++ + ++b + c-- - --d;
        //int exp = ++a + b-- + ++c - --d;
        // int exp = a++ + a++ - --b - --b + b-- + ++c - --d;
        // int exp = 2 * (a-- + --a + c-- * d--);
         int exp = ++a + --b + --c - --d - --d + a--;
        
        System.out.println("value of exp : "+exp);
    }
}
        
