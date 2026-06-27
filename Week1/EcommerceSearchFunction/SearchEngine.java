package Week1.EcommerceSearchFunction;

public class SearchEngine {

    // Linear Search
    public static Product linearSearch(Product[] products, String target) {

        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(target)) {
                return product;
            }
        }

        return null;
    }
}