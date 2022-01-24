---
title: Golang学习-定义变量
date: 2022-01-24
tags: [Go]
categories:
 -  Golang 
---

# 定义变量

1. 定义变量，不赋初始值

   ```go
   func variableZeroValue() {
   	var a int
   	var s string
   	fmt.Printf("%d %s\n", a, s)
       // 0 ''
   }
   ```

   

2. 定义变量并赋初始值

   ```go
   func variableInitialValue() {
   	var a int = 3
   	var s string = "abc"
   	fmt.Println(a, s)
       // 3 abc
   }
   ```

   

3. 定义变量时可以不设置变量类型，由编译器推测变量类型

   ```go
   func variableTypeDeduction() {
   	var a, b, c, s = 3, 4, true, "def"
   	fmt.Println(a, b, c, s)
       // 3 4 true def
   }
   ```

4. 使用:=定义变量

   > 只能在函数内部使用

   ```go
   func variableShorter() {
      a, b, c, s := 3, 4, true, "def"
      b = 5
      fmt.Println(a, b, c, s)
      // 3 5 true def
   }
   ```

5. 使用var ()集中定义变量

   ```
   var (
      aa = 1
      bb = "2"
      cc = true
   )
   ```

6. 虚数的使用

   ```go
   // 欧拉公式
   func euler() {
      fmt.Printf("%.3f\n",
         cmplx.Exp(1i*math.Pi)+1)
      // (0.000+0.000i)
   }
   ```

7. 强制类型转换

   ```go
   func triangle() {
      var a, b int = 3, 4
      var c int
      c = int(math.Sqrt(float64(a*a + b*b)))
      fmt.Println(c)
      // 5
   }
   ```

8. 常量，常量的数值可以作为各种类型使用

   ```go
   func consts() {
      const filename = "abc.txt"
      const a, b = 3, 4
      var c int
      c = int(math.Sqrt(a*a + b*b))
      fmt.Println(filename, c)
      // abc.txt 5
   }
   ```

9. 枚举类型

   ```go
   func enums() {
      const (
         cpp = iota
         _   //跳过1
         java
         python
         golang
      )
   
      // b, kb, mb, gb, tb, pb
      const (
         b = 1 << (10 * iota)
         kb
         mb
         gb
         tb
         pb
      )
   
      fmt.Println(cpp, java, python, golang)
      fmt.Println(b, kb, mb, gb, tb, pb)
      // 0 2 3 4
      // 1 1024 1048576 1073741824 1099511627776 1125899906842624
   
   }
   ```

   

