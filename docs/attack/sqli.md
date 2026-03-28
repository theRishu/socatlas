# 💉 SQL Injection (SQLi)

!!! note "What is SQL Injection?"
    SQL Injection (SQLi) is a critical server-side vulnerability where an attacker manipulates a web application's database query by injecting malicious SQL code into input fields. This allows them to view, modify, or delete sensitive database contents.

### How it Works
If an application takes a username from a login form and directly drops it into a query like `SELECT * FROM users WHERE username = '$user'`, an attacker can input `' OR 1=1 --`.
The resulting query becomes `SELECT * FROM users WHERE username = '' OR 1=1 --'`, which always evaluates to true, instantly bypassing authentication.

### Real-World Example
An attacker visits an e-commerce URL like `shop.com/item?id=5` and changes it to `shop.com/item?id=5 UNION SELECT username, password FROM admin_users`. The web page then accidentally dumps the entire password table onto the screen.

### How to Mitigate
*   **Parameterized Queries (Prepared Statements):** This is the ultimate defense. It forces the database engine to treat the user's input strictly as string text, never as executable code.
*   **Input Validation:** Use strict allow-lists for expected input (like ensuring an ID is purely numeric).
*   **Least Privilege:** Ensure the database user account used by the web application only has read access to the tables it strictly needs, not overall admin rights.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Injecting malicious SQL characters into a web form to manipulate backend database queries.
    *   **Impact:** Bypassing login screens, dumping entire customer databases, and deleting data.
    *   **Fix:** Always use Parameterized Queries (Prepared Statements) so input is absolutely never treated as code.
