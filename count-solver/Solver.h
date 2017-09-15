#ifndef SOLVER_H
#define SOLVER_H

#include "headers.h"
#include "operators/Operator.h"
#include "operators/binary/BinaryOperator.h"
#include "operators/unary/UnaryOperator.h"
#include "gmpmr.h"

#include <vector>
#include <algorithm>
#include <cmath>

class Solver {
    private:
        std::vector <unsigned> primes {};
        const std::vector <unsigned> base = {288, 210, 24, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1};

        const UnaryOperator *const unaryOperators[1] = {
                new AbsoluteValue(1)
        };
        const BinaryOperator *const binaryOperators[4] = {
                new Plus(1),
                new Minus(1),
                new Times(1),
                new Divide(1)
        };

        std::string invertPrime(unsigned i, int fours) const {
            return "P(" + heuristic4444((uint64_t) std::distance(primes.begin(), std::find(primes.begin(), primes.end(), i)) + 1, fours) + ")";
        }

        int largestPrimeDiv(int i) const {
            for (int j : primes) {
                while (i % j == 0) {
                    i /= j;
                    if (i == 1) {
                        return j;
                    }
                }
            }
            return i;
        }

        bool isValid(std::string heuristic)const {
            return heuristic.find('<') == std::string::npos && heuristic.find('>') == std::string::npos;
        }

        unsigned ipow(unsigned a, unsigned b)const {
            unsigned res = 1;
            while (b) {
                if (b & 1) {
                    res *= a;
                }
                b >>= 1;
                a *= a;
            }
            return res;
        }

    public:
        Solver() : primes() {
            primes.push_back(2);
            bool prime;
            for (unsigned i = 3; i < 100000; i += 2) {
                prime = true;
                for (unsigned j = 0; primes[j] <= sqrt(i); j++) {
                    if (i % primes[j] == 0) {
                        prime = false;
                        break;
                    }
                }
                if (prime) {
                    primes.push_back(i);
                }
            }
        }

        Solver(const Solver &other) : primes(std::vector <unsigned>(other.primes)) {}

        Solver &operator=(const Solver &other) {
            primes = other.primes;
            return *this;
        }

