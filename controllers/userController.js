const { default: mongoose } = require("mongoose");
const connectTOMongoDB = require("./dbController");
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Project = mongoose.model("Project", projectSchema);
const createProject = async (payload) => {
  try {
    if (!payload) {
      return { response: "Invalid Payload", statusCode: 400 };
    }
    const { title, description } = payload;
    if (!(title && description)) {
      return { response: "Invalid title or description", statusCode: 400 };
    }
    const project = new Project({
      title: title,
      description: description,
    });

    await project.save();
  } catch (error) {
    return {
      response: `Exception in add flock comment : ${error}`,
      statusCode: 500,
    };
  }
};

module.exports = { createProject };
