// program showing the concept of Relational operator

class Demo2{
    public static void main(String args[]){
        int a = 5, b = 2;
        boolean c;
        
        c = a<b;
        System.out.println(a+" < "+b+" = "+c);

        c = a>b;
        System.out.println(a+" > "+b+" = "+c);

        c = a<=b;
        System.out.println(a+" <= "+b+" = "+c);

        c = a>=b;
        System.out.println(a+" >= "+b+" = "+c);

        c = a==b;
        System.out.println(a+" == "+b+" = "+c);

        c = a!=b;
        System.out.println(a+" != "+b+" = "+c);
    }
}