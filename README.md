# Tasker-Notification
Tasker Project for creating a custom Notification
Mostly useful for when you're dealing with data in JavaScript and want to be able to display it in a customizable notification, without having to reinvent the wheel every time you have slightly different data.

To Install:

1. Import the Project XML file within Tasker. To import a project, go into Tasker and long-press a project tab near the bottom of the screen, then select Import and find the .proj.xml file.
2. Download the JavaScript files
3. In the Notify task, verify that the NotificationDeconstruct.js file path is correct.

To Use:

Within a JavaScript(let), start with the following:

    var n = new Notification();

This will create a Notification object that has a few default values that are needed. To fill the notification with relevant info, do something like this:

    n.fill( {
        title: "Test Title",
        text: "Test Text",
        style: "inbox",
        inboxlines: ["Line 1", "Line 2", "Line 3"],
        bigsubtext: "+2 more",
        icon: icon("alert_dark_frame"),
        color: color("black")
    } );

What this does is has all the important information in an object. If you find that you use similar properties for multiple notifications, you can use the preset function:

    n.preset("reminder");

Where the "reminder" preset has whatever information you'd like! You can go in and edit the presets within the Notification.js file.

To add a button, the function takes the following parameters: (task_name, button_label, icon to use)

    n.addbutton("Test Task", "Button", icon("alert_dark_frame"));

Once you're satisfied the notification has all the content you'd like, add the following line into your JavaScript

    n.create();

And there you go!

Current List of supported things:

    title: // Title
    text: // Text
    subtext: // Subtext
    style: "bigtext" // Big Text Style
    bigtext: "Big Text" // Text when expanded
    bigsubtext: // Big Sub Text
    style: "inbox" // Inbox Style
    inboxlines: ["array", "of", "strings"] // Inbox Style Content Text
    iconpicker: // can be "small" or "custom". If "custom", sets a Large Icon with the text you specify (3 characters max)
    icon: // Integer or use the icon("string") function
    color: // Sets icon background color. Integer or color("string") function
    priority: // -2 to 2
    persistent: // Boolean true or false
    ledargb: // Integer or color("string") function. ledargb, ledon, and ledoff all have to be set
    ledon: // milliseconds the led should be on. ledargb, ledon, and ledoff all have to be set
    ledoff: // milliseconds the led should be off. ledargb, ledon, and ledoff all have to be set
    ticker: // Ticker text for accessibility services
    category: // Sets category
    defaults: // Sets defaults for lights, sounds, or vibrate. If sound or vibrate are in the default, notification will be a heads up notification
    alertonce: // Boolean true or false to only alert (vibrate, sound) the first time
    dismissontouch: // Boolean true or false to dismiss the notification if you touch it
    ontouch: // Task name to be run when the notification is touched
    ondelete: // Task name to be run when the notification is deleted
    vibrate: // Vibrate pattern
    idn: // Notification identification number. To be used to update/cancel notifications
    
