#!/bin/bash
a=`date | awk '{print $1}'`

if [ "$a" == Mon ]
then
    echo "Today is $a"
else
    echo "Today is not Monday"
fi
