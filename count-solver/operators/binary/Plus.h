#ifndef PLUS_H
#define PLUS_H

#include "BinaryOperator.h"

class Plus : public BinaryOperator {
    public:
        Plus(int8_t _cost) : BinaryOperator(_cost) {};
        bool canApply(int64_t a, int64_t b) const { return !__builtin_add_overflow(a, b, &res); };
        int64_t apply(int64_t a, int64_t b) const { a = a; b = b; return res; };

    private:
        const std::string name = "Plus";
        int64_t res = 0;
};

#endif // PLUS_H
