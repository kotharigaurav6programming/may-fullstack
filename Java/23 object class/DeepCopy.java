// program showing the concept of Deep Copy
class Address{
    String state,country;
    Address(String state,String country){
        this.state=state;
        this.country=country;
    }
    Address(Address p){
        this.state = p.state;
        this.country = p.country;
    }
    @Override
    public String toString(){
        return state+"\t"+country;
    }
}
class Person{
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
        address = new Address(pobj1.address);
    } 

    @Override
    public String toString(){
        return pid+"\t"+name+"\t"+address;
    }
}
class DeepCopy{
    public static void main(String args[]){
        Address address = new Address("Madhya Pradesh","India");
        Person pobj1 = new Person(1234,"Andrew Anderson",address);
        Person pobj2 = new Person(pobj1);

        pobj2.address.state = "Rajasthan";
        pobj2.address.country = "India";
        
        System.out.println("\n----pobj1-----\n"+pobj1);
        System.out.println("\n----pobj2-----\n"+pobj2);
 
    }
}