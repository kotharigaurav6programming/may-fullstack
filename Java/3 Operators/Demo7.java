// program showing the concept of compound interest

class Demo7{
    public static void main(String args[]){
        int p = 1000,t=2;
        double r = 2.50,amt,ci;

        amt = p*Math.pow(1+r/100,t);
        System.out.println("Amount : "+amt);

        ci = amt-p;
        System.out.println("Compound Interest : "+ci);

    }
}
        
