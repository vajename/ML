---
layout: word
word: Hinge Loss
translation: hinge هزینه‌ی
tags:
  - word
  - H
---
خانواده‌ای از توابع [هزینه](/l/loss) که برای [طبقه‌بندی](/c/classification_model) طراحی شده‌اند تا مرز تصمیم گیری را تا جایی که ممکن است از هر نمونه آموزش پیدا کنند. بنابراین تفاوت بین مثال‌ها و[ مرز تصمیم](/d/decision_boundary) را به حداکثر می‌رساند. [](/k/KSVMs)[KSVMs](/k/KSVMs) ها از هزینه‌ی hinge (یا عملکرد مربوطه مانند هزینه‌ی مربع hinge) استفاده می‌کنند. برای طبقه‌بندی باینری، عملکردهزینه‌ی hinge به صورت زیر تعریف می‌شود:

![](/assets/img/hinge-loss-2.png)



که در آن y برچسب واقعی است، یا -1 یا 1+ و y 'خروجی خام مدل طبقه‌بندی است:

![](/assets/img/hinge-loss-1.png)

در نتیجه یک نمودار هزینه‌ی hinge در مقابل (y * y ') به صورت زیر است:

![](/assets/img/hinge-loss.svg)