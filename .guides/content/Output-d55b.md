After having omitted the `WHERE` clause, doing a `SELECT * FROM EPDriver.users;` should display the following table:

```
+----+-----------------+-----------------+
| id | name            | registered_card |
+----+-----------------+-----------------+
|  1 | Brielle Beard   |               0 |
|  2 | Byron Manning   |               0 |
|  3 | Halla Higgins   |               0 |
|  4 | Garrison Hunter |               0 |
|  5 | Jasmine Aguirre |               0 |
|  6 | Ray Blair       |               0 |
|  7 | Eden Peck       |               0 |
|  8 | Teagan Cole     |               0 |
|  9 | Gemma Malone    |               0 |
| 10 | Xandra Wolf     |               0 |
+----+-----------------+-----------------+
10 rows in set (0.00 sec)
```

As you can see, the `registered_card` column has only `0` values now. 

If you had no backup of your database before having done this, unfortunately, there's no going back.

We'll talk about database backups, performance and security measures in future units.

--- 

Ready for a challenge? Go to the next section.