// program showing the concept of Predicate
/*
    Predicate : 
    Its a concept of Java8
    Mainly used for testing small code base

    Methods of Predicate : 
        a. and()
        b. or()
        c. test()
        d. negate()
        e. isEqual()
*/

import java.util.function.Predicate;
class Demo7{
    public static void main(String args[]){
        Predicate<Integer> lessThan = i -> i<10;
        Predicate<Integer> greaterThan = i -> i>10;
        Predicate<String> str = Predicate.isEqual("Hello User");

        System.out.println("test : "+lessThan.test(5));
        System.out.println("test : "+lessThan.test(50));
        System.out.println("test : "+lessThan.negate().test(50));

        System.out.println("test : "+lessThan.and(greaterThan).test(5));
        System.out.println("test : "+lessThan.and(greaterThan).test(50));
        System.out.println("test : "+lessThan.and(greaterThan).test(10));

        System.out.println("test : "+lessThan.or(greaterThan).test(5));
        System.out.println("test : "+lessThan.or(greaterThan).test(50));
        System.out.println("test : "+lessThan.or(greaterThan).test(10));

        System.out.println("test : "+str.test("Hello Andrew"));
        System.out.println("test : "+str.test("Hello User"));
    }
}