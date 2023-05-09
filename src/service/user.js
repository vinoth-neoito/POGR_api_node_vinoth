
class UserService {
	getUsers = async () => {
		const user = await getUser();
		return user;
  };
 
}

export default UserService;
