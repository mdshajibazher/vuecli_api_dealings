class AppStorage {

	store(token,userinfo){
		localStorage.setItem('access_token',token);
		localStorage.setItem('userinfo',userinfo);
	}

	clear(){
		localStorage.removeItem('access_token')
		localStorage.removeItem('userinfo')
	}

	getToken(){
		return localStorage.getItem('access_token')
	}

	getUser(){
		return localStorage.getItem('access_token')
	}

} 

export default AppStorage = new AppStorage()