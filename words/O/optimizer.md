---
layout: word
word: Optimizer
translation: بهینه‌ساز
---

یک ‌پیاده‌سازی خاص از الگوریتم [کاهش شیب (gradient descent)](/G/gradient_descent). بهینه‌سازهای پرکاربرد عبارتند از:

- بهینه‌ساز [AdaGrad](https://www.tensorflow.org/api_docs/python/tf/train/AdagradOptimizer) که از ADAptive GRADient descent (کاهش شیب سازگار) گرفته شده است.
- بهینه‌ساز [Adam](https://www.tensorflow.org/api_docs/python/tf/train/AdamOptimizer) که از ADAptive with Momentum (سازگار با تکانه) گرفته شده است.

بهینه‌سازهای مختلف ممکن است با ایجاد تفاوت یک یا چند مورد از مفاهیم زیر تاثیر الگوریتم کاهش شیب (gradient descent) را بر روی یک [مجموعه داده آموزش](/T/training_set) تغییر دهند:

- [تکانه (momentum)](https://www.tensorflow.org/api_docs/python/tf/train/MomentumOptimizer)
- [](https://www.tensorflow.org/api_docs/python/tf/train/MomentumOptimizer)بسامد به‌روزرسانی
- پراکندگی / نظم‌دهی ([Ftrl](https://www.tensorflow.org/api_docs/python/tf/train/FtrlOptimizer))
- ریاضیات پیچیده‌تر ([نزدیک مبدا بودن یا Proximal](https://www.tensorflow.org/api_docs/python/tf/train/ProximalGradientDescentOptimizer) و ...)

حتی می‌توان [بهینه‌سازهای مبتنی بر شبکه‌های عصبی](https://arxiv.org/abs/1606.04474) را نیز متصور شد.
