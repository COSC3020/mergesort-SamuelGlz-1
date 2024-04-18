[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In the worst case scenerio we need to consider three parts of the algorithm:

OuterLoop

InnerLoop

IfStatement

OuterLoop:

The outer loop will run log_2(n) times as we compare maxGroupSize < array.length, with maxGroupSize growing by 2 each time

InnerLoop:

For Porfessor Lars/TA:
I am a bit confused if I analyzed this step correctly, the outer loop is establishing the size of groupings while the inner loop compares these groups by 2. The first round there are n groups and n/2 comparisons, then the next time around there are n/2 groups and n/4 comparisons 

For an input [9 8 7 6 5 4 3 2 1]
() = group based on group size and  ^ as comparisons made by inner loop

(9) ^ (8) (7) ^ (6) (5) ^ (4) (3) ^ (2) (1) ^ (0) : 

#() = 10 or n
#^ = 5 or $\frac {n}{2}$

=>

(8 9) ^ (6 7) (4 5) ^(3 4)  (0 1) ^ () *if the code dosent have another group to compare it just leaves it alone

#() = 5 or $\frac {n}{2}$
#^ = 3 or $\frac {n}{4}$ rounded up

The growth in the inner loop seems to be logarithmic with the loop having to make less calls each time, which seems to be a $log_2(n)$ but I am not sure if this is the right analysis.


IfStatement:

In a worse case scenario the input to mergesort will be a sorted list in descending order. In the case of this implementation it means that there will be a for loop the size of maxGroupSize that will run in each inner loop call, which ends up equalling n comparisons

A theta bound for this implementation in the worst case scenario is $\Theta$ ($n*log_2(n)^2$)


