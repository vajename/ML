---
layout: word
word: Bag of Words
translation: کیف کلمات
---

ارائه ای بدون ترتیب از لغات درون یک عبارت یا متن برای مثال در کیف کلمات سه عبارت زیر یکسان دیده میشوند.

- سگ میپرد بالاتر

  بالاتر سگ میپرد

  میپرد بالاتر سگ

هر کلمه به یک شاخص (index) در بردار پراکنده (sparse vector) متصل می‌شود، جایی که بردار برای هر کلمه در واژگان یک شاخص در نظر گرفته است.

برای مثال عبارت سگ بالاتر میپرد به یک بردار ویژگی با مقادیر غیر صفر برای سه نمایه‌ی مرتبط به کلمات سگ، بالاتر و میپرد متصل می‌شود. مقادیر غیرصفر میتواند هریک از موارد زیر باشد:

\- 1 تا حضور کلمه را نشان بدهد.

\- تعداد دفعاتی که کلمه در کیف مشاهده شده است برای مثال اگر عبارت "سگ قهوه‌ای یک سگ با رنگی قهوه‌ای است." باشد هر دو کلمه سگ و قهوه ای با مقدار۲ نمایش داده میشوند، درحالی که سایر کلمات با ۱ نمایش داده خواهند شد.

\- الگوریتم های دیگر مانند لگاریتم تعداد دفعات تکرار کلمه در کیف.
