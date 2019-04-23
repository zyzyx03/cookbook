#!/bin/bash
# Author : zyzyx03
# Do While Script. 
# Example: Countdown script before the process stop. 

count=0
num=10
while [ $count -lt 10 ]
do
	echo
	echo "$num seconds left to stop this process $1" # $1 Process ID
	echo
	sleep 1          # This command will pause for 1 second

num=`expr $num - 1`      # Expression 10 -1
count=`expr $count + 1`  # Expression 0 + 1
done
echo "$1 process is stopped!!"
echo
