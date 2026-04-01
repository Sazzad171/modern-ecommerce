# Candidate Decisions & Notes

Please use this file to briefly outline your technical choices and the rationale behind them.

## 1. State Management & Architecture
*Why did you structure your state the way you did? Which patterns did you choose for handling the flaky API requests, loading states, and error handling?*

Ans: Here I'm using simple props drilling for state. For API requests I used 'tanstack query', where first time show loading skeleton. Then if failed retry upto 5 times. If failed 5 times then show a error message and a retry button where user can try again for show products.

## 2. Trade-offs and Omissions
*What did you intentionally leave out given the constraints of a take-home assignment? If you had more time, what would you prioritize next?*

Ans: Due to time constraints, I focused on delivering a working core feature set. If I had more time, I would prioritize adding infinite scroll pagination instead of button click next-previous.

## 3. AI Usage
*How did you utilize AI tools (ChatGPT, Copilot, Cursor, etc.) during this assignment? Provide a brief summary of how they assisted you.*

Ans: First for handle flaky API requests, I searched on ChatGPT and Gemini. From multiple solutions I choose to use Tanstack Query's retry option. Then for optimized solution i take help from Copilot and used which is actually good.

## 4. Edge Cases Identified
*Did you notice any edge cases or bugs that you didn't have time to fix? Please list them here.*

Ans: No bugs, but it will looks better if I hide pagination buttons until first time API fetch.
