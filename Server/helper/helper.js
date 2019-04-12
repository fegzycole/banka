import jwt from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import testData from '../data/testData';


class Helper {
  static findUserByEmail(users) {
    return users.reduce((emailArray, userDetail) => emailArray.concat(userDetail.email), []);
  }

  static createToken(user) {
    const token = jwt.sign(
      {
        user,
      },
      process.env.SECRET,
      { expiresIn: '24h' },
    );

    return token;
  }
}

export default Helper;
