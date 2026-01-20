/*

    Sometimes some words like "localization" or "internationalization" are so long that writing them many times in one text is quite tiresome.

    Let's consider a word too long, if its length is strictly more than 10 characters. All too long words should be replaced with a special abbreviation.

    This abbreviation is made like this: we write down the first and the last letter of a word and between them we write the number of letters between the first and the last letters.
    That number is in decimal system and doesn't contain any leading zeroes.

    Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".

    You are suggested to automatize the process of changing the words with abbreviations.
    At that all too long words should be replaced by the abbreviation and the words that are not too long should not undergo any changes.

    Input
    The first line contains an integer n (1 ≤ n ≤ 100). Each of the following n lines contains one word.
    All the words consist of lowercase Latin letters and possess the lengths of from 1 to 100 characters.

    Output
    Print n lines. The i-th line should contain the result of replacing of the i-th word from the input data.

    Input
    4
    word
    localization
    internationalization
    pneumonoultramicroscopicsilicovolcanoconiosis

    Output
    word
    l10n
    i18n
    p43s

*/

/*
// How to understand the problem. Solve it again tomorrow
    It’s not about processing just one string.

    It’s about processing n words, where:

    The first line of input gives you an integer n → how many words you’ll be given.

    The next n lines each contain a word.

    Your program must read all those words, and for each one:

    If the word length ≤ 10 → print the word as is.

    If the word length > 10 → abbreviate it:

    Keep the first character

    Keep the last character

    In between, print the count of letters between them.

*/

import java.util.Scanner;

public class A2_Way_Too_Long_Words{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String word = scanner.nextLine();

        // System.out.println("Word Length: " + word.length());

        if(word.length() < 10){
            System.out.println(word);
        }else{
            char firstChar, lastChar;
            int middleLenght;
            // Using split("") (convert into an array of single-character strings)
            // String[] wordArray = word.split("");
            // for (String letter : wordArray) {
            //     System.out.println(letter);
            // }
            middleLenght = word.length() - 2;


            // In Java, you can get the specific character inside a String using the charAt(index) method.
            // Index is the index of the character you want
            firstChar = word.charAt(0);
            lastChar = word.charAt(word.length() - 1);
            // System.out.println(firstChar + middleLenght + lastChar);


            // In Java, a char is really just a 16-bit integer (Unicode code point).
            // When you do math or concatenation starting with a char and int, Java will promote them to numbers and add them together.
            // Placing the "" sorted it out
            System.out.println("Mine: " + firstChar + middleLenght + lastChar);

        }

        // scanner.close();



        // "Elegant" way GPT solved it
        // Scanner scanner = new Scanner(System.in);
        // But in your test run, you didn’t provide n first. You went straight to "HelloWorldTest".
        // That string was read by scanner.nextLine() and Java tried to turn it into an integer → crash.
        int n = Integer.parseInt(scanner.nextLine()); // number of words

        for (int i = 0; i < n; i++) {
            String wordGPT = scanner.nextLine();
            if (wordGPT.length() <= 10) {
                System.out.println(wordGPT);
            } else {
                System.out.printf("%c%d%c%n", 
                    wordGPT.charAt(0), 
                    wordGPT.length() - 2, 
                    wordGPT.charAt(wordGPT.length() - 1)
                );
            }
        }

        scanner.close();



    }
}