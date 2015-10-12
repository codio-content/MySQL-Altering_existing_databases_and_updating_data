|||info
### Reset section database
If you make a mistake while editing the `App` database in this set of sections or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-app.js)
|||
---

User settings are another example of data that needs to be updated. Users often decide to change their username, password, email accounts, email notification frequency and so on.

Complete the final challenges and evaluate your understanding of the `UPDATE`, `ALTER` and `RENAME` SQL keywords.

{Check It!|assessment}(test-2098680248)


|||guidance
### Correct answers:

`CREATE DATABASE App;`

`USE App;`

Single line statement:

```
CREATE TABLE App.settings (user_id INT(7) NOT NULL,email_frequency TINYINT(2) UNSIGNED DEFAULT 15,layout VARCHAR(70) DEFAULT "vertical",updated_at DATETIME);
```

Multi-line statement:

```
mysql> CREATE TABLE App.settings (
	  -> user_id INT(7) NOT NULL,
	  -> email_frequency TINYINT(2) UNSIGNED DEFAULT 15,
	  -> layout VARCHAR(70) DEFAULT "vertical",
	  -> updated_at DATETIME
    -> );
```

|||