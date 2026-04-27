const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let collection;

async function connectDB() {
    await client.connect();
    const db = client.db("college");
    collection = db.collection("students");
    console.log("MongoDB Connected");
}

connectDB();


// CREATE (Add student)
app.post("/add", async (req, res) => {
    console.log("BODY:", req.body);   // ADD THIS

    const result = await collection.insertOne(req.body);
    console.log("INSERT RESULT:", result);

    res.send("Student added");
});
// READ (Get all students)
app.get("/students", async (req, res) => {
    const data = await collection.find().toArray();
    res.json(data);
});

// DELETE
app.delete("/delete/:name", async (req, res) => {
    await collection.deleteOne({ name: req.params.name });
    res.send("Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

