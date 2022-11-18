def palindrome(word):
    if word == word[::-1]:
        return 1
    else:
        return 0
tc = int(input())
 
for i in range(1, tc+1):
    word = input()
    print('#{}'.format(i), end=' ')
    print(palindrome(word))