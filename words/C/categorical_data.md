---
layout: word
word: categorical_data
translation: داده کیفی
tags:
  - word
  - C
---
**[Features](https://developers.google.com/machine-learning/glossary#feature)** having a discrete set of possible values. For example, consider a categorical feature named `house style`, which has a discrete set of three possible values: `Tudor, ranch, colonial`. By representing `house style` as categorical data, the model can learn the separate impacts of `Tudor`, `ranch`, and `colonial` on house price.

Sometimes, values in the discrete set are mutually exclusive, and only one value can be applied to a given example. For example, a `car maker` categorical feature would probably permit only a single value (`Toyota`) per example. Other times, more than one value may be applicable. A single car could be painted more than one different color, so a `car color` categorical feature would likely permit a single example to have multiple values (for example, `red` and `white`).

Categorical features are sometimes called **[discrete features](https://developers.google.com/machine-learning/glossary#discrete_feature)**.

Contrast with **[numerical data](https://developers.google.com/machine-learning/glossary#numerical_data)**.

ویژگی هایی که تنها میتوانند مجموعه‌ی گسسته ای از مقادیر ممکن را داشته باشند. برای مثال یک داده‌ی کیفی به نام نوع خانه را در نظر بگیرید، که میتواند سه مقدار ممکن ویلایی، آپارتمانی و برج را داشته باشد. با معرفی نوع خانه به عنوان یک داده کیفی مدل میتواند تاثیر جداگانه هریک از این سه  را بر روی قیمت  خانه یاد بگیرد.\
گاهی اوقات مقادیر در مجموعه گسسته منحصربفرد هستند و تنها یک مقدار میتوانند داشته باشند. برای مثال سازنده ماشین  احتمالا تنها میتواند یک مقدار داشته باشد (مثلا تویوتا).\
در سایر اوقات  میتوان بیش از یک مقدار نیز نسبت داد. یک ماشین میتواند چند رنگ باشد بنابراین داده کیفی رنگ ماشین یک مثال از است که میتواند چندین مقدار داشته باشد. (برای مثال قرمز و سفید.)

داده های کیفی گاهی داده های گسسته نیز خوانده میشوند.

متضاد: داده کمی