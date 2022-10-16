## contextMenu

Demo of using verifyCode component [DEMO](https://ordamari.github.io/verifyCode/)

On many website and application have verify code input for login or two factor authentication,
verify code containing usually 3-5 inputs that connect with each other and return the verify code.

verifyCode component containing the inputs and do the connection between the input, he get the lenght of the code, setState function to update the code and callback function to run when the user press enter.

simply use:

```
<VerifyCode
    length={4}
    enterCallBack={logIn}
    setVerifyCode={setVerifyCode}
/>
```
