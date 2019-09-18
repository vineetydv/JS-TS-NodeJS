//DO NOT MODIFY THIS FILE
class IOUtil{
	static start(callback){
		process.stdin.setEncoding('utf8');
		process.stdin.on('data', callback);
	}
	static stop(){
		process.exit();
	}
}
module.exports = IOUtil;
