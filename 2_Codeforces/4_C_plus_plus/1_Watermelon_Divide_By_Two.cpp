#include <iostream>
using namespace std;

/*

    One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos.
    They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem.

    Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal.
    The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.

    Input
    The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.

    Output
    Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.


    Example:
    Input = 8
    Output = YES

    Input = 5
    Output = NO

*/

// Create a watermelon class
class Watermelon {
    public:
        int melonWeight;
        // Public Method acessible outside class to check if the watermelon can be split into two even parts
        void canDivide() {
            if (melonWeight % 2 == 0 && melonWeight > 2) {
                cout << "YES from public int variable in class" << endl;
            } else {
                cout << "NO from public int variable in class" << endl;
            }
        }

        // Function with arg called directly with an object
        void canDivideArg(int melonWeightArg) {
            if (melonWeightArg % 2 == 0 && melonWeightArg > 2) {
                cout << "YES from method arg variable only" << endl;
            } else {
                cout << "NO from method arg variable only" << endl;
            }
        }
    };



int main()
{
    // Straight forward in main class
    int melonW;
    cin >> melonW;
    if (melonW % 2 == 0 && melonW > 2)
    {
        cout << "YES from inside int main(){} function" << endl;
    }
    else
    {
        cout << "NO from inside int main(){} function" << endl;
    }


    // With OOP we create an object
    int melonWeight;
    cin >> melonWeight;

    // Create an object of the class WatermelonPublicInt
    // This uses a public in which works with the method/function in the class
    Watermelon wmObject;
    wmObject.melonWeight = melonWeight;
    wmObject.canDivide(); // Call the method using the object

    // This method takes in an arg instead of using the int
    wmObject.canDivideArg(melonWeight);

    return 0;
}