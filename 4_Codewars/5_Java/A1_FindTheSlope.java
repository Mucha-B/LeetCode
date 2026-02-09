/*

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined .
Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the slope are all integers (no floating numbers!).

*/



/*

=== Sample Tests ===

        import static org.junit.Assert.*;
        import org.junit.Test;

        public class SlopeTest
        {
            @Test
            public void test1() 
        {
        int[] test1={19,3,20,3};
        Slope s=new Slope();
            assertEquals("0",s.slope(test1));
        
        assertEquals("undefined",s.slope(new int[]{-7,2,-7,4}));
        assertEquals("5",s.slope(new int[]{10,50,30,150}));
        assertEquals("-5",s.slope(new int[]{15,45,12,60}));
        assertEquals("6",s.slope(new int[]{10,20,20,80}));
        assertEquals("undefined",s.slope(new int[]{-10,6,-10,3}));
            }
        
        }

*/


public class A1_FindTheSlope {

    /*
        Slope formula:
        slope = (y2 − y1) / (x2 − x1)

        If x2 − x1 = 0, the slope is undefined
        Otherwise, return the slope as a string according to instructions

        No floating numbers => integer division only
     */
    public static void main(String args[]){

        // a : x1 : 1
        // b : y1 : 2
        // c : x2 : 3
        // d : y2 : 6
        int[] myPoints = {3, 2, 2, 6};
        Slope s = new Slope();
        System.out.println(s.slope(myPoints));

    }


    public static class Slope {
        public String slope(int[] points) {
                int x1 = points[0];
                int y1 = points[1];
                int x2 = points[2];
                int y2 = points[3];

                // Undefined slope when x difference is zero
                if (x2 - x1 == 0) {
                    // Return ends the function here
                    // No need for else
                    return "undefined";
                }

                // If the if statement doesn't execute, we have a slope
                // Store in int for no decimal(float)
                int result = (y2 - y1) / (x2 - x1);

                // Convert int to string (stringify) and return the value
                return String.valueOf(result);
        }
    }

}


