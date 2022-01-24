# 解構賦值

Destructuring Assignment 解構賦值，簡單來說是將陣列、物件解開後並賦予獨立變數，一行即可完成

## 物件解構
取的變數必須同名，才能取到值，response有data屬性，可用`{data}`來接

``` js
const response = {
  data: {
    status: 1,
    msg: 'success
  }
}
const { data } = response

console.log(data) // { status: 1, msg: 'success' }
```

## 陣列解構

``` js
const [a, b] = [27, 26]
console.log(a, b) // 27, 26
```

## 一次宣告兩種變數

``` js
const [memoInObject, memoInArray] = [{}, []]
console.log(memoInObject, memoInArray) // {}, []
```

如果解構不成功，值會是 `undefined`

## 參數
解構也可設定預設值
``` js
const errorMsg = (text, options = {}) => {
  const { title = '警示' } = options

  return { title, text }
}
```


