Singleton class : 
-----------------
Singleton class is a class which can have only one object at time, and after that if we try to create new(another) object then the new reference variable also points out the previously created object.

For making any class as a singleton class, you needs to follow these two steps : 
1. Make constructor private
2. Create a static method whose return type object is of that singleton class.

Singleton class can be initialize as : 
a. Early(Eager) Initialization
b. Lazy Initialization
