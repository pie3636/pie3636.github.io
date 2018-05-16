#ifndef ABSOLUTE_VALUE_H
#define ABSOLUTE_VALUE_H

#include "UnaryOperator.h"

class AbsoluteValue : public UnaryOperator {
    public:
        AbsoluteValue(int8_t _cost) : UnaryOperator(_cost) {};
        bool canApply(int64_t a) const { return a != INT64_MIN; };
        int64_t apply(int64_t a) const { return std::abs(a); };

    private:
        const std::string name = "AbsoluteValue";
};

#endif // ABSOLUTE_VALUE_H
