# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.


# Create dict
person = {
    'first_name': 'zyzyx',
    'last_name': 'Doe',
    'age': 30
}

# Use constructor
#person2 = dict(first_name='Sara', last_name='Williams')

# Get value
print(person['first_name'])
print(person.get('last_name'))

# Add key/value
person['phone'] = '555-555-555'

# Get dict keys
print(person.keys())

# Get dict items
print(person.items())

# Copy dict
person2 = person.copy()
person2['city'] = 'Boston'

# remove item
del(person['age'])
person.pop('phone')

# Clear
person.clear()

# Get length 
print(len(person2))

# list of dict
people = [
    {'name': 'zyzyx', 'age': 26},
    {'name': 'kevin', 'age': 25}
]


#print(people[1]['name'])
print(people)