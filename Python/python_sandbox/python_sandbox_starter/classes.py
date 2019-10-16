# A class is like a blueprint for creating objects. An object has properties and methods
# (functions) associated with it. Almost everything in Python is an object

# Create class
class User: 
    # Constructor 
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def greeting(self):
        return f'My name is {self.name} and I am {self.age} years old '

    def has_birthday(self):
        self.age += 1

# Extend class
class Customer(User):
    # Constructor 
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance

    # def greeting(self):
    #     return f'My name is {self.name} and I am {self.age} years old and my balance is {self.balance}'

# Init user object
zyzyx = User('Zyzyx Neo', 'zyzyx@gmail.com', 26)

# Init customer object
janet = Customer('Janet Johnson', 'janet@yahoo.com', 26)

janet.set_balance(500)
print(janet.greeting())

# Janet in customer can call greeting even it is not defined in customer
# because it is extended so it can get the function from user. 

zyzyx.has_birthday()
print(zyzyx.greeting())



