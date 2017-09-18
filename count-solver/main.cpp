#define MAX 10000

#define COST_DIGIT 0
#define COST_PLUS 1
#define COST_MINUS 1
#define COST_TIMES 1
#define COST_DIVIDE 1
#define COST_ABS 1
//
#define COST_DOUBLE_FACTORIAL 2
#define COST_FACTORIAL 2
#define COST_SUPERFACTORIAL 2
#define COST_LPAREN 0
#define COST_RPAREN 0
#define COST_POWER 1
#define COST_GAMMA 2
#define COST_PARTITION 3
#define COST_SIGMA 2
#define COST_DIVISOR_COUNT 2
#define COST_CATALAN 2
#define COST_SMALL_OMEGA 2
#define COST_BIG_OMEGA 2
#define COST_PRIME_NUMBER 2
#define COST_FIBONACCI 2
#define COST_DIVISOR_SUM 2
#define COST_PRIMORIAL 3

/*
    MODULO: 1,
    CONCAT: 1,
    KNUTH_ARROW: 2,
    HYPERGEOM: 2,
    SQUARE_ROOT: 2,
    TRIBONACCI: 2,
    PRIME_COUNT: 2,
    MOBIUS: 2,
    EULER_TOTIENT: 2,
    MULTISIGMADIGIT: 3,
    ACKERMANN: 3,
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

/*
 * RELEASE
 * DEBUG1 (test min)
 * DEBUG2 (test all)
 */
#define DEBUG1

#include <iostream>
#include "Solver.h"

int main() {
    system("chcp 65001");
    Solver solver;
    std::string res;

#ifdef RELEASE
    std::cout << "4-4-4-4 heuristical solver v. 0.1795.1740 (tested up to 10,000)" << std::endl;
    std::cout << "Message /u/pie3636 if you find any incorrect values" << std::endl;
    std::cout << std::endl;
    std::cout << "Note: Some pairs of parentheses in the answer may be unnecessary." << std::endl;
    std::cout << "In addition, this solution is most likely not optimal." << std::endl;
    std::cout << std::endl;
    std::cout << "Number to solve ? ";
    unsigned i;
    std::cin >> i;
    std::cout << std::endl;
    res = solver.heuristic4444(i);
    if (res.find('<') != std::string::npos && std::count(res.begin(), res.end(), '4' == 4)) {
        std::cout << "The solver was unable to solve this value." << std::endl;
        return EXIT_FAILURE;
    }
    std::cout << solver.heuristic4444(i) << " = " << i << std::endl;
    uint64_t cost = solver.evaluateCost(res);
    std::cout << "Cost: " << cost << std::endl;
#endif
#ifdef DEBUG1
    uint64_t minCost = 1000, maxCost = 0, sumCost = 0, indexMin, indexMax;
    for (uint64_t i = 1; i < MAX; i++) {
        res = solver.heuristic4444(i);
        if (res.find('<') != std::string::npos || std::count(res.begin(), res.end(), '4' != 4)) {
            std::cout << solver.heuristic4444(i) << ": " << i << std::endl;
        }
        uint64_t cost = solver.evaluateCost(res);
        if (cost < minCost) {
            minCost = cost;
            indexMin = i;
        }
        if (cost > maxCost) {
            maxCost = cost;
            indexMax = i;
        }
        sumCost += cost;
    }
    std::cout << std::endl;
    std::cout << "Min of " << minCost << " at " << indexMin << std::endl;
    std::cout << "Min of " << maxCost << " at " << indexMax << std::endl;
    std::cout << "Avg of " << (double)sumCost/MAX << std::endl;
    std::cout << solver.heuristic4444(indexMax) << std::endl;
#endif
#ifdef DEBUG2
    unsigned i = 4761;
    res = solver.heuristic4444(i);
    if (res.find('<') != std::string::npos && std::count(res.begin(), res.end(), '4' == 4)) {
        std::cout << "The solver was unable to solve this value." << std::endl;
        return EXIT_FAILURE;
    }
    std::cout << solver.heuristic4444(i, 4, true) << " = " << i << std::endl;
    uint64_t cost = solver.evaluateCost(res);
    std::cout << "Cost: " << cost << std::endl;
#endif
    system("pause");
}