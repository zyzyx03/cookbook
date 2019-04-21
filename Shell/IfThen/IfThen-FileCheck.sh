#!/bin/bash

clear
if [ -e /etc/passwd ]
then
    echo "File exist"
else
    echo "File don't exist"
fi
