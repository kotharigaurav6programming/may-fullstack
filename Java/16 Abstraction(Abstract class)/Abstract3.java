// program showing the concept of abstract class

abstract class RBI{
    abstract double rate();
}
class SBI extends RBI{
    double rate(){
        return 1.25;
    }
}
class BOI extends RBI{
    double rate(){
        return 2.25;
    }
}

class Abstract3{
    public static void main(String args[]){
        RBI instance;
        instance = new SBI();
        System.out.println("Rate of interest provided by SBI : "+instance.rate());
       
        instance = new BOI();
        System.out.println("Rate of interest provided by BOI : "+instance.rate());
    }
}