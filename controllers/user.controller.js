const { tables } = require('../tools/db');

function getUser(req, res){
  /*
  TODO:
    * Not return user deleted.
  */
  const { id } = req.params;

  const user = tables.userMap.get(parseInt(id));

  res.status(200).json(user);
}

function createUser(req, res){
  /*
  TODO:
    * Implement validation fields
    * Implement hash password
    *
  */


  const payload = req.body;

  const newId = tables.userMap.size + 1;

  tables.userMap.set(newId, payload)

  res.status(201).json({
    id: newId
  });
}

function updateUser(req, res){
  /*
  TODO:
    * Implement validation fields
    * Implement hash password
    *
  */
  const { id } = req.params;
  const payload = req.body;

  let user = tables.userMap.get(parseInt(id));
  tables.userMap.delete(parseInt(id));

  user = {...user, ...payload}

  tables.userMap.set(parseInt(id), user);

  res.status(201).json(user);
}

function deleteUser(req, res){
  const { id } = req.params;

  const user = tables.userMap.get(parseInt(id));
  user.deleteAt = true;

  res.status(201).json({
    id
  });

}

module.exports = {
  getUser,
  updateUser,
  createUser,
  deleteUser
};
