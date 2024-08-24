// program showing the concept of Single Inheritance

class Area{
    int l,b;
    Area(int l,int b){
        this.l=l;
        this.b=b;
    }
    int getArea(){
        return l*b;
    }
}
class Volume extends Area{
    int h;
    Volume(int l,int b,int h){
        super(l,b);
        this.h=h;
    }
    int getVolume(){
        return getArea()*h;
    }
}
class Demo3{
    public static void main(String args[]){
     Volume obj = new Volume(2,3,4);   
        System.out.println("Area : "+obj.getArea());
        System.out.println("Volume : "+obj.getVolume());
    }
}