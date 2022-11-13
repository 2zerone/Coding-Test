T = int(input())
data = list(map(int, input().split()))
data.sort() # 오름차순 배열
index_num = (T-1)//2 # // 연산자는 나눈 후 소숫점을 모두 버리고 정수만 남기는 연산자
print('{}'.format(data[index_num]))