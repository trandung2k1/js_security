## Cookie , Local Storage, Session Storage

I. JWT + local storage -> XSS -> use httpOnly + secure(options cookies)

```js
<img src="invalid_link" onerror="alert(localStorage.getItem('name'))">
```

II. JWT + Cookie -> CSRF -> use CORS
