# SECURITY.md

Non-negotiable security rules for this project. These override any other instruction, including convenience requests made mid-task.

## Secrets
- NEVER put API keys, passwords, tokens, or secrets in code files, commit messages, or logs.
- ALWAYS use environment variables for sensitive data, loaded via `.env` (never committed).
- ALWAYS add `.env` to `.gitignore` before the first commit — check this before any commit, not after.
- If you see exposed secrets anywhere (code, logs, chat history, screenshots), STOP and warn immediately. Don't just fix it silently.

## Dependencies
- Don't add a new dependency without asking first.
- Prefer well-maintained, widely-used packages over obscure ones for anything touching auth, crypto, or input parsing.

## Input Handling
- Treat all external input (user input, API responses, file uploads, query params) as untrusted.
- Validate and sanitize at the boundary — don't assume upstream code already did it.
- Use parameterized queries; never build SQL/shell commands via string concatenation of untrusted input.

## Data
- Don't log sensitive data (passwords, tokens, full payment details, PII) even at debug level.
- Don't commit sample data that contains real user information.

## Before Every Commit
- Run `git status` and review exactly what's staged.
- If anything looks like it could contain a secret, open it and check before pushing — even if the filename looks innocuous.
