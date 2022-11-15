n = int(input())
for i in range(1, n+1):
    S = input()
    for j in range(1, 10):
        if S[:j] == S[j:j*2]:
            print('#{} {}'.format(i, j))
            break