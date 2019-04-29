#ifndef BINARYOPERATOR_H
#define BINARYOPERATOR_H

#include "../Operator.h"

class BinaryOperator : public Operator {
    public:
        BinaryOperator(int8_t _cost) : Operator(_cost) {};
        bool isUnary(void) const { return false; };
        bool isBinary(void) const { return true; };
        virtual bool canApply(int64_t a, int64_t b) const = 0;
        virtual int64_t apply(int64_t a, int64_t b) const = 0;
};

#endif // BINARYOPERATOR_H
