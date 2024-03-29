---
layout: word
word: K-median
translation: K-median
---

یک الگوریتم خوشه‌بندی که مرتبط با k-means است. تفاوت عملی بین این دو به صورت زیر است:

- در[ k-means](/k/k-means)، مرکزها با به حداقل رساندن مجموع مربعات فاصله بین یک کاندیدای مرکز و هر یک از نمونه‌های آن تعیین می شوند.
- در k-median، مرکزها با به حداقل رساندن مجموع فاصله بین یک کاندیدای مرکز و هر یک از نمون‌ های آن تعیین می شوند.

توجه داشته باشید که تعاریف فاصله نیز متفاوت است:

k-mean به [فاصله اقلیدسی ](https://wikipedia.org/wiki/Euclidean_distance)از مرکز تا یک مثال متکی است. (در دو بعد، فاصله‌ی اقلیدسی به معنای استفاده از قضیه فیثاغورث برای محاسبه وتر است.) به عنوان مثال k-means بین (2،2) و (5 ، -2) خواهد بود:

![](/assets/img/euclidean-distance.png)

k-median به [فاصله منهتن](https://wikipedia.org/wiki/Taxicab_geometry) از مرکز تا یک مثال متکی است. این فاصله جمع دلتاهای مطلق در هر بعد است. به عنوان مثال ، فاصله k-median بین (2،2) و (5 ، -2) خواهد بود:

![](/assets/img/manhattan-distance-.png)
