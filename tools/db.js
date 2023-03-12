const userMap = new Map();

const userSchema = {
  id: null,
  name: null,
  last_name: null,
  email: null,
  password: null,
  phoneNumber: null,
  street: null,
  neighborhood: null,
  zipCode: null,
  country: null,
  city: null,
  state: null,
  town: null,
  completedProfile: null,
  termsConditions: null,
  createAt: null,
  updateAt: null,
  deleteAt: null
}


module.exports = {
  schemas:{
    userSchema
  },
  tables:{
    userMap
  }
};
