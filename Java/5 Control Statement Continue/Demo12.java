//program showing the concept of nested loop

class Demo12{
    public static void main(String args[]){
        for(int i=1;i<=3;i++){
            System.out.println("i : "+i);
            for(int j=1;j<=3;j++){
                if(i==2 && j==2)
                    break;
                System.out.println("\tj : "+j);
            }
        }
        System.out.println("End of program");
    }
}