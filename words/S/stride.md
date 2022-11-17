---
layout: word
word: Stride
translation: قدم
---

در هر عملگر کانولوشنی یا ادغام، به فاصله بین سری‌های داده‌های ورودی در هر بعد گفته می‌شود. به عنوان مثال، در نمونه زیر می‌توانید یک عملگر کانولوشنی با قدم‌های (۱,۱) را ببینید. بنابراین هر برش از داده‌ی ورودی به اندازه یک خانه به سمت راست از برش قبلی آغاز می‌شود. هنگامی که عملگر به لبه انتهایی سمت راست می‌رسد، برش بعدی از سمت چپ و با فاصله یک خانه به سمت پایین شروع می‌شود.

![An input 5x5 matrix and a 3x3 convolutional filter. Because the
     stride is (1,1), a convolutional filter will be applied 9 times. The first
     convolutional slice evaluates the top-left 3x3 submatrix of the input
     matrix. The second slice evaluates the top-middle 3x3
     submatrix. The third convolutional slice evaluates the top-right 3x3
     submatrix.  The fourth slice evaluates the middle-left 3x3 submatrix.
     The fifth slice evaluates the middle 3x3 submatrix. The sixth slice
     evaluates the middle-right 3x3 submatrix. The seventh slice evaluates
     the bottom-left 3x3 submatrix.  The eighth slice evaluates the
     bottom-middle 3x3 submatrix. The ninth slice evaluates the bottom-right 3x3
     submatrix.](https://developers.google.com/machine-learning/glossary/images/AnimatedConvolution.gif)

مثال فوق نشان‌دهنده‌ی یک قدم دوبعدی است. اگر ماتریس ورودی سه‌بعدی باشد، قدم‌ها نیز باید سه‌بعدی باشند.
