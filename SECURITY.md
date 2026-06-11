# SECURITY.md

## OWASP A03: Injection

To reduce the risk of SQL injection attacks, this project uses Prisma ORM for all database operations. Prisma automatically handles user input safely by using parameterized queries. No unsafe database methods such as raw SQL queries are used in the application.

## OWASP A05: Security Misconfiguration

To improve security, additional security headers were added to the Next.js configuration. These headers help protect the website from common attacks such as clickjacking and limit the amount of information shared when users follow links. This reduces the risk of security issues caused by incorrect or missing configurations.
