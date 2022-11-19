n = int(input())
for i in range(1, n+1):
    data = list(map(int, input().split()))
    data.sort()
    answer = round(sum(data[1:len(data)-1]) / (len(data)-2))
    
    print('#{} {}'.format(i, answer))