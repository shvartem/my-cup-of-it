/* eslint-disable no-param-reassign */
const meetsService = require('./meets.service');
const companyService = require('./company.service');
const technologiesService = require('./technologies.service');

async function getFullUserData(user) {
  let meets;
  let company;
  let technologies;

  try {
    meets = await meetsService.findUserMeets(user);
    company = await companyService.findCompanyById(user.companyId);
    technologies = await technologiesService.findTecnnologiesByUserId(user.id);
  } catch (e) {
    console.log(e);
  }
  delete user.password;
  return ({
    ...user, meets, company, technologies,
  });
}

module.exports = { getFullUserData };
