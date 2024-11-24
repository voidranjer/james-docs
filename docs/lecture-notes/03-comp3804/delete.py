def find_two_smallest(input_array):
    if len(input_array) < 2:
        return None, None

    smallest = float('inf')
    second_smallest = float('inf')

    # This algorithm assumes that the question is asking for two smallest numbers excluding duplicates.
    # i.e. get two UNIQUE smallest numbers
    
    for element in input_array:
        if element < smallest:
            second_smallest = smallest
            smallest = element
        elif element < second_smallest and element != smallest:
            second_smallest = element

    return smallest, second_smallest

print(find_two_smallest([2,1,4,0,3,9]))