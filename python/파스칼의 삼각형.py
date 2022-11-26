A = int(input())
B = int(input())
for i in range(1, A+1):
    print('#{}'.format(i))
    answer = []
    for j in range(1, B+1):
        tmp = []
        for k in range(j+1):
            if k==0 or k==j:
                tmp.append(1)
            else:
                tmp.append(answer[j-1][k-1] + answer[j-1][k])
        answer.append(tmp)
    for l in answer:
        print(*l)

# // 다른 코드
# T=int(input())
 
# for i in range(T):
#     N=int(input())
#     print('#%d'%(i+1))
#     for j in range(N):
#         if j==0:
#             print("1")
#         elif j==1:
#             print("1 1")
#         else:
#             print("1",end=' ')
#             for k in range(j-1):
#                 print(j,end=' ')
#             print("1")