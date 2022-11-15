data = list(map(int, input().split()))
if data[0] >= data[1]:
            print('{}'.format(data[0]-data[1]+1))
else:
            print('{}'.format(data[1]-data[0]+1))