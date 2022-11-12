T = int(input())
for i in range(1, T + 1):
    data = list(map(int, input().split()))
    if data[0] > data[1]:
        result  = '>'
    if data[0] == data[1]:
        result = '='
    if data[0] < data[1]:
        result = '<'
        
    print('#{} {}'.format(i, result))

# 코드 길이 줄였을 때
T = int(input())
for tc in range(1, T + 1):
    x, y = map(int, input().split())
    if x > y:
        ans = '>'
    elif x < y:
        ans = '<'
    else:
        ans = '='
    print(f'#{tc} {ans}')