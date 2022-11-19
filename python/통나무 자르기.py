n = int(input())

for i in range(1, n+1):
    tc = int(input())
    answer= ''
    if tc % 2 == 0:
        answer = 'Alice'
    else:
        answer = 'Bob'
    print('#{} {}'.format(i, answer))