---
title: "Ios Core Data the Model Used to Open Store Incompatible One Create the Store"
date: 2014-11-4
template: "post.hbs"
---

##NSCocoaErrorDomain Code: 134100

During development, this error can appear while adding pre populated data in a new project or after modifying entities in a CoreData model.

>The model used to open the store is incompatible with the one used to create the store

Regardless of the reason, the solution is the same: Remove the app from your simulator and `clean` the project.

If it's happening during production, you will have to implement something like a migration mechanism.