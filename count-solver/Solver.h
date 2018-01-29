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
#include <map>

class Solver {
    private:
        std::vector <unsigned> primes {};
        const std::vector <unsigned> base = {288, 210, 24, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1};

        std::string finalSols2[MAX + 1] = {""};
        std::string finalSols3[MAX + 1] = {""};
        std::string finalSols4[MAX + 1] = {""};

        const UnaryOperator *const unaryOperators[1] = {
                new AbsoluteValue(COST_ABS)
        };
        const BinaryOperator *const binaryOperators[4] = {
                new Plus(COST_PLUS),
                new Minus(COST_MINUS),
                new Times(COST_TIMES),
                new Divide(COST_DIVIDE)
        };

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

        unsigned ipow(unsigned a, unsigned b) const {
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

        std::string invertPrime(unsigned i, int fours) const {
            return "P(" + heuristic4444(baseInvertPrime(i), fours) + ")";
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

        std::string heuristic4444(uint64_t i, int fours = 4, bool trace = false, int depth = 0, int line = 0) const {
            if (trace) {
                std::cout << "[DEBUG] H4 <" << fours << '\t' << i << '\t' << depth << "> from " << line << std::endl;
            }
            if (fours == 4 && finalSols4[i] != "") {
                return finalSols4[i];
            }
            if (fours == 3 && finalSols3[i] != "") {
                return finalSols2[i];
            }
            if (fours == 2 && finalSols2[i] != "") {
                return finalSols2[i];
            }
            std::vector <std::pair <std::string, uint64_t>> solutions;
            std::string heur, heur2, heur3;
            unsigned div, divCoeff, r, copy;
            if (i == 1) {
                return fours == 1 ? "ω(4)" :
                       fours == 2 ? "4 / 4" :
                       fours == 3 ? "(4 + 4 - 4)" :
                       fours == 4 ? "4 / 4 + 4 - 4" :
                       "<00-1@" + std::to_string(fours) + ">";
            }
            if (i == 2) {
                return fours == 1 ? "Ω(4)" :
                       fours == 2 ? "4 / Ω(4)" :
                       fours == 3 ? "(4 + 4) / 4" :
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
                            return "π(4!)";
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
                                return invertPrime((unsigned) i, 1);
                            }
                            return "<3-" + std::to_string(i) + ">";
                    }
                case 2:
                    if (i == 0) {
                        return "(4 - 4)";
                    }
                    if (i == 8) {
                        return "(4 + 4)";
                    }
                    if (i == 16) {
                        return "4 × 4";
                    }
                    if (i == 256) {
                        return "4^4";
                    }
                    r = (unsigned) sqrt(sqrt(i));
                    if (i == r * r * r * r) {
                        heur = heuristic4444(r, 1, trace, depth + 1, __LINE__);
                        if (isValid(heur)) {
                            solutions.push_back({"(" + heur + ") ^ 4", 0});
                        }
                    }
                    r = (unsigned) sqrt(i);
                    if (i == r * r) {
                        heur = heuristic4444(r, 1, trace, depth + 1, __LINE__);
                        if (isValid(heur)) {
                            solutions.push_back({"(" + heur + ") ^ Ω(4)", 0});
                        }
                    }
                case 3:
                case 4:
                    if (is_prime_mr(i)) {
                        return invertPrime((unsigned) i, fours);
                    }
                    if (fours != 2) {
                        heur = heuristic4444(i, 2, trace, depth + 1, __LINE__);
                        if (isValid(heur)) {
                            solutions.push_back({fours == 4 ?
                                                 heur + " + 4 - 4" :
                                                 heur + " × ω(4)", 0});
                        }
                    }
                    if (fours == 4) {
                        heur = heuristic4444(i, 3, trace, depth + 1, __LINE__);
                        if (isValid(heur)) {
                            solutions.push_back({heur + " × ω(4)", 0});
                        }
                    }
                    break;
                default:
                    return "<02-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
            }

            div = (unsigned int) largestPrimeDiv((int) i);
            divCoeff = 1;
            copy = (unsigned) i / div;
            while (copy % div == 0) {
                copy /= div;
                divCoeff++;
            }

            unsigned val, valMax;
            switch (fours) {
                case 2:
                    heur = heuristic4444(div, 1, trace, depth + 1, __LINE__);
                    heur2 = heuristic4444(i / div, 1, trace, depth + 1, __LINE__);
                    if (isValid(heur) && isValid(heur2)) {
                        solutions.push_back({heur + " × " + heur2, 0});
                    }
                    break;
                case 3:
                    for (unsigned k = (unsigned) (floor(log(MAX) / log(2))); k >= 2; k--) { // Testing n**k
                        for (valMax = 2; ipow(valMax, k) <= MAX; valMax++);
                        for (unsigned j = valMax; j >= 2; j--) {
                            val = ipow(j, k);
                            if (i == val) {
                                for (int l = 1; l <= 2; l++) {
                                    heur = heuristic4444(j, l, trace, depth + 1, __LINE__);
                                    heur2 = heuristic4444(k, 3 - l, trace, depth + 1, __LINE__);
                                    if (isValid(heur) && isValid(heur2)) {
                                        solutions.push_back({"(" + heur + ") ^ " + heur2, 0});
                                    }
                                }
                            }
                            if (i % val == 0) {
                                heur = heuristic4444(i / val, 1);
                                heur2 = heuristic4444(j, 1, trace, depth + 1, __LINE__);
                                heur3 = heuristic4444(k, 1, trace, depth + 1, __LINE__);
                                if (isValid(heur) && isValid(heur2) && isValid(heur3)) {
                                    solutions.push_back({heur + " × (" + heur2 + ") ^ " + heur3, 0});
                                }
                            }
                        }
                    }
                    for (int l = 1; l <= 2; l++) {
                        heur = heuristic4444(div, l, trace, depth + 1, __LINE__);
                        heur2 = heuristic4444(i / div, 3 - l, trace, depth + 1, __LINE__);
                        if (isValid(heur) && isValid(heur2)) {
                            solutions.push_back({heur + " × " + heur2, 0});
                        }
                    }
                    break;
                case 4:
                    for (unsigned k = (unsigned) (floor(log(MAX) / log(2))); k >= 2; k--) { // Testing n**k
                        for (valMax = 2; ipow(valMax, k) <= MAX; valMax++);
                        for (unsigned j = valMax; j >= 2; j--) {
                            val = ipow(j, k);
                            if (i == val) {
                                for (int l = 1; l <= 3; l++) {
                                    heur = heuristic4444(j, l, trace, depth + 1, __LINE__);
                                    heur2 = heuristic4444(k, 4 - l, trace, depth + 1, __LINE__);
                                    if (isValid(heur) && isValid(heur2)) {
                                        solutions.push_back({"(" + heur + ") ^ " + heur2, 0});
                                    }
                                }
                            }
                            if (i % val == 0) {
                                for (int l = 1; l <= 3; l++) {
                                    heur = heuristic4444(i / val, 1 + (l == 1 ? 1 : 0), trace, depth + 1, __LINE__);
                                    heur2 = heuristic4444(j, 1 + (l == 2 ? 1 : 0), trace, depth + 1, __LINE__);
                                    heur3 = heuristic4444(k, 1 + (l == 3 ? 1 : 0), trace, depth + 1, __LINE__);
                                    if (isValid(heur) && isValid(heur2) && isValid(heur3)) {
                                        solutions.push_back({heur + " × (" + heur2 + ") ^ " + heur3, 0});
                                    }
                                }
                            }
                        }
                    }
                    for (int l = 1; l <= 3; l++) {
                        heur = heuristic4444(div, l, trace, depth + 1, __LINE__);
                        heur2 = heuristic4444(i / div, 4 - l, trace, depth + 1, __LINE__);
                        if (isValid(heur) && isValid(heur2)) {
                            solutions.push_back({heur + " × " + heur2, 0});
                        }
                    }
                    break;
                default:
                    return "<03-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
            }

            if (i % 24 == 0) {
                heur = heuristic4444(i / 24, fours - 1, trace, depth + 1, __LINE__);
                if (isValid(heur)) {
                    solutions.push_back({"4! × " + heur, 0});
                }
            }
            if (i % 8 == 0) {
                heur = heuristic4444(i / 8, fours - 1, trace, depth + 1, __LINE__);
                if (isValid(heur)) {
                    solutions.push_back({"4!! × " + heur, 0});
                }
            }
            if (i % 4 == 0) {
                heur = heuristic4444(i / 4, fours - 1, trace, depth + 1, __LINE__);
                if (isValid(heur)) {
                    solutions.push_back({"4 × " + heur, 0});
                }
            }
            if (fours >= 2 && i % 6 == 0) {
                heur = heuristic4444(i / 6, fours - 1, trace, depth + 1, __LINE__);
                if (isValid(heur)) {
                    solutions.push_back({"Γ(4) × " + heur, 0});
                }
            }
            if (fours >= 2 && i % 2 == 0) {
                heur = heuristic4444(i / 2, fours - 1, trace, depth + 1, __LINE__);
                if (isValid(heur)) {
                    solutions.push_back({"Ω(4) × " + heur, 0});
                }
            }
            for (unsigned j = (unsigned) sqrt(i); j >= 2; j--) {
                val = j * j;
                if (i == val && fours >= 2) {
                    heur = heuristic4444(j, fours - 1, trace, depth + 1, __LINE__);
                    if (isValid(heur)) {
                        solutions.push_back({heur + " ^ Ω(4)", 0});
                    }
                }
                if (i % val == 0) {
                    for (int l = 1; l < fours - 1; l++) {
                        heur = heuristic4444(i / val, l, trace, depth + 1, __LINE__);
                        heur2 = heuristic4444(j, fours - 1 - l, trace, depth + 1, __LINE__);
                        if (isValid(heur) && isValid(heur2)) {
                            solutions.push_back({"(" + heur + " × " + heur2 + ") ^ Ω(4)", 0});
                        }
                    }
                    for (int l = 1; l < fours - 1; l++) {
                        heur = heuristic4444(i / val * j, fours - 1, trace, depth + 1, __LINE__);
                        if (isValid(heur)) {
                            solutions.push_back({heur + " ^ Ω(4)", 0});
                        }
                    }
                }
            }
            for (unsigned j : base) {
                if (i % j == 0) {
                    heur = heuristic4444(i / j, fours - 1, trace, depth + 1, __LINE__);
                    heur2 = heuristic4444(j, 1, trace, depth + 1, __LINE__);
                    if (isValid(heur)) {
                        solutions.push_back({heur + " × " + heur2, 0});
                    }
                }
            }
            if (!solutions.empty()) {
                for (unsigned j = 0; j < solutions.size(); j++) {
                    solutions[j].second = evaluateCost(solutions[j].first);
                }
                std::sort(solutions.begin(), solutions.end(),
                          [](std::pair <std::string, uint64_t> &a, std::pair <std::string, uint64_t> &b) {
                              return a.second < b.second;
                          });
                if (fours == 4) {
                    finalSols4[i] == solutions.front().first;
                }
                if (fours == 3) {
                    finalSols3[i] == solutions.front().first;
                }
                if (fours == 2) {
                    finalSols2[i] == solutions.front().first;
                }
                return solutions.front().first;
            }
            return "<4-" + std::to_string(i) + "@" + std::to_string(fours) + ">";
        }

