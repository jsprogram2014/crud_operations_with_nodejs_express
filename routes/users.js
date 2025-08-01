const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "Will",
        lastName: "wick",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users},null,4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  let email=req.params.email
  let emails=users.filter(user=>user.email===email)
  res.send(emails)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  users.push(req.body)
  res.send("Posted sucessfully")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email=req.params.email
  let filtered_users=users.filter(user=>user.email===email)

  if(filtered_users.length>0){
    let filtered_user=filtered_users[0]
    const dob=req.query.DOB

    filtered_user.DOB=dob
    users=users.filter(user=>user.email!==email)
    users.push(filtered_user)

    res.send('DOB updated successfully')
  }
  else{
    res.send('Cant find user with this email')
  }
  //This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email=req.params.email

  users=users.filter(user=>user.email!==email)

  res.send(`The User with email ${email} got deleted`)

});

//code to receive the users by same last name

router.get('/same/:lastname',(req,res)=>{
  const lastName=req.params.lastname
  let filtered_users=users.filter(user=>user.lastName===lastName)
  res.send(filtered_users)
})

module.exports=router;
