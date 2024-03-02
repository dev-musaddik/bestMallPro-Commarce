# X_value=int(input(''))
# n_value =int(input(''))

# series_sum = 0
# for i in range(1, n_value + 1):
#     # series_sum += X_value**i
#     series_sum =series_sum+ X_value**i

# print(f"The sum of the series is: {series_sum}")


n=int(input(""))
sum=0
for i in range(1,n+1,2):
    sum+=i**(i+2)
print(sum)    
