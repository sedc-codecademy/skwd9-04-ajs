# Homework

Using the data from the https://restcountries.eu/#api-endpoints, we would like from you to create 2 individual homeworks.

1. The user should insert code of a regional bloc. From the response you get, show every country that has more than one and less than four alternative spellings ("altSpellings"). Use Promise with AJAX in the function where you should send the value from the inserted regional bloc and Promise in the function where you will get all the countries with specific number of alternative spellings defined above. Also provide solution with fetch() inside asynchronous function and await both request and function where you do the check and returns every countries with specific alternative spellings.

2. The user should insert ISO 3166-1 2-letter country code. From the response you get, log every country name that has the same currency as the country from the response. Use Promise with AJAX in every function that you want to receive some response from the api-endpoints. Also provide solution with fetch() when you send requests. The function that supposed to log every country name should be asynchronous and you shall await the call for specific country data.