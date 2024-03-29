---
layout: word
word: K-means
translation: K-means
---

یکی از الگوریتم‌های محبوب [خوشه‌بندی](/c/clustering) است که برای گروه‌بندی دسته‌ها در یادگیری بدون نظارت استفاده می‌شود. الگوریتم k-means بطور کلی موارد زیر را انجام می‌دهد:

- با تکرار بهترین نقاط مرکز k را تعیین می‌کند(معروف به [centroids](/c/centroid)).
- هر نمونه را به نزدیک‌ترین مرکز اختصاص می‌دهد. نمونه‌های نزدیک به مرکز، متعلق به یک گروه هستند.

الگوریتم k-means مکان‌های مرکزی را انتخاب می‌کند تا مربع تجمعی فواصل هر مثال، تا نزدیک‌ترین مرکز خود را به حداقل برساند.

به عنوان مثال نمودار زیر را از قد سگ تا عرض سگ در نظر بگیرید:

![](/assets/img/dogdimensions.svg)

اگر k = 3 باشد‌، الگوریتم k-mean سه مرکز را معین می‌کند. هر مثال به نزدیک‌ترین مرکز خود اختصاص داده شده که دارای سه گروه است:

![](/assets/img/dogdimensionskmeans.svg)

تصور کنید که یک تولید کننده می‌خواهد اندازه‌های ایده‌آل ژاکت‌های کوچک، متوسط و بزرگ را برای سگ‌ها مشخص کند. سه مرکز نمایانگر متوسط قد و عرض هر سگ را در آن خوشه است. بنابراین تولید کننده احتمالا باید اندازه ژاکت را براساس این سه مرکز تولید کند. توجه داشته باشید که مرکز خوشه معمولا نمونه‌ای در خوشه نیست.

تصاویر قبلی k-Mean را برای مثال‌هایی با تنها دو ویژگی (قد و عرض) نشان می‌دهداما این الگوریتم می‌تواند مثال‌ها را در بسیاری از ویژگی‌ها گروه بندی کند.
