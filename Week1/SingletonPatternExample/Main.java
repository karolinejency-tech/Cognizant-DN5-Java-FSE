package Week1.SingletonPatternExample.src;
public class Main {

    public static void main(String[] args) {

        Logger obj1 = Logger.getInstance();
        Logger obj2 = Logger.getInstance();

        obj1.log("Application Started");

        System.out.println("Same Object? " + (obj1 == obj2));
    }
}