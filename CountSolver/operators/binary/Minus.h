#ifndef MINUS_H
#define MINUS_H

#include "BinaryOperator.h"

class Minus : public BinaryOperator {
    public:
        Minus(int8_t _cost) : BinaryOperator(_cost) {};
        bool canApply(int64_t a, int64_t b) const { return !__builtin_sub_overflow(a, b, &res); };
        int64_t apply(int64_t a, int64_t b) const { a = a; b = b; return res; };

    private:
        const std::string name = "Minus";
        int64_t res = 0;
};

#endif // MINUS_H
