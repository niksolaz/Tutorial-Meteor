if (Meteor.isClient) {
  
  Template.body.helpers({
    task:[
      { text: "This is task 1"},
      { text: "This is task 2"},
      { text: "This is task 3"},
    ]
  });
}
