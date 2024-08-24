// program showing the concept of switch control statement

class Switch4{
    public static void main(String args[]){
        int num=10,i=1;    
        switch(i++){          // i=1
            case 3 : num++;   
                    break;
            case -2 : num++;
            case 0 : --num;
            case 1 : --num; // 9
            case -3 : --num; // 8
            case 4 : num++; // 8
            default : System.out.println("num : "+(--num)); // num : 8
                        break;
        }
    }
}
