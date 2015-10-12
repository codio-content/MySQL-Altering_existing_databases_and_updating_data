{Check It!|assessment}(test-1960553382)


|||guidance
### Correct answers:

`USE EPDriver;`

1. Single line statement:

`ALTER TABLE drivers CHANGE COLUMN name driver_name VARCHAR(125) NOT NULL;`

1. Multi-line statement:

```
mysql> ALTER TABLE drivers 
    -> CHANGE COLUMN name driver_name VARCHAR(125) NOT NULL;
```

2. Single line statement:

`ALTER TABLE drivers ADD COLUMN driver_age TINYINT(2) UNSIGNED NOT NULL;`

2. Multi-line statement:

```
mysql> ALTER TABLE drivers 
    -> ADD COLUMN driver_age TINYINT(2) UNSIGNED NOT NULL;
```

|||
