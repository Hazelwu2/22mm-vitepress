# 瀏覽器吃進 Autofill

在瀏覽器上的input欄位輸入時，
瀏覽器貼心幫我們帶入之前的值，但也順帶一起放上瀏覽器的 Autofill 預設樣式，導致版面不和諧，有兩種方式可以解決

## 關閉 autofill
嘗試過加入autocomplete="off"不起作用，但改成autocomplete="hack-autofill"，再也不會被瀏覽器帶著走，套上原本樣式
``` html
<a-input-search autocomplete="hack-autofill" />
``` 

## 覆蓋瀏覽器預設的 autofill 樣式
加上 css 以覆蓋原本預設樣式

```
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    -webkit-text-fill-color: transparent;
    -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0) inset;
    transition: background-color 5000s ease-in-out 0s;
}
```