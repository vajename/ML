---
layout: word
word: Depthwise Separable Convolutional Neural Network(sepcnn)
translation: (sepCNN)شبکه عصبی کانولوشنال تفکیک‌پذیر
tags:
  - word
  - D
---
یک معماری [شبکه‌ی عصبی کانولوشنال](/c/convolutional_neural_network) مبتنی بر [Inception](/i/inception) است که ماژول‌های آن با کانولوشن کانال‌های تفکیک‌پذیر جایگزین می‌شوند. همچنین به عنوان Xception شناخته می‌شود.

کانولوشن کانال‌های تفکیک‌پذیر یک نتیجه‌گیری ۳ بعدی استاندارد را به دو عمل جابجایی جداگانه تبدیل می‌کند که از نظر محاسباتی کارآمد‌تر هستند: اول یک کانولوشن عمیق با عمق 1 (n \* n \* 1) و سپس یک کانولوشن نقطه‌ای با طول و عرض 1 (1 \* 1 \* n).

برای کسب اطلاعات بیشتر ، به [Xception: Deep Learning with Depthwise Separable Convolutions](https://arxiv.org/pdf/1610.02357.pdf) مراجعه کنید.