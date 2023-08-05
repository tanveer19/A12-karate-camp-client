/*

1. install stripe and react stripe js
2. create a checkout form with card element (card element contains : card number, expiration date, cvs, zip code)
3. create account on stripe and get publishable key pk
4. get card info
5. create a payment method
6. use test card to test payment
7. on the server side: install stripe:
yarn add stripe
8. create a payment intent api with payment method types: ['card]
provide amount in cents (multiply price with 100)
9. call payment intent api o get client secret and store it in a state
10. use confirmCardPayment api with client secret card info
*/
