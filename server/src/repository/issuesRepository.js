
const  = require("../models/issuesModel.js")


//sample
const postName = async (name) => {
const result = await User.create({
name,
});
return result;
};
module.exports = {
postName,
};