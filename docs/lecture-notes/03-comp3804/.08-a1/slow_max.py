def find_max(A, curr_index, curr_max):
    # base case: only one element left to consider
    if curr_index == 0: 
        return max(A[0], curr_max)

    new_max = curr_max # equiv to `new_max = max(A[curr_index], curr_max)`; though not doing it this way for understandability
    if (A[curr_index] > new_max):
        new_max = A[curr_index]

    return find_max(A, curr_index - 1, new_max)

A=[3,1,5,0,2,9,6]
print(find_max(A, curr_index=len(A) - 1, curr_max=A[len(A) - 1]))