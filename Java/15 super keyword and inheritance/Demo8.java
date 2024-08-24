// program showing the concept of Method Overriding

class RBI{
    double rate(){
        return 1.0;
    }
}
class BOI extends RBI{
    double rate(){
        return 1.25;
    }
}
class SBI extends RBI{
    double rate(){
        return 2.21;
    }
}
class PNB extends RBI{}

class Demo8{
    public static void main(String args[]){
        BOI bobj = new BOI();
        System.out.println("Rate provided by BOI : "+bobj.rate());
        SBI sobj = new SBI();
        System.out.println("Rate provided by SBI : "+sobj.rate());
        PNB pobj = new PNB();
        System.out.println("Rate provided by PNB : "+pobj.rate());
    }
}