        std::string heuristic4444(uint64_t i, int fours = 4) const {
            std::string heur, heur2, heur3;
            unsigned div;
            if (i == 2) {
                return fours == 1 ? "Ω(4)" :
                       fours == 2 ? "(4 / Ω(4))" :
                       fours == 3 ? "((4 + 4) / 4)" :
                       fours == 4 ? "4 / 4 + 4 / 4" :
                       "<00-2@" + std::to_string(fours) + ">";
            }
            switch (fours) {
                case 0:
                    return "<1-" + std::to_string(i) + ">";
                case 1:
                    switch (i) {
                        case 0:
                            return "<2>";
                        case 1:
                            return "ω(4)";
                        case 3:
                            return "d(4)";
                        case 4:
                            return "4";
                        case 5:
                            return "p(4)";
                        case 6:
                            return "Γ(4)";
                        case 7:
                            return "σ(4)";
                        case 8:
                            return "(4!!)";
                        case 9:
                            return "s(p(4)!!)";
                        case 10:
                            return "s(C(4))";
                        case 11:
                            return "P(p(4))";
                        case 12:
                            return "sf(d(4))";
                        case 13:
                            return "F(σ(4))";
                        case 14:
                            return "C(4)";
                        case 15:
                            return "p(4)!!";
                        case 16:
                            return "d(p(4)!)";
                        case 17:
                            return "P(Ω(4))";
                        case 18:
                            return "Ω(P(Ω(4)))";
                        case 19:
                            return "P(4!!)";
                        case 20:
                            return "Ω(P(4!!))";
                        case 24:
                            return "(4!)";
                        case 210:
                            return "p4#";
                        case 288:
                            return "sf(4)";
                        default:
                            if (is_prime_mr(i)) {
                                return invertPrime(i, 1);
                            }
                            return "<3-" + std::to_string(i) + ">";
                    }
                case 2:
                    if (i == 0) {
                        return "(4 - 4)";
                    }
                    if (i == 1) {
                        return "(4 / 4)";
                    }
                    if (i == 8) {
                        return "(4 + 4)";
                    }
                    if (i == 16) {
                        return "(4 × 4)";
                    }
                    if (i == 256) {
                        return "4^4";
                    }
                    for (unsigned j = 3; j * j * j * j < MAX; j++) {
                        if (i == j * j * j * j) {
                            return "(" + heuristic4444(j, 1) + ") ^ 4";
                        }
                    }
                case 3:
                case 4:
                    if (is_prime_mr(i)) {
                        return invertPrime(i, fours);
                    }
                    if (fours != 2) {
                        heur = heuristic4444(i, 2);
                        if (isValid(heur)) {
                            return fours == 4 ?
                                   heur + " + 4 - 4" :
                                   heur + " × ω(4)";
                        }
                    }
                    if (fours == 4) {
                        heur = heuristic4444(i, 3);
                        if (isValid(heur)) {
                            return heur + " × ω(4)";
                        }
                    }
                    break;
                default:
                    return "<02-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
            }
            div = (unsigned int) largestPrimeDiv((int) i);
            unsigned val, valMax;
            switch(fours) {
                case 2:
                    heur = heuristic4444(div, 1);
                    heur2 = heuristic4444(i/div, 1);
                    if (isValid(heur) && isValid(heur2)) {
                        return heur + " × " + heur2;
                    }
                    break;
                case 3:
                    for (unsigned k = (unsigned)(floor(log(MAX) / log(2))); k >= 3; k--) { // Testing n**k
                        for (valMax = 2; ipow(valMax, k) <= MAX; valMax++);
                        for (unsigned j = valMax; j >= 2; j--) {
                            val = ipow(j, k);
                            if (i == val) {
                                for (int l = 1; l <= 2; l++) {
                                    heur = heuristic4444(j, l);
                                    heur2 = heuristic4444(k, 3 - l);
                                    if (isValid(heur) && isValid(heur2)) {
                                        return heur + " ^ " + heur2;
                                    }
                                }
                            }
                            if (i % val == 0) {
                                heur = heuristic4444(i / val, 1);
                                heur2 = heuristic4444(j, 1);
                                heur3 = heuristic4444(k, 1);
                                if (isValid(heur) && isValid(heur2) && isValid(heur3)) {
                                    return heur + " × " + heur2 + " ^ " + heur3;
                                }
                            }
                        }
                    }
                    for (int l = 1; l <= 2; l++) {
                        heur = heuristic4444(div, l);
                        heur2 = heuristic4444(i / div, 3 - l);
                        if (isValid(heur) && isValid(heur2)) {
                            return heur + " × " + heur2;
                        }
                    }
                    break;
                case 4:
                    for (unsigned k = (unsigned)(floor(log(MAX) / log(2))); k >= 3; k--) { // Testing n**k
                        for (valMax = 2; ipow(valMax, k) <= MAX; valMax++);
                        for (unsigned j = valMax; j >= 2; j--) {
                            val = ipow(j, k);
                            if (i == val) {
                                for (int l = 1; l <= 3; l++) {
                                    heur = heuristic4444(j, l);
                                    heur2 = heuristic4444(k, 4 - l);
                                    if (isValid(heur) && isValid(heur2)) {
                                        return heur + " ^ " + heur2;
                                    }
                                }
                            }
                            if (i % val == 0) {
                                for (int l = 1; l <= 3; l++) {
                                    heur = heuristic4444(i / val, 1 + (l == 1 ? 1 : 0));
                                    heur2 = heuristic4444(j, 1 + (l == 2 ? 1 : 0));
                                    heur3 = heuristic4444(k, 1 + (l == 3 ? 1 : 0));
                                    if (isValid(heur) && isValid(heur2) && isValid(heur3)) {
                                        return heur + " × " + heur2 + " ^ " + heur3;
                                    }
                                }
                            }
                        }
                    }
                    for (int l = 1; l <= 3; l++) {
                        heur = heuristic4444(div, l);
                        heur2 = heuristic4444(i / div, 4 - l);
                        if (isValid(heur) && isValid(heur2)) {
                            return heur + " × " + heur2;
                        }
                    }
                    break;
                default:
                    return "<03-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
            }
            if (i % 24 == 0) {
                heur = heuristic4444(i / 24, fours - 1);
                if (isValid(heur)) {
                    return "4! × " + heur;
                }
            }
            if (i % 8 == 0) {
                heur = heuristic4444(i / 8, fours - 1);
                if (isValid(heur)) {
                    return "4!! × " + heur;
                }
            }
            if (i % 4 == 0) {
                heur = heuristic4444(i / 4, fours - 1);
                if (isValid(heur)) {
                    return "4 × " + heur;
                }
            }
            if (fours >= 2 && i % 6 == 0) {
                heur = heuristic4444(i / 6, fours - 1);
                if (isValid(heur)) {
                    return "Γ(4) × " + heur;
                }
            }
            if (fours >= 2 && i % 2 == 0) {
                heur = heuristic4444(i / 2, fours - 1);
                if (isValid(heur)) {
                    return "Ω(4) × " + heur;
                }
            }
            for (unsigned j = (unsigned) sqrt(i); j >= 2; j--) {
                val = j * j;
                if (i == val && fours >= 2) {
                    heur = heuristic4444(j, fours - 1);
                    if (isValid(heur)) {
                        return heur + " ^ Ω(4)";
                    }
                }
                if (i % val == 0) {
                    for (int l = 1; l < fours - 1; l++) {
                        heur = heuristic4444(i / val, l);
                        heur2 = heuristic4444(j, fours - 1 - l);
                        if (isValid(heur) && isValid(heur2)) {
                            return "(" + heur + " × " + heur2 + ") ^ Ω(4)";
                        }
                    }
                    for (int l = 1; l < fours - 1; l++) {
                        heur = heuristic4444(i / val * j, fours - 1);
                        if (isValid(heur)) {
                            return heur + " ^ Ω(4)";
                        }
                    }
                }
            }
            for (unsigned j : base) {
                if (i % j == 0) {
                    heur = heuristic4444(i / j, fours - 1);
                    heur2 = heuristic4444(j, 1);
                    if (isValid(heur)) {
                        return heur + " × " + heur2;
                    }
                }
            }
            return "<4-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
        }
};


#endif // SOLVER_H
