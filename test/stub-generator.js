export default class FakeStore{

  static successfulLogin = () => {
    return () => {
      return Promise.resolve({
        'success': true,
        'message': 'user signIn successful',
        'token': '123',
      });
    };
  };

  static failedLogin = () => {
    return () => {
      return Promise.resolve({
        'success': false,
        'message': 'user signIn failed',
      });
    };
  };

}