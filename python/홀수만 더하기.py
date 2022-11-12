t = int(input())

for i in range(1, t+1) :
    data = list(map(int, input().split()))
    result = 0
    for j in range(len(data)) :
        if data[j] % 2 == 1 :
            result += data[j]

    print('#%d %d' % (i, result))