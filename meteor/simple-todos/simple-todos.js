if (Meteor.isClient) {
  Template.body.helpers({
    tasks: [
      { text: "Task 1" },
      { text: "Task 2" },
      { text: "Task 3" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
