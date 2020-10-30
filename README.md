###To run this project 
You will need to navigate into the api and client directory in seperate tabs
```cd api``` 
```cd client```

When inside either you will need to install dependencies using NPM 
```npm install```

Then run ```npm start``` in both directories
The server should spin up on localhost:9000
The client should spin up on localhost:3000 

###Tech used: 

####Server side: 
Node 
Express

####Client side: 
React
Hooks
Redux
Redux-Thunk
React-Router-Dom

While i think redux and it's middleware is heavy handed for a project this size i thought it would be a good idea to show it as if i was planning to scale to a production application

I should note as well that I didn't get all the cars to work 100% of the time, it seems like there are a couple of cars in the data set that have small variations on them, i think the only difference one of them had was the weight, or sometimes the security status, not sure if that is something a regular person would know haha. 

Also with sending the date to get a fact, i wasn't sure how you could get a date from the three digits in an abiCode, so i just settled for getting a fact for the number, but in future i would have used the JS libray Moment to format the date into a easy to work with format and it's relatively simple to get the month/day the api required like this: 

    const date = moment()
    const month =  moment.month() + 1 //moment month returns month dates zero index based
    const year = moment.year()

    fetch(`http://numbersapi.com/${month}/${year}?json`)
