// program showing the concept of Object class method(equals())

class Complex{
    @Override
    public int hashCode(){
        return 100;
    }
    @Override
    public boolean equals(Object o){
        System.out.println("c1(this) hashCode : "+this.hashCode());
        System.out.println("c2(0) hashCode : "+o.hashCode());
        
        if(this==o)
            return true;
        else
            return false;
    }
}
class ObjectDemo3{
    public static void main(String args[]){
        Complex c1 = new Complex();
        Complex c2 = new Complex();
        if(c1.equals(c2))
            System.out.println("Equals");
        else
            System.out.println("Not Equals");
    }
}