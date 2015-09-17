Update the `total_kms` and the `is_premium` columns where the model is equal to "Volvo S 60":

```
mysql> UPDATE cars
    -> SET 
    -> total_kms = 1200.35,
    -> is_premium = 1
    -> WHERE model = "Volvo S 60";
```

Change the `cars` table name to be `vehicles`:

```
mysql> RENAME TABLE cars TO vehicles;
```

Update the `total_kms` column to the vehicles that are between the `id` 1 and 3:

```
mysql> UPDATE EPCars.vehicles
    -> SET total_kms = 7500.00
    -> WHERE id BETWEEN 1 AND 3;
```

Extend the range of the `total_kms` column data type to be `FLOAT(10,2)`:

```
mysql> ALTER TABLE EPCars.vehicles
    -> CHANGE COLUMN total_kms
    -> total_kms FLOAT(10,2);
```