n = int(input())
for i in range(1, n+1):
    a, b = list(map(int, input().split()))
    print('#{} {} {}'.format(i, a//b, a%b))