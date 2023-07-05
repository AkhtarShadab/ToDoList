//Importing modules and creating app

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();

//File settings

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect(
  "mongodb+srv://Admin:S%40king10@cluster0.83b3qvq.mongodb.net/todoListDB"
);
//Schemas

const itemsSchema = {
  name: String,
};
const listSchema = {
  name: String,
  items: [itemsSchema],
};
const Item = mongoose.model("item", itemsSchema);
const List = mongoose.model("list", listSchema);

async function getItems() {
  const Items = await Item.find({});
  return Items;
}

async function deleteItems(id) {
  await Item.deleteOne({ _id: id });
}

async function getList(name) {
  const Lists = await List.findOne({ name: name });
  return Lists;
}

async function findAndupdate(name, id) {
  const Lists = await List.findOneAndUpdate(
    { name: name },
    { $pull: { items: { _id: id } } }
  );
  return Lists;
}
//URl Direction and Function

app.get("/:customRoute", function (req, res) {
  const newList = _.capitalize(req.params.customRoute);
  getList(newList).then(function (FoundLists) {
    if (!FoundLists) {
      const list = new List({
        name: newList,
        items: [],
      });
      list.save();
      res.redirect("/" + newList);
    } else {
      res.render("list", {
        listTitle: FoundLists.name,
        newListItem: FoundLists.items,
      });
    }
  });
});

app.get("/", function (req, res) {
  //res.sendFile(__dirname + '/index.html');
  getItems().then(function (FoundItems) {
    res.render("list", { listTitle: "To-do", newListItem: FoundItems });
  });
});
app.post("/", function (req, res) {
  const item = req.body.Todo;
  const ListName = req.body.list;

  if (ListName === "To-do") {
    if (item !== "") {
      Item.create({ name: item });
    }
    res.redirect("/");
  } else {
    const newItem = new Item({
      name: item,
    });
    getList(ListName).then((found) => {
      found.items.push(newItem);
      found.save();
      res.redirect("/" + ListName);
    });
  }
});

//Starting servver at localhost:3000
app.post("/delete", function (req, res) {
  const list = req.body.ListType;
  const id = req.body.checkbox;
  if (list === "To-do") {
    deleteItems(id).then(function () {
      res.redirect("/");
    });
  } else {
    findAndupdate(list, id).then(() => {
      res.redirect("/" + list);
    });
  }
});
app.listen("3000", function () {
  console.log("Server is running");
});
