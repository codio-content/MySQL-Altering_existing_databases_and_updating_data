User settings are another example of data that needs to be updated. Users often decide to change their username, password, email accounts, email notification frequency and so on.

Complete the final challenges and evaluate your understanding of the `UPDATE`, `ALTER` and `RENAME` SQL keywords.

{Check It!|assessment}(test-2098680248)


|||guidance
### Correct answers:

`CREATE DATABASE App;`

```
CREATE TABLE settings (
	 user_id INT(7) NOT NULL,
	 email_frequency TINYINT(2) UNSIGNED DEFAULT 15,
	 layout VARCHAR(70) DEFAULT "vertical",
	 updated_at DATETIME
);
```

|||