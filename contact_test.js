<script>
	function sendEmail(){

		let radio = document.getElementById('contact_agree');
			if(!radio.checked){
				alert('개인정보 수집에 동의해주세요.');
				return
			} 

	    Email.send({
			Host : "smtp.elasticemail.com",
       	    Username : "thecorative@naver.com",
            Password : "1679F10A2EF8C4B74C2B7EA2D8362FA8659E",
			To : 'yatav@yatavent.com',
			From : 'thecorative@naver.com',
			Subject : "메타포레스트 Contact Us 문의",
			Body : "문의유형 : " + document.getElementById("selection").value
			+ "<br> 소속기관/회사명: " + document.getElementById("company").value
			+ "<br> 담당자: " + document.getElementById("name").value
			+ "<br> 연락처: " + document.getElementById("phone").value
			+ "<br> 이메일: " + document.getElementById("email").value
			+ "<br> 제목: " + document.getElementById("title").value
			+ "<br> 내용: " + document.getElementById("message").value

			}).then(
				message => alert("Message sent sucessfully")
	    );
    }
</script>