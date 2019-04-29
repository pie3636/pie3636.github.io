#ifndef DIVIDE_H
#define DIVIDE_H

#include "BinaryOperator.h"

class Divide : public BinaryOperator {
    public:
        Divide(int8_t _cost) : BinaryOperator(_cost) {};
        bool canApply(int64_t a, int64_t b) const { return a % b == 0 && b != 0 && (a != INT64_MIN || b != -1); };
        int64_t apply(int64_t a, int64_t b) const { return a / b; };

    private:
        const std::string name = "Divide";
};

#endif // DIVIDE_H
