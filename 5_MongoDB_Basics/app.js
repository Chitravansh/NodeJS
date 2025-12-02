const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://chitravanshmohandevelops_db_user:8787230617@cluster0.c6trml8.mongodb.net/`
  )
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: String,
    default: () =>
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // //create a new document
    const newUser = await User.create({
      name: "Updated_user",
      email: "Updateduser@123.com",
      age: "22",
      isActive: false,
      tags: ["developer"],
    });

    /*  Another way of creating the user 
                 const newUser = new  User({
            name : 'Chhitravansh 11',
            email : 'mchitravansh@gmail.com',
            age : '22',
            isActive : true,
            tags : ['developer', 'designer','manager'],
        })

        await newUser.save();
        
        */

    console.log("Created new user ", newUser);

    //get All users
    //    const allUsers = await User.find({});
    //    console.log(allUsers);

    //    //get All users whose Acctive is false
    //    const getActiveUserOfActiveFalse = await User.find({isActive : true})
    //    console.log(getActiveUserOfActiveFalse);

    //get user by name
    // const getUserByName = await User.findOne({name : 'Lakshya'})
    // console.log(getUserByName);

    //get  a latest user created by id

    // const getLastUserCreatedByUserId = await User.findById(newUser._id);
    // console.log(getLastUserCreatedByUserId);

    // const selectedFields = await User.find().select('name email -_id ');
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    // const sortedUsers = await User.find().sort({age: -1})
    // console.log(sortedUsers);

    // const countDocuments = await User.countDocuments({isActive : false})
    // console.log(countDocuments);

    // const deletduser = await User.findByIdAndDelete(newUser._id);
    // console.log('deleted_user ->', deletduser);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
      
    );

    console.log("Updated user->",updatedUser)
  } catch (e) {
    console.log(`Error ->`, e);
  } finally {
    await mongoose.connection.close();
  }
}

// @3:21:32
runQueryExamples();
