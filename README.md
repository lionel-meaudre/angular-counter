# angular-counter
I've created the project with Angular CLI so you start the app using ``ng serve --open``\
I've implemented 4 components:
- app (displays the counter)
- up (increase button)
- down (decrease button)
- reset (reset form according to select birthdate)

And 1 service:
- counter

The service is injected in every component allowing them to work on the same data.\
The counter is an observable so that the app component is easy to update.\
The counter is persisted in session storage.\
I didn't persist the step value (X) as it was not required (though it could make sense): If you reload the app, it will be reset to 1.



