#ifndef TIMES_H
#define TIMES_H

#include "BinaryOperator.h"

class Times : public BinaryOperator {
    public:
        Times(int8_t _cost) : BinaryOperator(_cost) {};
        bool canApply(int64_t a, int64_t b) const { return !__builtin_mul_overflow(a, b, &res); };
        int64_t apply(int64_t a, int64_t b) const { a = a; b = b; return res; };

    private:
        const std::string name = "Times";
        int64_t res = 0;
};

#endif // TIMES_H
