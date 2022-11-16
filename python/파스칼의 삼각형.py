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
                tmp.append(answer[i-1][j-1] + answer[i-1][j])
        answer.push(tmp)
    for l in answer:
        print(*l)