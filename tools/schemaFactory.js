const { faker } = require('@faker-js/faker')

const { schemas } = require('./../tools/db')

function createFakeUsers(amount, store){
  const users = [];

  for(let i = 0 ; i < amount+1; i++){
    const user = {...schemas.userSchema};
    user.id = i;
    user.name = faker.name.firstName();
    user.last_name = faker.name.lastName();
    user.email = faker.internet.email();
    user.password = null;
    user.phoneNumber = faker.phone.number();
    user.street = faker.address.street();
    user.neighborhood = null;
    user.zipCode = faker.address.zipCode();
    user.country = faker.address.county();
    user.city = faker.address.city();
    user.state = faker.address.state();
    user.town = null;
    user.completedProfile = true;
    user.termsConditions = true;
    user.createAt = faker.date.between();
    user.updateAt = null;
    user.deleteAt = null;

    if(store){
      store.set(i, user);
    }else{
      users.push(user);
    }
  }
}

module.exports = {
  createFakeUsers
}
