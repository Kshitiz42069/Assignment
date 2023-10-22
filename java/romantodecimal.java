import java.util.*;

public class romantodecimal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int len = str.length();
        str = str + " ";
        int res = 0;
        for(int i=0;i<len;i++){
            char ch = str.charAt(i);
            char nch = str.charAt(i+1);

            if(ch=='M'||ch=='m'){
                res+=1000;
            }
            else if(ch=='C'||ch=='c'){
                if(nch=='M'||nch=='m'){
                    res+=900;
                    i++;
                }
                else if(nch=='D'||nch=='d'){
                    res+=400;
                    i++;
                }
                else{
                    res+=100;
                }
            }
            else if (ch == 'D'||ch=='d') 
                {
                    res += 500;
                } 
            else if (ch == 'X'||ch=='x') {
                    if (nch == 'C'||nch=='c') 
                    {
                        res += 90;
                        i++;
                    } 
                    else if (nch == 'L'||nch =='l') 
                    {
                        res += 40;
                        i++;
                    } 
                    else {
                        res += 10;
                    }
                } 
            else if (ch == 'L'||ch=='l') {
                    res += 50;
                }
            else if (ch == 'I'||ch=='i') 
                {
                    if (nch == 'X'|| nch=='x') {
                        res += 9;
                        i++;
                    }
                     else if (nch == 'V'||nch=='v') {
                        res += 4;
                        i++;
                    }
                    else {
                        res++;
                    }
                }
            else{ // if (ch == 'V')
                    res += 5;
                }
            }
        System.out.println("\nRoman Number:"+str);
        System.out.println("Equivalent Integer:"+res+"\n");
        sc.close();
    }
}