        uint64_t evaluateCost(std::string solve) const {
            std::vector <std::pair <std::string, int>> costs = {
                    {"!!", COST_DOUBLE_FACTORIAL},
                    {"sf", COST_SUPERFACTORIAL},
                    {" ", 0},
                    {"0", COST_DIGIT},
                    {"1", COST_DIGIT},
                    {"2", COST_DIGIT},
                    {"3", COST_DIGIT},
                    {"4", COST_DIGIT},
                    {"5", COST_DIGIT},
                    {"6", COST_DIGIT},
                    {"7", COST_DIGIT},
                    {"8", COST_DIGIT},
                    {"9", COST_DIGIT},
                    {"p#", COST_PRIMORIAL},
                    // End multi-character sequences
                    {"(", COST_LPAREN},
                    {")", COST_RPAREN},
                    {"!", COST_FACTORIAL},
                    {"+", COST_PLUS},
                    {"-", COST_MINUS},
                    {"×", COST_TIMES},
                    {"/", COST_DIVIDE},
                    {"^", COST_POWER},
                    {"Γ", COST_GAMMA},
                    {"p", COST_PARTITION},
                    {"σ", COST_SIGMA},
                    {"d", COST_DIVISOR_COUNT},
                    {"C", COST_CATALAN},
                    {"ω", COST_SMALL_OMEGA},
                    {"Ω", COST_BIG_OMEGA},
                    {"P", COST_PRIME_NUMBER},
                    {"F", COST_FIBONACCI},
                    {"s", COST_DIVISOR_SUM}
            };
            int cost = 0;
            for (auto i : costs) {
                auto pos = solve.find(i.first);
                while (pos != std::string::npos) {
                    solve.erase(pos, i.first.length());
                    pos = solve.find(i.first);
                    cost += i.second;
                }
            }
            if (solve.length() > 0) {
                std::cout << "Missing costs for <" << solve << ">" << std::endl;
            }
            return (uint64_t) cost;
        }

        uint64_t baseInvertPrime(unsigned i) const {
            return (uint64_t) std::distance(primes.begin(), std::find(primes.begin(), primes.end(), i)) + 1;
        }
};


#endif // SOLVER_H
