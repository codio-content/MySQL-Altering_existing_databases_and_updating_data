Let's inspect the `users` table of the `EPDriver` database by executing the `SELECT * FROM users;` statement:

```
+----+-----------------+-----------------+
| id | name            | registered_card |
+----+-----------------+-----------------+
|  1 | Brielle Beard   |               1 |
|  2 | Byron Manning   |               0 |
|  3 | Halla Higgins   |               0 |
|  4 | Garrison Hunter |               1 |
|  5 | Jasmine Aguirre |               0 |
|  6 | Ray Blair       |               1 |
|  7 | Eden Peck       |               0 |
|  8 | Teagan Cole     |               1 |
|  9 | Gemma Malone    |               0 |
| 10 | Xandra Wolf     |               1 |
+----+-----------------+-----------------+
10 rows in set (0.00 sec)
```

|||info
### TINYINT(size) MySQL data type
The `registered_card` column is defined with a `TINYINT(size)` MySQL data type. Its values may only range from -128 to 127.

A value of `0` will always be considered a `false` value whereas any non-zero value `-128 > -1` and `1 < 127` represent a `true` value.

`TINYINT(size)` MySQL data types are similar to the `BOOLEAN` data types in other SQL database management systems where the values can be literally `true` or `false` and  generally used for conditional statements (if, else, else if).

The `UNSIGNED` keyword makes the `TINYINT(size)` data type to start only from `0` and allow no negative values.

|||
---
Execute an `UPDATE users` statement omitting the `WHERE` clause to see what could happen to your databases if you do so:

```
mysql> UPDATE users SET registered_card = 0;
```

Inspect the output in the next section.