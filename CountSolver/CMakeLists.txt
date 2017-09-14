cmake_minimum_required(VERSION 3.7)
project(CountSolver)

set(CMAKE_CXX_STANDARD 14)

set(SOURCE_FILES main.cpp Solver.h operators/Operator.h operators/binary/BinaryOperator.h operators/unary/UnaryOperator.h operators/binary/Plus.h operators/binary/Minus.h headers.h operators/unary/AbsoluteValue.h operators/binary/Times.h operators/binary/Divide.h gmpmr.h)
add_executable(CountSolver ${SOURCE_FILES})

set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -std=c++0x -pg -g -Wall -Wnon-virtual-dtor -Wshadow -Winit-self -Wredundant-decls -Wcast-align -Wundef -Wfloat-equal -Winline -Wunreachable-code -Wmissing-declarations -Wmissing-include-dirs -Wswitch-enum -Wswitch-default -Weffc++ -Wzero-as-null-pointer-constant -Wmain -pedantic -Wfatal-errors -Wextra")

set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -std=c++0x -Wall -fomit-frame-pointer -fexpensive-optimizations -O3")