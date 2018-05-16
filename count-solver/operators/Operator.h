#ifndef OPERATOR_H
#define OPERATOR_H

#include <string>

class Operator {
    public:
        Operator(int8_t _cost) : cost(_cost) {};
        virtual ~Operator() {};

        virtual bool isUnary(void) const = 0;
        virtual bool isBinary(void) const = 0;

        virtual const std::string getName() const final {
            return name;
        }

        virtual int8_t getCost() const final {
            return cost;
        }

    private:
        const std::string name = "~UnknownName~";
        const int8_t cost;
};

#endif // OPERATOR_H