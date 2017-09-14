#define MAX 10000

#include <iostream>
#include "Solver.h"

int main() {
    Solver solver;
    std::string res;
    unsigned i;
    std::cout << "4-4-4-4 heuristical solver (tested up to 10,000)" << std::endl;
    std::cout << "Message /u/pie3636 if you find any incorrect values" << std::endl;
    std::cout << std::endl;
    std::cout << "Notation:" << std::endl;
    std::cout << "O() = capital omega (ohm symbol)" << std::endl;
    std::cout << "w() = small omega (w-like letter)" << std::endl;
    std::cout << "o() = small sigma (o'-like letter)" << std::endl;
    std::cout << "G() = capital gamma (upside-down L)" << std::endl;
    std::cout << std::endl;
    std::cout << "Note: Some pairs of parentheses in the answer may be unnecessary." << std::endl;
    std::cout << "In addition, this solution is most likely not optimal." << std::endl;
    std::cout << std::endl;
    std::cout << "Number to solve ? ";
    std::cin >> i;
    std::cout << std::endl;
    res = solver.heuristic4444(i);
    if (res.find("<") == std::string::npos) {
        std::cout << solver.heuristic4444(i) << " = " << i << std::endl;
    } else {
        std::cout << i << "The solver was unable to solve this value." << std::endl;
    }
    system("pause");
    /*
        DIGIT: 0,
        PARENTHESIS: 0,
        POWER: 1,
        MODULO: 1,
        CONCAT: 1,
        KNUTH_ARROW: 2,
        FACTORIAL: 2,
        DOUBLE_FACTORIAL: 2,
        SUPERFACTORIAL: 2,
        HYPERGEOM: 2,
        GAMMA: 2,
        SQUARE_ROOT: 2,
        PARTITION: 2,
        MOBIUS: 2,
        FIBONACCI: 2,
        TRIBONACCI: 2,
        SIGMA: 2,
        DIVISOR_SUM: 2,
        DIVISOR_COUNT: 2,
        CATALAN: 2,
        SMALL_OMEGA: 2,
        BIG_OMEGA: 2,
        PRIME_COUNT: 2,
        PRIME_NUMBER: 2,
        EULER_TOTIENT: 2,
        MULTISIGMADIGIT: 3,
        ACKERMANN: 3,
        PRIMORIAL: 3,
        SIGN: 4,
        EXPONENTIAL: 4,
        LOGARITHM: 4,
        DECIMAL_SEPARATOR: 4,
        REPEATING_DECIMAL: 4,
        PERCENT: 4,
        SINE: 5,
        COSINE: 5,
        TANGENT: 5,
        SECANT: 5,
        COSECANT: 5,
        COTANGENT: 5,
        ARC_SINE: 5,
        ARC_COSINE: 5,
        ARC_TANGENT: 5,
        ARC_SECANT: 5,
        ARC_COSECANT: 5,
        ARC_COTANGENT: 5,
        FLOOR: 6,
        CEIL: 6,
        BACKWARDS: 6,
        BINARYBEANSTALK: 7,
        NONPRIME: 7,
        TOTIENT_SUM: 7
    */
}