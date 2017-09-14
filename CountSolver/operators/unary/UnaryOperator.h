#ifndef UNARYOPERATOR_H
#define UNARYOPERATOR_H

#include "../Operator.h"

class UnaryOperator : public Operator {
    public:
        UnaryOperator(int8_t _cost) : Operator(_cost) {};
        bool isUnary(void) const { return true; };
        bool isBinary(void) const { return false; };
        virtual bool canApply(int64_t a) const = 0;
        virtual int64_t apply(int64_t a) const = 0;
};

#endif // UNARYOPERATOR_H
