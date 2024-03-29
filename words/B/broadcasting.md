---
layout: word
word: Broadcasting
translation: انتشار همگانی
---

گسترش ابعاد (shape) یک عملوند درگیر با یک عملگر ماتریسی به ابعادی که برای آن عملگر مناسب باشند. به عنوان مثال، در جبر خطی نیاز است که دو عملوند درگیر در یک جمع ماتریسی ابعاد مشابهی داشته باشند. به همین دلیل امکان جمع یک ماتریس با ابعاد (m, n) با یک بردار به طول n وجود ندارد. انتشار همگانی امکان این عملیات را با گسترش مجازی وکتور به طول n و تبدیل آن به ماتریس با ابعاد (m, n) که در هر ستون آن یک مقدار تکرار شده فراهم می‌کند.

به عنوان مثال، با مفروضات زیر، جبر خطی جمع ‌‌A و B را نامجاز می‌داند، چون آن‌ها ابعاد متفاوتی دارند.

```text
A = [[7, 10, 4],
     [13, 5, 9]]
B = [2]
```

اما انتشار همگانی با افزایش مجازی ابعاد B به ماتریس زیر، محاسبه A+B را ممکن می‌کند.

```text
 [[2, 2, 2],
  [2, 2, 2]]
```

حال، A+B یک عملیات مجاز است.

```text
[[7, 10, 4],  +  [[2, 2, 2],  =  [[ 9, 12, 6],
 [13, 5, 9]]      [2, 2, 2]]      [15, 7, 11]]
```

اطلاعات بیشتر: [انتشار همگانی در NumPy](https://docs.scipy.org/doc/numpy-1.15.0/user/basics.broadcasting.html)
