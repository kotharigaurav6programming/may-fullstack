// program showing the concept of Deepclone
class Address implements Cloneable{
    String state,country;
    Address(String state,String country){
        this.state=state;
        this.country=country;
    }
    @Override 
    public Object clone() throws CloneNotSupportedException{
        return super.clone();
    } 
    @Override
    public String toString(){
        return state+"\t"+country;
    }
}
class Person implements Cloneable{
    int pid;
    String name;
    Address address;
    Person(int pid,String name,Address address){
        this.pid=pid;
        this.name=name;
        this.address=address;
    }   
    Person(Person pobj1){
        pid = pobj1.pid;
        name = pobj1.name;
        address = pobj1.address;
    } 
    @Override 
    public Object clone() throws CloneNotSupportedException{
        Person clonedObject = (Person)super.clone();
        clonedObject.address = (Address)address.clone();
        return clonedObject;
    }
    @Override
    public String toString(){
        return pid+"\t"+name+"\t"+address;
    }
}
class DeepClone{
    public static void main(String args[]){
        try{
        Address address = new Address("Madhya Pradesh","India");
        Person pobj1 = new Person(1234,"Andrew Anderson",address);
        Person pobj2 = (Person)pobj1.clone();

        pobj2.address.state = "Rajasthan";
        pobj2.address.country = "India";
        
        System.out.println("\n----pobj1-----\n"+pobj1);
        System.out.println("\n----pobj2-----\n"+pobj2);

        }catch(CloneNotSupportedException e)
        {
            System.out.println("Exception : "+e);
        }
    }
}