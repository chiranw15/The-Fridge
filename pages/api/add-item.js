import { v4 as uuid } from "uuid";
import getItems from "../../backend/getItems";
import addSeconds from "date-fns/addSeconds";
import fillFridge from "../../backend/fillFridge";

export default (req, res) => {
  let items = getItems();
  const id = uuid();
  const item = req.body;

  if (
    isNaN(item.expiresAfterSeconds) ||
    item.expiresAfterSeconds > 1000000 ||
    item.expiresAfterSeconds < 0
  ) {
    res.statusCode = 400;
    res.json({
      error:
        "The field expiresAfterSeconds must be a number between 1 and 1000000.",
    });
    return;
  }

  if (typeof item.name !== "string" || item.name.length < 1) {
    res.statusCode = 400;
    res.json({
      error: "The field name must be a non-empty string.",
    });
    return;
  }

  if (items.find((savedItem) => savedItem.name === item.name) !== undefined) {
    res.statusCode = 400;
    res.json({
      error: "Item with this name is already in the fridge.",
    });
    return;
  }

  const newItem = {
    id,
    name: item.name,
    expiresIn: addSeconds(new Date(), item.expiresAfterSeconds),
  };
  items.push(newItem);
  fillFridge(items);

  res.statusCode = 200;
  res.json({ items: items });
};
