{Check It!|assessment}(test-224830583)

|||guidance
### Correct answers:

`USE EPDriver;`

Single line statement:

`UPDATE trips SET trip_total_fare = 25.00 WHERE trip_datetime_end IS NULL;`

Multi-line statement:

```
mysql> UPDATE trips 
    -> SET trip_total_fare = 25.00 
    -> WHERE trip_datetime_end IS NULL;
```

|||