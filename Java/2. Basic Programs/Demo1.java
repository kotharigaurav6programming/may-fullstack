// Program to print Hello World 

class Hello{
    public static void main(String args[]){
        System.out.println("Hello World");
    }
}
/*
----> class Hello
      Here class(keyword) is a userdefined blueprint for creating object.

      Here Hello is a class name.
      Here H is capitial in class name because it follows convention. 

----> {  Here it represents opening of class definition part   

----> public static void main(String args[])

    public(keyword) : Access modifier (public,private,protected, default(package private)).
    why public ? Because JVM can call it from anywhere.

    static(keyword) : Modifier (abstract, final, synchronized, strictfp etc).

    If we make any variable or any method as a static, then in that case we do not needs to create object of that class to access that variable or method, that variable or method is directly accessed by class name.

    If we make any method as a static then in that case it will be overloaded but can't be overridden. 

---> void : represents return type
     Here void means null (empty | which points to nothing | unset reference)

---> main : predefined word

---> (String args[]) : Represents Command line argument
     Whisch is responsible for taking arguments for main method at run time.

     String : class
     args : String array name
     [] : represents array

   (String args[])
   (String []args)
   (String[] args)
   (String...args) : Here three dots represents varargs
   (variable arguments)

---> { represents main method definition part

---> System.out.println("Hello World");

    System : class
    . : dot operator
    out : object (object of PrintStream class)
    println : method (method of PrintStream class)

    Internally,
        class System{
            static PrintStream out;
            -----
            -----
        }

        Here out is the object of PrintStream class, whereas static member of System class.

    Internally,
        class PrintStream{
            public void println(String s){
                .....
            }
            public void print(String s){
                .....
            }
            public void println(int s){
                .....
            }
            public void print(String s){
                .....
            }
            ....
            ....
        }

---> println() : here ln means new line
---> } represents closing of main method deinition part
---> } represents closing of class definition part.

Save : filename.java
compile : javac filename.java (Here javac is a compiler)
run : java classname
--------------------------------------------------------

class Hello{
    ....
    ....
}
filename : Hello.java | Demo.java
classname : Hello
Here filename and class name can be same or different

public class Hello{
    ....
    ....
}
filename : Hello.java
classname : Hello
Here filename and classname must be same




*/








