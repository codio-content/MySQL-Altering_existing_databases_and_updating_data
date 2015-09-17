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

The `registered_card` column represents a `TINYINT(size)` MySQL data type. Its values may only range from 0 to 9 where `0` is a `false` value and `1-9` is equal to a `true` value. 

`TINYINT(size)` MySQL data types are similar to the `BOOLEAN` data types in other SQL database management systems where the values can be literally `true` or `false`.

Execute an `UPDATE users` statement omitting the `WHERE` clause to see what could happen to your databases if you do so:

```
mysql> UPDATE users SET registered_card = 0;
```

See the output in the next section.