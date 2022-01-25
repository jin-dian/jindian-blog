---
title: Golang学习-分支与循环
date: 2022-01-25
tags: [Go]
categories:
 -  Golang
---

# 分支与循环

## 条件语句

### if语句

if条件里可以赋值，条件里赋值的变量作用域在if语句内。

```go
func branchIf() {
   const filename = ""
   if contents, err := ioutil.ReadFile(filename); err != nil {
      fmt.Println(err)
   } else {
      fmt.Printf("%s\n", contents)
   }
}
```

### switch语句

switch后可以没有表达式。

执行一个case后跳出switch，若想继续执行，可在case语句块末尾加fallthrough。

```go
func grade(score int) string {
   g := ""
   switch {
   case score < 60:
      g = "C"
   case score < 80:
      g = "B"
   case score <= 100:
      g = "A"
   default:
      panic(fmt.Sprintf("Wrong score: %d", score))
   }
   return g
}
```

## 循环语句

### for语句

for语句里的条件都可以省略。

Go语言里没有while语句，可以用for省略初始条件和递增条件来代替。

当所有条件都省略时相当于死循环（在使用channel和goroutine经常会用到）。

```go
// 二进制转换
func convertToBin(n int) string {
   result := ""
   for ; n > 0; n /= 2 {
      lsb := n % 2
      result = strconv.Itoa(lsb) + result
   }
   return result
}

// 逐行打印文件
func readFile(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}
```

