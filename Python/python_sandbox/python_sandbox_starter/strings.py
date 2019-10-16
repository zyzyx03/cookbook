# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = 'zyzyx'
age = 26

# Concatenate
#print("Hello, my name is " + name + "and I am " + str(age))

# String Formatting

# Argument by position
#print('My name is {name} and I am {age}'.format(name=name, age=age))

# F-String (3.6+)
#print(f"Hello, my name is {name} and I am {age}")

# String Methods

s = "hello world"

# Capitalize string
print(s.capitalize())
print(s.count('h'))