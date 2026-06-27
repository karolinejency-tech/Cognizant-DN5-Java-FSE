package Week1.EcommerceSearchFunction;

public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", 50000),
                new Product(102, "Mobile", 25000),
                new Product(103, "Headphones", 3000),
                new Product(104, "SmartWatch", 8000)
        };

        String searchItem = "Mobile";

        Product result = SearchEngine.linearSearch(products, searchItem);

        if (result != null) {
            System.out.println("Product Found");
            System.out.println("ID: " + result.productId);
            System.out.println("Name: " + result.productName);
            System.out.println("Price: " + result.price);
        } else {
            System.out.println("Product Not Found");
        }
    }
}