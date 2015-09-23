Tasks = new Mongo.Collection("tasks");

if(Meteor.isClient){
  //this code only runs on the client
  Template.body.helpers({
    tasks:function(){
      return Tasks.find({});
    }
  });
}
