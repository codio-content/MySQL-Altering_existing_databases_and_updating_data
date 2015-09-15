For the means of exemplifying how the `UPDATE` SQL statement works, we wrote the `trip_datetime_end` and `trip_total_fare` values manually. 

However in a real world scenario, most probably is that you'd be using some programming language such as PHP, JavaScript, Java, Swift or Python to name a few, that would interact with a SQL database management system (like MySQL) and generate the `DATETIME` values automatically as well as calculating the total fares.

---
Let's experiment with omitting the `WHERE` clause in the `UPDATE` statement to see what happens to the tables if we don't have such caution.