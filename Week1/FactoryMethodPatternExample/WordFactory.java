package Week1.FactoryMethodPattern;
public class WordFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}