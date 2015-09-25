As another kind of _update_ operation, the `RENAME` SQL keyword is designed to change the name of an existing table.

After discussing with the `EPDriver` app business team, we discovered that the `users` must be called `passengers`.

Let's rename the `users` table to be `passengers`:

```
mysql> RENAME TABLE users TO passengers;
```

Pretty straight forward right? 
Execute a `SHOW TABLES;` statement and see this output:

```
+--------------------+
| Tables_in_epdriver |
+--------------------+
| drivers            |
| passengers         |
| trips              |
+--------------------+
```

---
In the next couple of sections, we will be working with several examples to reinforce this.