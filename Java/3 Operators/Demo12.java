// program showing the concept of bitwise operator

class Demo12{
    public static void main(String args[]){
        int a = 9, b = 10, c;
        
        c = a&b;
        System.out.println(a+" & "+b+" = "+c);

        c = a|b;
        System.out.println(a+" | "+b+" = "+c);

        c = a^b;
        System.out.println(a+" ^ "+b+" = "+c);

        c = 4<<2;
        System.out.println(4+" << "+2+" = "+c);

        c = 4>>2;
        System.out.println(4+" >> "+2+" = "+c);

        c = ~a;
        System.out.println("~"+a+" = "+c);
    }
}