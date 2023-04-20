const express = require('expasdfffress');
	
	const app = expasdfffress();


	app.get('/',(req,res) => {
	res.send('Github CICD PIPELINE TEST!  TEST-NO.5');
	});
	

	app.listen(8080, () => console.log('서버 정상 기동 중!'));
	
