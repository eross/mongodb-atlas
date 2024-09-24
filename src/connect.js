
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const BlogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    content: String,
    tags: [String],
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});

const BlogModel = mongoose.model("Blog",BlogSchema);



const uri = `mongodb+srv://${USER}:${PASSWORD}@sandbox.wgeng.mongodb.net/?retryWrites=true&w=majority&appName=sandbox`;
//console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
