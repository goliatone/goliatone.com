---
title: "Forcing Schema to the Front End"
date: 2014-07-10
template: "post.hbs"
---

## Forcing the schema onto the front end

By using a schema less Platform, we are forcing the job to the front end.
There is a logical point in which it will brake.
JavaScript has many strengths, but type safeness is not one of them.
Basically, we are not hiding the responsibility, we are forcing it into the weakest link.

A front end application should manage schema, but in a realm of possibility. 
By having the front end being responsible, we make all the instability of the system more apparent to the end user, which is a devaluation of the outcome, the product.

In a chain of responsibility we are tasking the less indicated element to perform a task that has the highest risk and the less reward, since the relation between it working and not working is non linear.

It just gives ammunition to the people that consider JavaScript as a toy language. Miss using a tool, in the same way you don't outsource security to the browser, you should not delegate data integrity or server side business logic.
