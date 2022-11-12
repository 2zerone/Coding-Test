t = int(input())

for i in range(1, t+1):
    data = list(map(int, input().split()))
    result = sum(data) / len(data)
    result = round(result) # 반올림해주는 함수 round
    
    print('#%d %d' % (i, result))