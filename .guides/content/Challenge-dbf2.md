{Check It!|assessment}(test-2648162698)

---
Let's experiment with omitting the `WHERE` clause in the `UPDATE` statement to see what happens to the tables if we don't have such caution.


|||guidance
### Correct answer:

`USE EPDriver;`

`UPDATE trips SET trip_datetime_start = '2015-09-14 00:00:00' WHERE id < 5;`

|||
